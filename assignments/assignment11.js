const twitterButton = document.querySelector('#js-tweet');
const spinner = document.querySelector('#js-spinner');
const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', getQuote);

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

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
        alert('Found your quote!');
      } finally {
        quoteButton.disabled = false;
        spinner.classList.add('hidden');
      }
    }

  function displayQuote(x) {
    document.getElementById('js-quote-text').textContent = x;
  }


function setTweetButton(quote) {
    twitterButton.setAttribute('href', `https://twitter.com/share?text=${quote} - Donald Trump`);
  }
  
  getQuote();
  setTweetButton();
