$('body').append("	<div id='container'></div>");
if ($("#container").children().length == 0) {
	$("#container").append("<div class='item'></div>")
}
get()

function connect(n1, p1) {
	$.ajax({
		url: 'php/_gen.php',
		type: "POST",
		data: {name: n1, pass: p1}
	})
	.done(function(result) {
		get()
		console.log("success");
	})
	.fail(function(result) {
		// alert(result)
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


function test(x) {
	var temp = ""
		$.ajax({
			url: 'php/loadTemp.php',
			type: 'POST',
			data: {temp: x}
		})
		.done(function(result) {
			var length = $.get("php/getLength.php")
			length = length.responseText
			console.log(length);
			temp += result
			temp = temp.replace(/@name@/g, "name").replace(/@password@/g, "password").replace(/@invID@/g, length)

			console.log(temp);
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});

}
