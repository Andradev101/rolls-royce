//DOM elements selectors
const video = document.querySelector('video');
const source = document.querySelector('source');
const v = ["/resources/videos/0.mp4#t=7", "/resources/videos/1.mp4#t=20", "/resources/videos/2.mp4#t=12", "/resources/videos/3.mp4#t=15,40" ]
const bgcolor = document.getElementsByClassName("bg-color");
const modeldiv = document.querySelectorAll(".model");
const modeldesc = document.querySelectorAll(".model .desc");
const medialink = document.querySelectorAll(".media a");
const html = document.getElementsByTagName("html");
const logoimg = document.getElementsByTagName("img");

//add video to the background
    setInterval(() => {
        bgcolor[0].style.backgroundColor= "rgba(0, 0, 0, 0.7)"
    }, 1000);
    
    function addVideo(){
        var random = Math.floor(Math.random() * 4);
        source.setAttribute('src', v[random]);
        video.load();
    }
    addVideo()

//randomize bg video
    setInterval(() => {
        var random = Math.floor(Math.random() * 4);
        source.setAttribute('src', v[random]);
        video.load();
    }, 25*1000);

//add delay to the modeldiv
    for (let i = 0; i < modeldiv.length; ++i) {
        var item = modeldiv[i];
        var delay = i*0.1;
        modeldiv[i].style.animationDelay=delay+"s"
    }

//hover event listeners for elements within model
    for (let i = 0; i < modeldesc.length; i++) {
        modeldiv[i].addEventListener("mouseenter", ()=>{modeldesc[i].style.top = "10px"});
        modeldiv[i].addEventListener("mouseenter", ()=>{modeldesc[i].style.backgroundColor = "rgba(255, 255, 255, 0.9)"});
        modeldiv[i].addEventListener("mouseleave", ()=>{modeldesc[i].style.top = "200px"});
        modeldiv[i].addEventListener("mouseleave", ()=>{modeldesc[i].style.backgroundColor = "rgba(255, 255, 255, 0.5)"});
    }
//index medialinks animation
    for (let i = 0; i < medialink.length; ++i) {
        var item = medialink[i];
        var delay = i*0.1;
        medialink[i].style.animationDelay=delay+"s"
    }