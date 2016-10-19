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
var button=document.getElementById('counter');
button onclick= function()
{
    //request to the counter 
    
    
    
    //capture the response and store it
    
    
    //render the variable in the span
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML= counter.toString();
}
    
