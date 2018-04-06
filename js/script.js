//script for email and subcription
$(document).ready(function(){
	$("#subscriber").submit(function(event){
		var mail=$("#email").val();		
		alert(mail+" has been successfully added to our emailing list. Thank you");
		event.preventDefault();
	});

});

//navbar fullscreen menu
function openNav() {
    document.getElementById("menunav").style.height = "100%";
}

function closeNav() {
    document.getElementById("menunav").style.height = "0%";
}