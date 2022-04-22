function Users (email , password)
{
   var obj={}
   obj.email=email
   obj.pass=password
   return obj;
}

var list = []
var amine = Users("aminejelssi95@gmail.com","123Qsd123")
list.push(amine)

function ver()
{
	var login= $(".inp")
	var pass= $(".pass")

	if (login.val()===list[0].email)
	{
	     login.css("background-color","red")
	}

}