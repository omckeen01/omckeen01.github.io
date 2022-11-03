const spinner = document.querySelector('#js-spinner');
const divWithQuote = document.getElementById("insertQuoteHere");

const getQuote = () => {
	spinner.classList.remove('hidden');
  fetch("https://api.kanye.rest")
  .then(response => response.json())
  .then(data => ( divWithQuote.innerHTML = data.quote ));
}
 

    