let usernameInput = document.querySelector('#username');
let passwordInput = document.querySelector('#password');
let feedbackInput=document.querySelector('#feedback')
let welcome = document.querySelector('.welcome');

const logIn = async () => {
    let username = usernameInput.value;
    let password = passwordInput.value;
    let feedback=feedbackInput.value;
    let res = await fetch('http://127.0.0.1:3000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password,
            feedback:feedback
        })
    })
    // console.log(res);
    if(!res.ok) {
        alert('Failed to login');
        return;
    }
    let { surname } = await res.json();
    welcome.textContent = surname;
}