

let closeIcon = document.getElementById('close')
let layer = document.getElementById('layer')
var cont = document.getElementById('cont')
var arrImg = Array.from(document.querySelectorAll('.inner img'))
var next = document.getElementById('next')
var prev = document.getElementById('prev')
var iconFix=document.getElementById('iconFix')

var index = 0;

for (let i = 0; i < arrImg.length; i++) {
    arrImg[i].addEventListener('click', function (e) {
        layer.style.display = 'flex'
        cont.style.backgroundImage = `url(${e.target.src})`
        index = arrImg.indexOf(e.target)
        console.log(index);

    })

}
closeIcon.addEventListener('click', function () {
    layer.style.display = 'none'

})

next.addEventListener('click', nextmg)


function nextmg() {
    index++;
    if (index == arrImg.length)
        index = 0;

    cont.style.backgroundImage = `url(${arrImg[index].src})`

}

prev.addEventListener('click', preimg)


function preimg() {


    index--;
    if (index < 0) index = arrImg.length - 1;


    cont.style.backgroundImage = `url(${arrImg[index].src})`

}
document.addEventListener('keydown', function (e) {
    console.log(e);
    switch (e.key) {
        case "ArrowRight":

            nextmg()
            break;

        case "Arrowleft":

            preimg()
            break;

        case "Escape":
            layer.style.display = 'none'
            break;

        case " ":
            layer.style.display = 'flex'
            break;
    }
})


layer.addEventListener('click',function(e){
// layer.style.display='none'
// e.stopPropagation()
console.log(e.target);
if(e.target==layer){
    layer.style.display='none'
}
if(e.target==cont){
    layer.style.display='flex'
}
})




