let btn = document.getElementById('btn');

btn.addEventListener('click', calcular);

function calcular() {
	let num1 = parseFloat(document.getElementById('num1').value);
	console.log(num1);
}
