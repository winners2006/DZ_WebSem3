const name = prompt('Введите Ваше имя', 'Имя');
greeting(name);
function greeting(nameFun) {
    console.log(`Приветствую тебя ${nameFun}`);
}