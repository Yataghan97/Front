document.addEventListener('DOMContentLoaded', function () {
    const gradeForm = document.getElementById('gradeForm');
    const resultDiv = document.getElementById('result');
    const sumButton = document.getElementById('sumButton');
    const averageButton = document.getElementById('averageButton');

    sumButton.addEventListener('click', function () {
        const grade1 = parseFloat(document.getElementById('grade1').value);
        const grade2 = parseFloat(document.getElementById('grade2').value);
        const grade3 = parseFloat(document.getElementById('grade3').value);

        const sum = grade1 + grade2 + grade3;

        resultDiv.textContent = `Soma das notas: ${sum}`;
    });

    averageButton.addEventListener('click', function () {
        const name = document.getElementById('name').value;
        const grade1 = parseFloat(document.getElementById('grade1').value);
        const grade2 = parseFloat(document.getElementById('grade2').value);
        const grade3 = parseFloat(document.getElementById('grade3').value);

        if (isNaN(grade1) || isNaN(grade2) || isNaN(grade3)) {
            resultDiv.textContent = 'Por favor, insira todas as notas.';
            return;
        }

        const average = (grade1 + grade2 + grade3) / 3;

        let resultText = `Média de ${name}: ${average.toFixed(2)} - ${average >= 7 ? 'Aprovado' : 'Reprovado'}`;

        resultDiv.textContent = resultText;
    });
});
