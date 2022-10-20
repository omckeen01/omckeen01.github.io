const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imageArray = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`]

/* Declaring the alternative text for each image file */

const altArray = {
'pic1.jpg' : 'Cat nip',
'pic2.jpg' : 'Cole the cat',
'pic3.jpg' : 'Ash the cat',
'pic4.jpg' : 'Cats in catnip',
'pic5.jpg' : 'Denali the dog'
};

/* Looping through images */
for (const image of imageArray) {
const newImage = document.createElement('img');
newImage.setAttribute('src', `../images/${image}`);
newImage.setAttribute('alt', altArray[image]);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', a => {
displayedImage.src = a.target.src;
displayedImage.alt = a.target.alt;
});
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
const btnClass = btn.getAttribute('class');
if (btnClass === 'dark') {
btn.setAttribute('class','light');
btn.textContent = 'Lighten';
overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
} else {
btn.setAttribute('class','dark');
btn.textContent = 'Darken';
overlay.style.backgroundColor = 'rgba(0,0,0,0)';
}
});