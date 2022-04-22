$("body").append("<ul></ul>")
$("body").append('<input id="a" type="checkbox" >')
$("body").append('<input id="b" type="checkbox" >')
$("body").append('<input id="c" type="checkbox" >')
	
$("body").append('<button id="create">create</button> ')
$("body").append('<button>remove</button> ')
// $("#id").prop('checked')
$('#create').click(function(){
	if($("#a").prop('checked') && $("#b").prop('checked') && $("#c").prop('checked') ){
		 $("ul").append('black')
		 $("ul").addClass("black")
	}
	if($("#a").prop('checked') && $("#b").prop('checked') && $("#c").prop('checked'))

	

})