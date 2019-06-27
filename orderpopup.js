// $(function() {

//     // show popupボタンクリック時の処理
//     $('#show').click(function(e) {
//         $('#popup, #layer').show();
//     });

//     // レイヤー/ポップアップのcloseボタンクリック時の処理
//     $('#close, #layer').click(function(e) {
//         $('#popup, #layer').hide();
//     });

// });


 // transform: translateY(-100%);
    // transform: translate(-50%, -50%);

$(function(){




	 $('#show').click(function() {


	 	$('#popup').show();
		$('.afteropen3').css('width', '50%');
		$('.afteropen4').css('width', '50%');
		$('#popup').css('transform', 'translate(-50%, -50%)');
		
	});

	$('#close, #layer').click(function() {
		$('.afteropen3').css('width', '0%');
		$('.afteropen4').css('width', '0%');
		$('#popup').css('transform', 'translate(-50%, -300%)');
		// $('#popup').hide();
		
	});


	 $('#buy').click(function() {


	 	$('#popup1').show();
		$('.afteropen3').css('width', '50%');
		$('.afteropen4').css('width', '50%');
		$('#popup1').css('transform', 'translate(-50%, -50%)');
		
	});

	$('#closebuy').click(function() {
		$('.afteropen3').css('width', '0%');
		$('.afteropen4').css('width', '0%');
		$('#popup1').css('transform', 'translate(-50%, -300%)');
	});


	




});














// var n = 0;


// 	$("#nav-icon").click(function(){

// 		if (n == 0) {

// 		$('.afteropen1').css('width', '50%');
// 		$('.afteropen2').css('width', '50%');
// 		$('#menulist').css('top', '50%');


// 		$('#nav-icon').addClass(' clickNav');
// 		n++;
// 		}

// 		else{

// 		$('.afteropen1').css('width', '0%');
// 		$('.afteropen2').css('width', '0%');
// 		$('#menulist').css('top', '-50%');


// 		$('#nav-icon').removeClass(' clickNav');
// 		n = 0;




// 		}
	
// 	});
