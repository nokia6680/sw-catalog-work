function validationTel() {
    let tel = document.getElementById('tel').value;
    let textTel = document.querySelector('.checkout__error--tel');
    let patternTel = /^((\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\-]{7,10}$/;

    if (tel.match(patternTel)) {
        textTel.classList.add('hidden');

    } else {
        textTel.classList.remove('hidden');
        textTel.innerHTML = "Телефон указан неверно. Должно быть 11 цифр, например: +7 (900) 800-70-60";
        textTel.style.color = '#DE007C';
    }

    if (tel == '+') {
        textTel.innerHTML = "";
    }

    if (tel == '+7 (') {
        textTel.innerHTML = "";
    }
};

function validationMail() {
    let email = document.getElementById('mail').value;
    let text = document.querySelector('.checkout__error--mail');
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        text.classList.add('hidden');

    } else {
        text.classList.remove('hidden');
        text.innerHTML = "Поле email заполнено не верно. Оно должно содержать латинские буквы и @";
        text.style.color = '#DE007C';
    }

    if (email == '') {
        text.innerHTML = "";
    }
}
