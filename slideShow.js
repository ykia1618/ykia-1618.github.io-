var slideIndex2 = 0;
showSlides2();

function showSlides2(){
	var i2;
	var slides2 = document.getElementsByClassName('mySlides');
	var dots2 = document.getElementsByClassName('dot');


	for (i2 = 0; i2 < slides2.length; i2++){
		slides2[i2].style.display = 'none';
	}

	slideIndex2++;

	if(slideIndex2 > slides2.length){
		slideIndex2 =1
	}

	slides2[slideIndex2-1].style.display = 'block';
	// change the image every 2 seconds
	setTimeout(showSlides2, 3000);

	for(i2 = 0; i2 < dots2.length; i2++){
		dots2[i2].className = dots2[i2].className.replace(" active", "");
	}

	slides2[slideIndex2 -1].style.display = "block";
	dots2[slideIndex2 -1].className += " active";

}
