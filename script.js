
/* Script */

let select_currency=document.querySelectorAll('.currency');
let input_currency=document.getElementById('input_currency');
let output_currency=document.getElementById('output_currency');

const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
  .then(data => data.json())
  .then((data) => {
	  const entries = Object.entries(data);
	  for(let i=0; i < entries.length; i++){
		  select_currency[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`
		  select_currency[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`
	  }
  });
  
 
let btn_convert=document.getElementById('btn_convert');
btn_convert.addEventListener('click',converter);
function converter(){
let input_currency_value=input_currency.value;
let output_currency_value=output_currency.value;
if(select_currency[0].value != select_currency[1].value){
	const host = 'api.frankfurter.app';
	fetch(`https://${host}/latest?amount=${input_currency_value}&from=${select_currency[0].value}&to=${select_currency[1].value}`)
	.then(val => val.json())
	.then((val) => {
		output_currency.value=Object.values(val.rates)[0]
});
}
else {
	alert('Please select two different currency');
}
};