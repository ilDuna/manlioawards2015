var audio_fanboy1;
prepareResources();

function prepareResources() {
	audio_fanboy1 = document.createElement('audio');
	audio_fanboy1.setAttribute('src', 'audio/cheers.m4a');
	//audio_fanboy1.setAttribute('autoplay', 'false');


	$('#loading-popup').fadeOut("slow", function() {});
}