const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imageArray = ['SRGrole.png', 'TFrole.png', 'SVrole.png', 'RUNArole.png', 'Vroll.png','DEIrole.png','DSProle.png','EHrole.png','CC1role.png','CCrole.png']

/* Declaring the alternative text for each image file */

const altArray = {
'SRGrole.png' : 'SRG',
'TFrole.png' : 'Thistle Farms',
'SVrole.png' : 'Sol Vae',
'RUNArole.png' : 'RUNA',
'Vroll.png' : 'Verde',
'DEIrole.png' : 'Leeds',
'DSProle.png' : 'Delta Sigma Pi',
'EHrole.png' : 'Earth Hero',
'CC1role.png' : 'Cloud Campaign',
'CCrole.png' : 'Collegiate Crossings'
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

