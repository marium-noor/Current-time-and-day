let bx1 = document.querySelector('.p1');
let bx2 = document.querySelector('.p2')

// CURRENT TIME

setInterval(() => {
    let now = new Date();
    bx1.innerHTML = now.toLocaleTimeString();
},1000)

// CURRENT DAY

function showDay() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let day = new Date().getDay()
    bx2.innerHTML = days[day];
}
showDay()