
/* Script */

let select_currency=document.querySelectorAll('.currency');
let input_currency=document.getElementById('input_currency');
let output_currency=document.getElementById('output_currency');

const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
  .then(data => data.json())
  .then((data) => {
	  const entries = Object.entries(data);
	  for(let i=0; i < enties.length; i++){
		  select[0].innerHTML += `option value="${entries[i][0]}" > ${entries[i][0]}`
		  select[1].innerHTML += `option value="${entries[i][0]}" > ${entries[i][0]}`
	  }
  });
  
  
 