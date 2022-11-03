const twitterButton = document.querySelector('#js-tweet');
const spinner = document.querySelector('#js-spinner');
const divWithQuote = document.getElementById("insertQuoteHere");

const getQuote = () => {
	fetch("https://api.kanye.rest")
		.then(response => response.json())
	  .then(data => console.log(data));
}

const endpoint = 'https://api.quotable.io/random';

async function getQuote() {
    let text = await fetch(endpoint);
    let response = await text.text();
    
    
    let json_response = JSON.parse(response);
 

    console.log(json_response['message']);

    displayQuote(json_response['message']);
    setTweetButton(json_response['message']);
    
    spinner.classList.remove('hidden');
    quoteButton.disabled = true;
    try {
        const response = await fetch(endpoint)
        if (!response.ok) {
          throw Error(response.statusText);
        }
        const json = await response.json();
        displayQuote(json_message);
        setTweetButton(json_response);
      } catch {
        alert('Finding a quote for you!');
      } finally {
        quoteButton.disabled = false;
        spinner.classList.add('hidden');
      }
    }

  function displayQuote(x) {
    document.getElementById('js-quote-text').textContent = x;
  }


function setTweetButton(quote) {
    twitterButton.setAttribute('href', `https://twitter.com/share?text=${quote} - Someone Smart`);
  }
  function randomQuote() {
    $.ajax({
        url: "https://api.forismatic.com/api/1.0/?",
        dataType: "jsonp",
        data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
        success: function( response ) {
          $("#random_quote").html("<p id='random_quote' class='lead text-center'>" +
            response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p>");
          $("#tweet").attr("href", "https://twitter.com/home/?status=" + response.quoteText +
            ' (' + response.quoteAuthor + ')');
        }
    });
  }
  
  $(function() {
    randomQuote();
  });
  
  $("button").click(function(){
    randomQuote();
  });
  getQuote();
  setTweetButton();
