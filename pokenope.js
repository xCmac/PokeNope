// document.body.innerHTML = document.body.innerHTML.replace(new RegExp("user1", "g"), "nobody");

var x = document.getElementsByClassName("userContent");

for (var i = 0, length = x.length; i < length; i ++)
{
	console.log(x[i].parentElement)
}
