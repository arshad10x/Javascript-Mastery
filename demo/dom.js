// 1. Selection of an Element

var a = document.querySelector("h1");
console.log(a);

// 2. Changing HTML

document.querySelector("h1").innerHTML = "DOM Started";
// var b = document.querySelector("h1");
// b.innerHTML = "DOM Started";


// 3. Changing CSS

a.style.color='white';
a.style.backgroundColor='green';

// 4. Event Listener