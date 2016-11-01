$('body').append("	<div id='container'></div>");
if ($("#container").children().length == 0) {
	$("#container").append("<div class='item'></div>")
}

function connect(n1) {
	$.ajax({
		url: 'php/_gen.php',
		type: "POST",
		data: {name: n1}
	})
	.done(function(result) {
		console.log("success " + result);
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});

}

console.log(connect("yeah"));
