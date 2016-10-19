

var button=document.getElementById('counter');

button.onclick= function()
{
    //request to the counter 
    var request= new XMLHttpRequest();
    
    
    //capture the response and store it
    
    request.onreadystatechange= function(){
         
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
    
//submit name
var nameInput=document.getElementById('name');
var name1= nameInput.value;
var submit =document.getElementById('submit_btn');
submit.onclick=function(){
    
    //make a request to server and send name
    
    
    //capture a list of names and render it as a list
    var names =["name1","name2","name3","name4"];
    var list= '';
    for (var i=0; i<names.length; i++)
    {
        list += '<li>' + names[i] + '</li>';
        
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML=list;
};

    
    var nameInput=document.getElementById('name');
var name2= nameInput.value;
var submit1 =document.getElementById('submit_btn');
    submit1.onclick= function()
{
    //request to the counter 
    var request= new XMLHttpRequest();
    
    
    //capture the response and store it
    
    request.onreadystatechange= function(){
         
        if (request.readyState==XMLHttpRequest.DONE)
        {
            
             if(request.status==200){
           var names =request.responseText;
           names=JSON.parse(names)
    var list= '';
    for (var i=0; i<names.length; i++)
    {
        list += '<li>' + names[i] + '</li>';
        
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML=list;
             }
            //Take some astion
            
        }
    };
   
   request.open('GET','http://sankargnair.imad.hasura-app.io/submit-name1?name='+name2,true);
   request.send(null);
};
    
    
    
    


