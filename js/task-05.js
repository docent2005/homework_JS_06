const nameinput = document.querySelector('#name-input');
const nameoutput = document.querySelector('#name-output');
nameinput.addEventListener('input', () => {
    if (nameinput.value !== '') {
        nameoutput.textContent = nameinput.value; 
        return;
    }
    nameoutput.textContent = 'Anonymous';
});