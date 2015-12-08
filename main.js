var audio_fanboy1, audio_theme;
var slideIndex = 0;
var subIndex = 0;
var slideTransition = 800;
var slideSlowTransition = 3000;
var fixedPlayout = 6000;
prepareResources();

function prepareResources() {
	audio_fanboy1 = document.createElement('audio');
	audio_fanboy1.setAttribute('src', 'audio/cheers.m4a');
	//audio_fanboy1.setAttribute('autoplay', 'false');

	audio_theme = document.createElement('audio');
	audio_theme.setAttribute('src', 'audio/academy.mp3');
	audio_theme.setAttribute('loop', true);

	setTimeout(function() {
		$.getJSON('./ManlioAwards2015.json', function(data) {
			audio_fanboy1.play();
			audio_theme.play();

			$('#loading-popup').fadeOut("slow", function() {
				$('#speakerImg').fadeIn(4000, function() { setTimeout(nextSlide(data.slides), 1500); });
				$('.nextSlide').fadeIn(4000, function() {});
			});

			$('.nextSlide').click(function(){
				nextSlide(data.slides);
			});
		});
	}, fixedPlayout);
}

function nextSlide(slides) {
	if (slides.length == 0) {
		return -1;
	}

	if (subIndex == 0) {
		if (slideIndex == 0) {
			$(slides[slideIndex].id).fadeIn(slideTransition, function() {});
		}
		else {
			var slideToFadeOut = slideIndex - 1;
			var slideToFadeIn = slideIndex;
			$(slides[slideToFadeOut].id).fadeOut(slideTransition, function() {
				$(slides[slideToFadeIn].id).fadeIn(slideTransition, function() {});
			});
		}
	}

	var subCount = slides[slideIndex].subtitles.length;
	if (subCount > 0 && subIndex < subCount) {
		$('.sub-container').text(slides[slideIndex].subtitles[subIndex]);
		if (subIndex == subCount - 1) {
			subIndex = 0;
			if (slideIndex < slides.length - 1) {slideIndex++;}
			else {$('.nextSlide').fadeOut("fast", function() {});}
		}
		else {
			subIndex++;
		}
	}
	console.log("next slide "+slideIndex+" ("+slides[slideIndex].id+") with sub "+subIndex);
}
