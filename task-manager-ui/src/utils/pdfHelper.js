import jsPDF from 'jspdf';

export function generatePDF(tasks) {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Task Report - Task Manager', 10, 10);
    doc.setFontSize(12);
    doc.text(`Generated at: ${new Date().toLocaleString()}`, 10, 20);

    let y = 30;
    tasks.forEach((task, index) => {
        doc.text(`${index + 1}. ${task.title}`, 10, y);
        y += 6;
        if (task.description) {
            doc.text(`   ${task.description}`, 10, y);
            y += 6;
        }
        doc.text(`   Status: ${task.completed ? 'Completed' : 'Incomplete'}`, 10, y);
        y += 10;
    });

    doc.save('task-report.pdf');
}
