// h1 { color: red }
// .parrafito { ... }
// #pid { ... }

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});

console.log({h1})

h1.innerHTML = 'Patito <br> Feo';
h1.innerText = 'Patito <br> Feo';
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');
// h1.classList.toggle('verde');
// h1.classList.contains('verde');

input.value = 'JavaScript';

const img = document.createElement('img');
img.setAttribute('src', 'https://pbs.twimg.com/profile_images/1534067141519069184/AyYQAI1b_400x400.jpg');
console.log(img);

pid.append(img);

//reto hacerlo con innerHtml
// pid.innerHTML = '<img src = https://pbs.twimg.com/profile_images/1534067141519069184/AyYQAI1b_400x400.jpg >';
