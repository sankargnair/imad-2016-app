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
    
