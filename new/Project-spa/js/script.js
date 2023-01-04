document.getElementsByClassName('mobile-hamburger')[0].addEventListener('click', function() {
    document.getElementsByClassName('menu-holder')[0].classList.add('open');
    document.getElementsByClassName('mask')[0].classList.add('white-mask');
});

document.getElementsByClassName('mobile-close')[0].addEventListener('click', function() {
    document.getElementsByClassName('menu-holder')[0].classList.remove('open');
    document.getElementsByClassName('mask')[0].classList.remove('white-mask');
});


const createAppointment = (appointment) => {

    const apMessage = document.getElementById('ap-message');
    
    fetch ('https://akademia108.pl/api/ajax/post-appointment.php', {
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(appointment),
    }).then(res => res.json())
    .then(resJSON => {
        apMessage.classList.add('sent');
        apMessage.innerText = `Dziękujemy ${resJSON.appointment.name}. Zostałeś zapisany!`;
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('services').value = '';
        document.getElementById('tel').value = '';
        document.getElementById('date').value = '';
        document.getElementById('time').value = '';
        document.getElementById('notes').value = '';
    })
}

document.getElementById('appointment').addEventListener('submit', function (e) {
    e.preventDefault();

    const apMessage = document.getElementById('ap-message');
    let formFields = document.getElementsByClassName('form-field');
    let allFields = false;
    let appointment = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        service: document.getElementById('services').value,
        phone: document.getElementById('tel').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        message: document.getElementById('notes').value
    }

    for(let i = 0; i<formFields.length; i++) {
        if(formFields[i].value === '') {
            allFields = false;
            formFields[i].classList.add('error');
        } else {
            allFields = true;
            formFields[i].classList.remove('error');
        }
    }

    if (allFields) {
        createAppointment(appointment);
    } else {
        apMessage.classList.add('errors');
        apMessage.innerText = 'Wypełnij wszystkie wymagane pola';
    }

    
});