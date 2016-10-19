

var button=document.getElementById('counter');
var counter=0;
button onclick= function()
{
    //request to the counter 
    
    
    
    //capture the response and store it
    
    
    //render the variable in the span
    counter=counter + 1;
    alert(counter);
    var span=document.getElementById('count');
    span.innerHTML= counter.toString();
};
    
