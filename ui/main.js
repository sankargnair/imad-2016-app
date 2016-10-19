

var button=document.getElementById('counter');

button.onclick= function()
{
    //request to the counter 
    var request= new XMLHttpRequest();
    
    
    //capture the response and store it
    
    request.onreadystatechanged= function(){
        if (request.readyState==XMLHttpRequest.DONE)
        {
            //Take some astion
            if(request.status==200){
                var counter=request.responseText;
                 var span=document.getElementById('count');
    span.innerHTML= counter.toString();
            }
        }
    };
   
   request.open('GET','http://sankargnair.imad.hasura-app.io/counter',true);
   request.send(null);
};
    
