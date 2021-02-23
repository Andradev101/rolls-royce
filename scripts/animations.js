/*video bg changes after 25 seconds*/
const video = document.querySelector('video');
const source = document.querySelector('source');
const v = ["/resources/videos/0.mp4#t=7", "/resources/videos/1.mp4#t=20", "/resources/videos/2.mp4#t=12", "/resources/videos/3.mp4#t=15,40" ]
const bgcolor = document.getElementsByClassName("bg-color");
const modeldiv = document.querySelectorAll(".model");
const modeldesc = document.getElementsByClassName("desc");

    setInterval(() => {
        bgcolor[0].style.backgroundColor=" rgba(0, 0, 0, 0.7)"
    }, 1000);
    
    function addVideo(){
        var random = Math.floor(Math.random() * 4);
        source.setAttribute('src', v[random]);
        video.load();
    }
    addVideo()

    setInterval(() => {
        var random = Math.floor(Math.random() * 4);
        source.setAttribute('src', v[random]);
        video.load();
    }, 25*1000);

    for (var i = 0; i < modeldiv.length; ++i) {
        var item = modeldiv[i];
        var delay = i*0.1;
        modeldiv[i].style.animationDelay=delay+"s"
    }
