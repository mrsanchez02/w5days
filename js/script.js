const greeting = document.getElementById('greeting');
const actual_date = document.getElementById('actual_date');
const working_date =  document.getElementById('working_date');

const today = moment().format("MMM Do YY");
const today2 = moment().format("a");
const dates = moment().businessAdd(5).format("MMM Do YY");

actual_date.innerHTML = `${today}`;
working_date.innerHTML = `${dates}`;

console.log(today2);
const meridiam = today2.substring(0,2);

switch (meridiam) {
    case 'am':
        greeting.innerHTML = `Good morning! 🌞`
        break;
    case 'pm':
        greeting.innerHTML = `Good afternoon! 🌤`
        break;
        break;
    default:
        greeting.innerHTML = "Welcome Back!"
        break;
}