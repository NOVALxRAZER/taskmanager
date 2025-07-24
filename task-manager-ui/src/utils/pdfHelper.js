import jsPDF from 'jspdf';
import moment from 'moment';

export function generatePDF(tasks) {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('Task Report - Task Manager', 10, 10);

    doc.setFontSize(12);
    doc.text(`Generated at: ${moment().format('DD MMM YYYY, HH:mm:ss')}`, 10, 20);

    let y = 30;

    tasks.forEach((task, index) => {
        if (y > 270) {
            doc.addPage();
            y = 20;
        }

        doc.setFontSize(12);
        doc.text(`${index + 1}. ${task.title}`, 10, y);
        y += 6;

        if (task.description) {
            doc.setFontSize(11);
            doc.text(`   Description: ${task.description}`, 10, y);
            y += 6;
        }

        if (task.pic_name) {
            doc.text(`   PIC: ${task.pic_name}`, 10, y);
            y += 6;
        }

        doc.text(`   Start Date: ${task.start_date ? moment(task.start_date).format('DD MMM YYYY') : '-'}`, 10, y);
        y += 6;

        doc.text(`   End Date: ${task.end_date ? moment(task.end_date).format('DD MMM YYYY') : '-'}`, 10, y);
        y += 6;

        doc.text(`   Created At: ${task.created_at ? moment(task.created_at).format('DD MMM YYYY HH:mm') : '-'}`, 10, y);
        y += 6;

        doc.text(`   Status: ${task.completed ? 'Completed' : 'Incomplete'}`, 10, y);
        y += 10;
    });

    doc.save('task-report.pdf');
}
