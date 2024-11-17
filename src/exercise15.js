let weekDay = new Date().getDay();
let weekDayForString;

switch(weekDay) {
    case 0:
        weekDayForString = 'Domingo';
        break;
    case 1:
        weekDayForString = 'Segunda-feira';
        break;
    case 2:
        weekDayForString = 'Terça-feira';
        break;
    case 3:
        weekDayForString = 'Quarta-feira';
        break;
    case 4:
        weekDayForString = 'Quinta-feira';
        break;
    case 5:
        weekDayForString = 'Sexta-feira';
        break;
    case 6:
        weekDayForString = 'Sábado';
        break;
    default:
        weekDayForString = 'Dia da semana não encontrado!';
}
console.log(weekDayForString);