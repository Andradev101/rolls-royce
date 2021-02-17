/*video bg changes after 40 seconds*/
var video = document.querySelector('video');
var source = document.querySelector('source');
var v = ["/resources/videos/1.mp4#t=7", "/resources/videos/2.mp4#t=20", "/resources/videos/3.mp4#t=12", "/resources/videos/4.mp4#t=15,40" ]
var bgcolor = document.getElementsByClassName("bg-color");

setInterval(() => {
    bgcolor[0].style.backdropFilter="blur(0px)";
}, 1000);


for (let index = 0; index < v.length ; index++) {    
    setTimeout(() => {
        source.setAttribute('src', v[index]);
        video.load();
        console.log(index);
    }, index * (30*1000));
}

/*
var video = document.querySelector('video');
var source = document.querySelector('source');
var counter = 0;
var v = ["/resources/videos/1.mp4#t=7", "/resources/videos/2.mp4#t=20"]






source.setAttribute('src', v[counter]);
video.load();
video.appendChild(source);

setTimeout(function() {  
    counter++
    source.setAttribute('src', v[counter]);
    video.load();
}, 1000);


----------------------------------------------------------------------------
var video = document.querySelector('video');
var source = document.querySelector('source');
var v = ["/resources/videos/1.mp4#t=7", "/resources/videos/2.mp4#t=20"]

for (let index = 0; index < v.length; index++) {
    source.setAttribute('src', v[index])
    video.load();
    
    setInterval(() => {
        source.setAttribute('src', v[index]);
        video.load();
    }, 3000);
}

*/