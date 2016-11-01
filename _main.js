$('body').append("	<div id='container'></div>");
if ($("#container").children().length == 0) {
	$("#container").append("<div class='item'></div>")
}

function connect(n1, p1) {
	$.ajax({
		url: 'php/_gen.php',
		type: "POST",
		data: {name: n1, op: p1}
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

function PreProcess(id) {
	var x = $('#' + id).siblings(),
			name = x[0].value,
			op = x[1].value

	connect(name, op);
}
