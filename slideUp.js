window.onscroll = function(){
	myFunction()

 

};



function myFunction(){
	     var n = document.documentElement.scrollTop;
	     var i = document.body.scrollTop;
        console.log(n);



	if(n > 2700 || i > 2700){
			document.getElementById('category1').style.display = "block";
			document.getElementById('textdesu4').style.display = "block";


		}

		else if(n > 4000 || i > 4000 || n < 2000 || i < 2000){


			document.getElementById('category1').style.display = "none";
			document.getElementById('textdesu4').style.display = "none";			
		}


	if(n > 3300 || i > 3300){

			document.getElementById('category2').style.display = "block";


		}
		else if(n < 5000 || i < 5000){

			document.getElementById('category2').style.display = "none";

		}






		if(n > 4000 || i > 4000){

			document.getElementById('category3').style.display = "block";
			document.getElementById('textdesu2').style.display = "block";			

		}


		else if(n > 5500 || i > 5500){

			document.getElementById('category3').style.display = "none";


		}else{
			document.getElementById('category3').style.display = "none";
			document.getElementById('textdesu2').style.display = "none";			
			

		}






		if(n > 6500 || i > 6500){

			document.getElementById('serviceAnime').style.display = "flex";


		}else{
			document.getElementById('serviceAnime').style.display = "none";



		}


		if(n > 7000){
			document.getElementById('textdesu4').style.display = "none";
			document.getElementById('textdesu2').style.display = "none";			


}



		if(n > 8400 || i > 8400){

			document.getElementById('tableAnime').style.display = "block";

		}else{
			document.getElementById('tableAnime').style.display = "none";


		}


		if(n > 9700 || i > 9700){

			document.getElementById('textdesu5').style.display = "block";
			document.getElementById('textdesu3').style.display = "block";


		}else{
			document.getElementById('textdesu5').style.display = "none";
			document.getElementById('textdesu3').style.display = "none";



		}




}



