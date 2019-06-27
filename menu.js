$(function(){


	var n = 0;


	$("#nav-icon").click(function(){

		if (n == 0) {

		$('.afteropen1').css('width', '50%');
		$('.afteropen2').css('width', '50%');
		$('#menulist').css('top', '50%');


		$('#nav-icon').addClass(' clickNav');
		n++;
		}

		else{

		$('.afteropen1').css('width', '0%');
		$('.afteropen2').css('width', '0%');
		$('#menulist').css('top', '-50%');


		$('#nav-icon').removeClass(' clickNav');
		n = 0;




		}
	
	});


	$(".menu").click(function(){
	if (n == 0) {

		$('.afteropen1').css('width', '50%');
		$('.afteropen2').css('width', '50%');
		$('#menulist').css('top', '50%');


		$('#nav-icon').addClass(' clickNav');
		n++;
		}

		else{

		$('.afteropen1').css('width', '0%');
		$('.afteropen2').css('width', '0%');
		$('#menulist').css('top', '-50%');


		$('#nav-icon').removeClass(' clickNav');
		$('#nav-icon').removeClass('open');

		n = 0;
}





	});

});
