var posts = document.getElementsByClassName("userContentWrapper");

for(var i=0; i<blacklist.length; i++){
	for (var j = 0; j < posts.length; j++) {
		if(posts[j].innerHTML.indexOf(blacklist[i]) != -1){
	       	var parent = posts[j].parentNode; 
       		parent.parentNode.removeChild(parent)
		}
	}
}