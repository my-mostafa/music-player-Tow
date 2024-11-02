let audio = document.querySelectorAll("audio")

function funci(event) {
   audio.forEach(function(ff){
    ff.pause()
    ff.currentTime = 0
    if(ff.dataset.name===event.target.dataset.name){
        ff.play()
    }
   })
}