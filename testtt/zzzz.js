const ExcelJS = require('exceljs');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { createWriteStream } = require('fs');

const argv = yargs(hideBin(process.argv))
    .option('dir-name', {
        alias: 'd',
        describe: 'Path to the Excel file',
        demandOption: true,
        type: 'string',
    })
    .option('worksheet-name', {
        alias: 'w',
        describe: 'The name of the worksheet to process',
        demandOption: true,
        type: 'string'
    })
    .option('columns', {
        alias: 'c',
        describe: 'Indices of columns to extract, separated by commas',
        demandOption: true,
        type: 'string',
        coerce: arg => arg.split(',').map(Number)
    })
    .option('rows', {
        alias: 'r',
        describe: 'Indices or range of rows to extract, separated by commas or as a range',
        type: 'string',
        coerce: arg => {
            if (arg && arg.includes('-')) {
                const [start, end] = arg.split('-').map(Number);
                return Array.from({ length: end - start + 1 }, (_, i) => start + i);
            } else if (arg) {
                return arg.split(',').map(Number);
            }
            return null
        }
    })
    .option('constant-values', {
        alias: 'vs',
        describe: 'Constant values for the new columns, separated by commas',
        type: 'string',
        default: '',
        coerce: arg => arg.split(',')
    })
    .option('num-constant-columns', {
        alias: 'n',
        describe: 'Number of constant columns to add',
        type: 'number',
        default: 0
    })
    .option('additional-headers', {
        alias: 'ah',
        describe: 'Headers for the additional constant columns, separated by commas',
        type: 'string',
        default: '',
        coerce: arg => arg.split(',')
    })
    .argv;

async function convertExcelToCSV(filePath, worksheetName, columnsToExtract, constantValues, numConstantColumns, additionalHeaders) {
    const workbook = new ExcelJS.stream.xlsx.WorkbookReader();
    const outputPath = filePath.replace(/\.xlsx?$/, `[${worksheetName}].csv`);
    const outputStream = createWriteStream(outputPath, { encoding: 'utf8' });

    workbook.read(filePath, {
        entries: 'emit',
        sharedStrings: 'cache',
        styles: 'ignore',
        hyperlinks: 'ignore',
        worksheets: 'emit'
    });

    let headersWritten = false;
    workbook.on('worksheet', worksheet => {
        if (worksheet.name === worksheetName) {
            worksheet.on('row', row => {
                if (!headersWritten) {
                    let headers = columnsToExtract.map(colIndex => row.getCell(colIndex).value.toString());
                    headers = [...headers, ...additionalHeaders.slice(0, numConstantColumns)];
                    outputStream.write(headers.join('|') + '\n');
                    headersWritten = true;
                } else if (!argv.rows || argv.rows.includes(row.number)) {
                    let values = columnsToExtract.map(colIndex => {
                        let cellValue = row.getCell(colIndex).text || '';
                        return cellValue.replace(/^'/, '');
                    });
                    constantValues.slice(0, numConstantColumns).forEach(value => {
                        values.push(value);
                    });
                    outputStream.write(values.join('|') + '\n');
                }
            });

            worksheet.on('end', () => {
                outputStream.end();
                console.log(`Finished processing worksheet: ${worksheet.name}`);
            });
        }
    });

    workbook.on('end', () => {
        console.log(`Converted ${filePath} to ${outputPath}`);
    });

    outputStream.on('finish', () => {
        console.log('CSV file has been written successfully.');
    });
}

convertExcelToCSV(argv['dir-name'], argv['worksheet-name'], argv.columns, argv['constant-values'], argv['num-constant-columns'], argv['additional-headers'])
    .catch(error => {
        console.error("Failed to convert file:", error);
    });