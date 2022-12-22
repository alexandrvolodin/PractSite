var login=prompt('Желаете пройти регистрацию на сайте?');
if (login=='Да'){
    alert('Круто!');
    var userName=prompt('Введите логин');
    if (userName=='Админ'){
        var	userPas=prompt('Введите пароль');
        if (userPas=='Я главный') alert('Здравствуйте!');
        else if (userPas==null) alert('Отменено');
        else alert('Неверный пароль');
    }
	else if (userName==null) alert('Отменено');
    else alert('Я вас не знаю');
}
else alert('Попробуй ещё раз');