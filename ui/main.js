console.log('Loaded!');
var img=document.getElementById('img1');

img.onclick =function(){
    var interval=setInterval(moveRight,100);
    //img.style.marginLeft='300px';
}
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+5;
    img.style.marginLeft=marginLeft+ 'px';
}