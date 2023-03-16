let audioElement = new Audio("../music/1.mpeg");
let masterPlay = document.getElementById("masterPlay");
let gif = document.getElementById("gif");
let progressBar = document.getElementById("progressBar");
let musicContant = Array.from(document.getElementsByClassName('musicContant'));
let tittle = document.getElementById("tittle");
let songindex = 1;
let back = document.getElementById('back');
let next = document.getElementById('next');


let songs = [

    {
        songName: "Ek bar hi kiya",
        coverImage: "img/1.jpg",
        song: "music/1.mpeg"
    },
    {
        songName: "Kon khta bhagwan",
        coverImage: "img/2.jpg",
        song: "music/2.mpeg"

    },
    {
        songName: "Bhul jane ka hunr",
        coverImage: "img/3.jpg",
        song: "3.mpeg"

    },
    {
        songName: "sun sun barsat dhun",
        coverImage: "img/4.jpg",
        song: "music/4.mpeg"

    },
    {
        songName: " O bedardiya",
        coverImage: "img/5.jpg",
        song: "music/5.mpeg"

    },









];










musicContant.forEach((element, i) => {



    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    element.getElementsByTagName("img")[0].src = songs[i].coverImage;







})












// event to listen the song


masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {

        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause")
        gif.style.opacity = 1;





    } else {
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        audioElement.pause()
        gif.style.opacity = 0;

    }


});



// audio element update

audioElement.addEventListener("timeupdate", () => {

    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

    progressBar.value = progress;




});


progressBar.addEventListener("change", () => {

    audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;






});



// song  play 

function myplays() {
    let myvar = Array.from(document.getElementsByClassName("songItemPlay"));
    myvar.forEach((element) => {

        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })

}











let myvar = Array.from(document.getElementsByClassName("songItemPlay"));



myvar.forEach((element) => {

    element.addEventListener("click", (e) => {


        let songindex = parseInt(e.target.id);
        myplays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `music/${songindex}.mpeg`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
        tittle.innerText = songs[songindex - 1].songName



    })




});



// function to move into the newsong;


next.addEventListener('click', () => {

    if (songindex >= 5) {

        songindex = 1;

    }
    else {
        songindex += 1
    }
    audioElement.src = `music/${songindex}.mpeg`;

    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
    tittle.innerText = songs[songindex - 1].songName;

});


back.addEventListener('click', () => {

    if (songindex <= 0) {

        songindex = 1;

    }
    else {
        songindex -= 1
    }
    audioElement.src = `music/${songindex + 1}.mpeg`;

    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
    tittle.innerText = songs[songindex].songName;


})





















