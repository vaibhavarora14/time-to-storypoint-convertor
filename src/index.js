const convertButton = document.getElementById('convertButton');
const copyButton = document.getElementById('copyButton');
const outputDiv = document.getElementById('output');
const outputDivWrapper = document.getElementById('outputWrapper');
const copyButtonText = document.getElementById('copyButtonText');

function convert() {
    const hoursValue = document.getElementById('hours').value ?? 0;
    const minutesValue = document.getElementById('minutes').value ?? 0

    const totalValue = (Number(hoursValue) * 60) + Number(minutesValue);
    const SPValueInMinutes = 8 * 60;

    const totalValueInSP = totalValue / SPValueInMinutes;

    outputDiv.innerText = totalValueInSP.toFixed('2');
    outputDivWrapper.classList.remove('invisible');
}

function copyStoryPoints() {
    navigator.clipboard.writeText(outputDiv.innerText);
    copyButtonText.innerText = 'Copied!';
    setTimeout(() => {
        copyButtonText.innerText = 'Copy';
    }, 3000)
}


copyButton.addEventListener('click', copyStoryPoints);
convertButton.addEventListener('click', convert)