// Windows Height and Windows Width and margins to main content
var windowswidth = $(window).width();
var windowsheight = $(window).height();
$(window).resize(function(){
	//$('.content').css('margin-top', windowsheight / 4 + 'px');
	$('.contentn').animate({"margin-top" : windowsheight / 4 + 'px',}, 1000);
$(window).load(function(){
	var windowsheights = $(window).height();
	// alert('cccc');
	//$('.contentn').css('margin-top', windowsheight / 4 + 'px');
	$('.contentn').animate({"margin-top" : windowsheight / 4 + 'px',}, 1000);
});
	$(window).trigger('load');
});
$(window).trigger('resize');


// $('#fullPageBox').bind('mousewheel DOMMouseScroll', function(e) {
//     var scrollTo = null;
//     if (e.type == 'mousewheel') {
//         scrollTo = (e.originalEvent.wheelDelta * -1);
//     } else if (e.type == 'DOMMouseScroll') {
//         scrollTo = 1000 * e.originalEvent.detail;
//     }

//     if (scrollTo) {
//         e.preventDefault();
//         $(this).scrollTop(scrollTo + $(this).scrollTop());
//     }
// })

		$(window).bind('mousewheel', $.proxy(function(e){

		    if(e.originalEvent.wheelDelta /120 > 0) {
		       //alert('up');
		       // $('.content-body').css('margin-top','-100vh')
		    }
		    else{
		    	//alert('down');
		    }
		
		},this));


$(function () {
	var logThis = function (e) {
		if (e.type == 'enterviewport')
		{
			var entport = $(this).attr('id');
			$('#navbar ul').closest("#navbar ul").find(".active").removeClass('active');

			//$('#navbar ul #'+levport).removeClass('active',1000);
			$('#navbar ul #'+entport).addClass('active',1000);
			
		}
		if (e.type == 'leaveviewport')
		{
			var levport = $(this).attr('id');
		//	$('#navbar ul #'+levport).removeClass('active',1000);
		}
	};

	setTimeout(function () { // setTimeout really not required, just wanted to make the effect more obvious

	$('.bullseye')
		.bind('enterviewport', logThis)
		.bind('leaveviewport', logThis)
		.bullseye()                

	}, 500);
});