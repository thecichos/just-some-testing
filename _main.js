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
	.done(function() {
		get()
		console.log("success");
	})
	.fail(function(result) {
		console.log("error");
		console.log(result);
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


function get() {
	$('#con').empty()
	$.ajax({
		url: 'php/getJson.php',
		type: "POST"
	})
	.done(function(result) {
		$("#con").append(result)
		show()
		console.log("success");
	})
	.fail(function(result) {
		console.log("error");
		console.log(result);
	})
	.always(function() {
		console.log("complete");
	});
}

function show() {
	$('#con').append("<table></table>")
	$("#con").children("table").append("<tr><td>name</td><td>op</td></tr>")
	for (var i = 0; i < stuff.length; i++) {
		$("#con").children("table").append("<tr><td>"+stuff[i][0]+"</td><td>"+stuff[i][1]+"</td></tr>")
	}
}
