const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pRseult = document.querySelector('#result');

btn.addEventListener('click', btnOnClick);

function btnOnClick(){
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pRseult.innerText = `Resultado: ${sumaInputs}`;
}