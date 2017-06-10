$(function(){
	var span = $('span');
	$("span:even").css('color', 'red');

	//var paragraphs = $('p');
	span.each(function(index, element) {
		var button = '	<button class="btn btn-success active" data-tmp="' + index + '">Click me</button>'
		$(element).append(button);
	});

	$("button").click(function() {
		alert($(this).attr("data-tmp"));
	});
});