var slideIndex = 1;
showSlides(slideIndex);

// Next / previous control
function plusSlides(n){
	showSlides(slideIndex += n);
}

// for dots
function currentSlide(n){
	showSlides(slideIndex = n);
}



function showSlides(n){
	var i;

	// get all image containers
	var slides = document.getElementsByClassName('MainSlides');
	var dots = document.getElementsByClassName('Mdot');



	if (n > slides.length){
	// already reached the last picture-- go back to number 1
		slideIndex = 1
	}

	if (n < 1){
		slideIndex = slides.length
	}


	// hide everythig except for the current slide
	for(i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}

// color of dots
	for(i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace(" Mactive", "");
	}

	slides[slideIndex -1].style.display = "block";
	dots[slideIndex -1].className += " Mactive";

}





var slideIndexx = 0;
showSlidess();

function showSlidess(){
	var ii;
	var slidess = document.getElementsByClassName('MainSlides');
	var dotss = document.getElementsByClassName('Mdot');


	for (ii = 0; ii < slidess.length; ii++){
		slidess[ii].style.display = 'none';
	}

	slideIndexx++;

	if(slideIndexx > slidess.length){
		slideIndexx =1
	}

	// color of dots
	for(ii = 0; ii < dotss.length; ii++){
		dotss[ii].className = dotss[ii].className.replace(" Mactive", "");
	}

	slidess[slideIndexx-1].style.display = 'block';
	dotss[slideIndexx -1].className += " Mactive";

	// change the image every 2 seconds
	setTimeout(showSlidess, 5000);

}
