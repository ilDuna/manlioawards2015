var audio_fanboy1, audio_theme;
var slides = ["#slide_0","#slide_1","#slide_2"];
var slideIndex = -1;
var slideTransition = 800;
var slideSlowTransition = 3000;
prepareResources();

function prepareResources() {
	audio_fanboy1 = document.createElement('audio');
	audio_fanboy1.setAttribute('src', 'audio/cheers.m4a');
	//audio_fanboy1.setAttribute('autoplay', 'false');

	audio_theme = document.createElement('audio');
	audio_theme.setAttribute('src', 'audio/academy.mp3');

	$('.nextSlide').click(function(){
		nextSlide();
	});

	setTimeout(function() {
		audio_fanboy1.play();
		//audio_theme.play();

		$('#loading-popup').fadeOut("slow", function() {
			$('#speakerImg').fadeIn(4000, function() { setTimeout(nextSlide(true), 1500); });
			$('.nextSlide').fadeIn(4000, function() {});
		});
	}, 4000);
}

function nextSlide(slow) {
	if (slow == undefined) { slow = false; }
	
	if (slides.length == 0 || slideIndex == slides.length - 1) {
		return -1;
	}
	else if (slideIndex == -1) {
		if (!slow) {
			$(slides[0]).fadeIn(slideTransition, function() {});
		}
		else {
			$(slides[0]).fadeIn(slideSlowTransition, function() {});
		}
		slideIndex = 0;
	}
	else if (slideIndex >=0 && slideIndex < slides.length) {
		slideIndex++;
		$(slides[slideIndex-1]).fadeOut(slideTransition, function() {
			$(slides[slideIndex]).fadeIn(slideTransition, function() {});
		});
		if (slideIndex == slides.length - 1) {
			$('.nextSlide').fadeOut("fast", function() {});
		}
	}
}