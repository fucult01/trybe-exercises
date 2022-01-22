const loginBtn = document.querySelector('#submit-btn');
const eraseBtn = document.querySelector('#erase-btn');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
})

eraseBtn.addEventListener('click', () => {
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');

    for (let k = 0; k < formElements.length; k += 1) {
        const userInput = formElements[k];
        userInput.value = '';
        userInput.checked = false;
    }
    textArea.value = '';
})

// const userCheck = () => {
//     const emailLength = document.querySelector('#email-input').value.length;
//     const nameLength = document.querySelector('email-input').value.length;
//     const textAreaLength = document.querySelector('#text-area').value.length;

//     if (emailLength < 15 || emailLength > 30 || nameLength < 15 || nameLength > 30 || textAreaLength > 300 || textAreaLength < 50) {
//         alert('Dados inválidos!');
//     }
// }

loginBtn.addEventListener('click', () => {
    const emailLength = document.querySelector('#email-input').value.length;
    const nameLength = document.querySelector('#name-input').value.length;
    const textAreaLength = document.querySelector('#text-area').value.length;

    if (emailLength < 10 || emailLength > 30 || nameLength < 10 || nameLength > 30 || textAreaLength > 300 || textAreaLength < 50) {
        alert('Invalid data!');
    } else {
        alert('Success!')
    }
})