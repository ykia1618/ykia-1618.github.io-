window.onscroll = function(){
	myScrollFunction()

 

};



function myScrollFunction(){
	     var x = document.documentElement.scrollTop;
	     var y = document.body.scrollTop;



	if(x > 2700 || y > 2700){
			document.getElementById('textdesu').style.display = "block";
		}

		else{
			document.getElementById('textdesu').style.display = "none";
		}


	if(x > 3300 || y > 3300){

			document.getElementById('textdesu2').style.display = "block";

		}
		else{

			document.getElementById('textdesu2').style.display = "none";

		}






		if(x > 4000 || y > 4000){

			document.getElementById('textdesu3').style.display = "block";

		}


		else{

			document.getElementById('textdesu3').style.display = "none";

		}



		if(x > 6500 || y > 6500){

			document.getElementById('textdesu4').style.display = "block";
		}else{
			document.getElementById('textdesu4').style.display = "none";

		}





}
