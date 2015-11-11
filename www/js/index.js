window.onload = function() {
	if (localStorage.getItem(1337) != null)
	{
		var average = localStorage.getItem(1337);
		if (average < 200)
		{
			$("#comment1").html("Very Good !");
			$("#comment1").addClass("verygood");
		}
		else if (average < 250)
		{
			$("#comment1").html("Good");
			$("#comment1").addClass("good");
		}
		else if (average < 350)
		{
			$("#comment1").html("Average");
			$("#comment1").addClass("average");
		}
		else
		{
			$("#comment1").html("Bad");
			$("#comment1").addClass("bad");
		}
		$("#result1").html(average + "ms");
	}
	if (localStorage.getItem(1338) != null)
	{
		var click = localStorage.getItem(1338)*5;
		if (click > 500)
		{
			$("#comment2").html("Very Good !");
			$("#comment2").addClass("verygood");
		}
		else if (click > 350)
		{
			$("#comment2").html("Good");
			$("#comment2").addClass("good");
		}
		else if (click > 200)
		{
			$("#comment2").html("Average");
			$("#comment2").addClass("average");
		}
		else
		{
			$("#comment2").html("Bad");
			$("#comment2").addClass("bad");
		}
		$("#result2").html(click);
	}
	if (localStorage.getItem(1339) != null)
	{
		var target = localStorage.getItem(1339)*(2.5);
		if (target > 85)
		{
			$("#comment3").html("Very Good !");
			$("#comment3").addClass("verygood");
		}
		else if (target > 70)
		{
			$("#comment3").html("Good");
			$("#comment3").addClass("good");
		}
		else if (target > 50)
		{
			$("#comment3").html("Average");
			$("#comment3").addClass("average");
		}
		else
		{
			$("#comment3").html("Bad");
			$("#comment3").addClass("bad");
		}
		$("#result3").html(target);
	}
}

function redirect_test1() {
	document.location.href="test1.html";
}

function redirect_test2() {
	document.location.href="test2.html";
}

function redirect_test3() {
	document.location.href="test3.html";
}