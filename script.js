let button = document.querySelector('button');
button.addEventListener('click', (event)=> {
    event.preventDefault();

        const user = 'sal';
        let username = document.querySelector('#username').value.toLowerCase();

        if (username === user) {
            let nameBox = document.querySelector('#username');
            nameBox.style.borderColor = 'green';
            let nameError = document.querySelector('#name-error');
            nameError.style.visibility = 'hidden';
        } else if (username !== user) {
            let nameBox = document.querySelector('#username');
            nameBox.style.borderColor = 'red';
            let nameError = document.querySelector('#name-error');
            nameError.style.visibility = 'visible';
            nameError.textContent = 'wrong username!';
            nameError.style.fontWeight = 'bold';
        }

         const pin = '1234';
         let password = document.querySelector('#password').value;
         let password2 = document.querySelector('#password2').value;

         if (password === pin && password2 === password) {
             let pinBox = document.querySelector('#password');
             pinBox.style.borderColor = 'green';            
             let passwordError = document.querySelector('#password-error');
             passwordError.style.visibility = 'hidden';
             let password2Box = document.querySelector('#password2');
             password2Box.style.borderColor = 'green';
             let password2Error = document.querySelector('#password2-error');
             password2Error.style.visibility = 'hidden';
         } else if (password2 !== password) {
             let pinBox = document.querySelector('#password');
             pinBox.style.borderColor = 'red';
             let passwordError = document.querySelector('#password-error');
             passwordError.style.visibility = 'visible';
             passwordError.textContent = 'check password!';
             passwordError.style.fontWeight = 'bold';
             let password2Box = document.querySelector('#password2');
             password2Box.style.borderColor = 'red';
             let password2Error = document.querySelector('#password2-error');
             password2Error.style.visibility = 'visible';
             password2Error.textContent = 'check password!';
             password2Error.style.fontWeight = 'bold';

         }
});