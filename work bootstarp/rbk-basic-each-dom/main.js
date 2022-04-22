
var box=document.getElementsByTagName('li');

var button=document.getElementById("btn");


function each(array,f){
	for (var i=0;i<array.length;i++)
{
      f(array[i],i)
}}	;
function change(array){
	 each(array,function(elemnt,i){
		
		elemnt.innerHTML=elemnt.style.color='red';
				elemnt.innerHTML=elemnt.style.fontSize = "x-large";
						elemnt.innerHTML="hello world";

	})
	};



button.onclick=document.getElementsByTagName('li')[0].style.color='red';document.getElementsByTagName('li')[0].style.fontSize = "x-large";document.getElementsByTagName('li')[0].innerHTML="hello world";
