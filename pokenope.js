var posts = document.getElementsByClassName("userContentWrapper");

for(var i=0; i<posts.length; i++){  
    if(posts[i].innerHTML.indexOf("Pokemon") != -1){ 
       var parent = posts[i].parentNode; 
       parent.parentNode.removeChild(parent)             
     };
}