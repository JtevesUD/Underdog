const selectElement = (element) => document.querySelector(element);

const header = selectElement('header');

const mainContent = selectElement('main');

selectElement('.hamburger').addEventListener('click', () => {
    header.classList.toggle('active');
    mainContent.classList.toggle('active');
});

window.onclick = (event) => {
    if (event.target.matches('.active')) {
        if (header.classList.contains('active')) {
            header.classList.remove('active');
            mainContent.classList.remove('active');
        }
    }
};

var video = document.querySelector('.video');
var juice = document.querySelector('.orange-juice');
var btn = document.getElementById('play-pause');



function togglePlayPause(){
    if(video.paused){
        btn.className= "pause";
        video.play();
    }else{
        btn.className = "play";
        video.pause();
    }
}


btn.onclick = function() {
    togglePlayPause();
};

video.addEventListener('timeupdate', function(){
    var juicePos = video.currentTime / video.duration;
    juice.style.width = juicePos * 100 + "%";
    if(video.ended){
        btn.className="play";
    }
});