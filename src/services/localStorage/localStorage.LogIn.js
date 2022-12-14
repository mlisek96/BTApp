const input = document.getElementById('name');
const buttonLogIn = document.getElementById('button-logIn');
const nameDisplayLogIn = document.getElementById('name-LogIn');

//powtórzone, żeby wyświetlać imię po odświeżeniu strony
nameDisplayLogIn.innerHTML = localStorage.getItem('valueNameTaken');

//walidacja na przycisk enter
input.addEventListener('keypress', function (eventEnter) {
    if(eventEnter.key === 'Enter' && input.value) {
        console.log('Enter pressed');
        displayName();
        input.value = '';
    } else if (eventEnter.key === 'Enter') {
        console.log('Alone Enter pressed')
        eventEnter.preventDefault();
    }
})

buttonLogIn.addEventListener('click', function (event) {
    console.log('Button clicked');
    event.preventDefault();
    if (input.value) {
        event.preventDefault()
        displayName()
        input.value= ''
    }
})

function displayName() {
    localStorage.setItem('valueNameTaken', input.value);
    nameDisplayLogIn.innerHTML = localStorage.getItem('valueNameTaken');
}
