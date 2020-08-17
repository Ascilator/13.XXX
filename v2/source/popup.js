jQuery(function () {
	//
	$('#GROUP392').click(function(){
		$('#POPUP395').slideToggle(1000);	
		$('#popup_bck').css({
			'height':'100vh',
			'width':'100vw',
			'position':'fixed',
			'top':'0',
			'left':'0',
			'z-index':  '0',
			'overflow': 'visible',
			'pointer-events' : 'unset'
		});
	});
	$('#popup_bck').click(function(){
		$('#POPUP395').slideToggle(1000);	
		$('#popup_bck').css({
			'height':'0vh',
			'width':'0vw',
			'position':'fixed',
			'top':'0',
			'left':'0',
			'z-index':  '0'

		});
	});
	$('#BUTTON_TEXT390').click(function(){
	    $('html, body').animate({
	        scrollTop: $("html").offset().top
	    }, 1000);
	});
	function my_clock_2(argument) {
		var hours 	= $('#COUNTDOWN_ITEM219>.ladi-countdown-text>span').text();
			minutes = $('#COUNTDOWN_ITEM220>.ladi-countdown-text>span').text();
			seconds = $('#COUNTDOWN_ITEM221>.ladi-countdown-text>span').text();
		
	
		
		seconds--;
		if(seconds < 0){
			minutes--;
			seconds = 60;
			if(minutes < 0){
				hours--;
				minutes = 60;
				if(hours === 0){
					return;
				}
			}
		}

		if(hours < 10) {
			if(hours[0] != '0'){ 
				hours = '0' + hours;
			}
		}
		if(minutes < 10) { 
			if(minutes[0] != '0') { 
				minutes = '0' + minutes;
			}
		}
		if(seconds < 10) { seconds = '0' + seconds; }

		$('#COUNTDOWN_ITEM219>.ladi-countdown-text>span').text(hours);
		$('#COUNTDOWN_ITEM220>.ladi-countdown-text>span').text(minutes);
		$('#COUNTDOWN_ITEM221>.ladi-countdown-text>span').text(seconds);
	}
	function my_clock(argument) {
		var hours 	= $('#COUNTDOWN_ITEM24>.ladi-countdown-text>span').text();
			minutes = $('#COUNTDOWN_ITEM25>.ladi-countdown-text>span').text();
			seconds = $('#COUNTDOWN_ITEM26>.ladi-countdown-text>span').text();
		
	
		
		seconds--;
		if(seconds < 0){
			minutes--;
			seconds = 60;
			if(minutes < 0){
				hours--;
				minutes = 60;
				if(hours === 0){
					return;
				}
			}
		}

		if(hours < 10) {
			if(hours[0] != '0'){ 
				hours = '0' + hours;
			}
		}
		if(minutes < 10) { 
			if(minutes[0] != '0') { 
				minutes = '0' + minutes;
			}
		}
		if(seconds < 10) { seconds = '0' + seconds; }

		$('#COUNTDOWN_ITEM24>.ladi-countdown-text>span').text(hours);
		$('#COUNTDOWN_ITEM25>.ladi-countdown-text>span').text(minutes);
		$('#COUNTDOWN_ITEM26>.ladi-countdown-text>span').text(seconds);
	}
	setInterval(my_clock, 1000);
	setInterval(my_clock_2, 1000);

});