console.log("hello world");

let catImg = document.querySelector('.cat')

function petCat() {
	alert("Petting cats is linked to lower blood pressure and is, therefore, good for your health. Click 'Close' then touch the cat with your mouse again. Keep petting the cat and you get healthier!")
}

catImg.addEventListener('mouseover', petCat)



function handleSubmit(evt) {
	evt.preventDefault();
	

	// console.log('form submit');
	alert("Great job, User. From has been submitted successfully, Congratulations!")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);