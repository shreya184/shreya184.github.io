$(document).ready(function() {
	styleElement = document.createElement("style");
	styleElement.type = "text/css";
	styleElement.appendChild(document.createTextNode(".color { background-color: #E45064; } .color_bg { background-color : rgba(73, 0, 10, 0.75); } .color_text { color : #E45064; } .border_color {border-color : #E45064} a {color : #E45064} .outline_color { outline-color : #E45064 } "));
	document.body.appendChild(styleElement);

	$('.color1').on('click', function(){
		document.body.removeChild(styleElement);
		styleElement = document.createElement("style");
		styleElement.type = "text/css";
		styleElement.appendChild(document.createTextNode(".color { background-color: #E45064; } .color_bg { background-color : rgba(73, 0, 10, 0.75); } .color_text { color : #E45064; } .border_color {border-color : #E45064} a {color : #E45064} .outline_color { outline-color : #E45064 } "));
		document.body.appendChild(styleElement);
		$(this).parent().find('.color_switch').removeClass('active_color');
		$(this).addClass('active_color');
		$('#progressbar > div > svg').find("path").attr("stroke", "#E45064");
	});
	$('.color2').on('click', function(){
		document.body.removeChild(styleElement);
		styleElement = document.createElement("style");
		styleElement.type = "text/css";
		styleElement.appendChild(document.createTextNode(".color { background-color: #7ECA9B; } .color_bg { background-color : rgba(0, 75, 28, 0.75); } .color_text { color : #7ECA9B; } .border_color {border-color : #7ECA9B} a {color : #7ECA9B} .outline_color { outline-color : #7ECA9B } "));
		document.body.appendChild(styleElement);
		$(this).parent().find('.color_switch').removeClass('active_color');
		$(this).addClass('active_color');
		$('#progressbar > div > svg').find("path").attr("stroke", "#7ECA9B");
	});
	$('.color3').on('click', function(){
		document.body.removeChild(styleElement);
		styleElement = document.createElement("style");
		styleElement.type = "text/css";
		styleElement.appendChild(document.createTextNode(".color { background-color: #6B57AF; } .color_bg { background-color : rgba(15, 0, 68, 0.75); } .color_text { color : #6B57AF; } .border_color {border-color : #6B57AF} a {color : #6B57AF} .outline_color { outline-color : #6B57AF } "));
		document.body.appendChild(styleElement);
		$(this).parent().find('.color_switch').removeClass('active_color');
		$(this).addClass('active_color');
		$('#progressbar > div > svg').find("path").attr("stroke", "#6B57AF");
	
	});
	$('.color4').on('click', function(){
		document.body.removeChild(styleElement);
		styleElement = document.createElement("style");
		styleElement.type = "text/css";
		styleElement.appendChild(document.createTextNode(".color { background-color: #265CDC; } .color_bg { background-color : rgba(0,18,58,0.75); } .color_text { color : #265CDC; } .border_color {border-color : #265CDC} a {color : #265CDC} .outline_color { outline-color : #265CDC } "));
		document.body.appendChild(styleElement);
		$(this).parent().find('.color_switch').removeClass('active_color');
		$(this).addClass('active_color');
		$('#progressbar > div > svg').find("path").attr("stroke", "#265CDC");
	});

	$('.white_tmp').on('click', function(){
		$(this).parent().find('.tmp_switch').removeClass('active_tmp');
		$(this).addClass('active_tmp');
	});
	$('.black_tmp').on('click', function(){
		$(this).parent().find('.tmp_switch').removeClass('active_tmp');
		$(this).addClass('active_tmp');
	});
});
