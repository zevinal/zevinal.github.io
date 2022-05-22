const play = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
</svg>`;

const playButton = document.getElementById("play-button")
const video = document.getElementById("video")
const playBtn = document.querySelector('play');
var Webflow = Webflow || [];
Webflow.push(function () {
  // DOMready has fired
  // May now use jQuery and Webflow API
  
  var iframe = document.querySelector('iframe');
  var player = new Vimeo.Player(iframe);
  $('#play-button').click(function() {
  	player.play();
    playButton.style.visibility = 'hidden';
	});
   playBtn.addEventListener('click', function() {
       playButton.style.visibility = 'hidden;'
   })
});