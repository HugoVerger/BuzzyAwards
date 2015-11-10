window.onload = function() {
	if (localStorage.getItem(1337) != null)
	{
		var average = localStorage.getItem(1337) + "ms";
		document.getElementById("result1").innerHTML = average;
	}
	if (localStorage.getItem(1338) != null)
	{
		var click = localStorage.getItem(1338)*5 + " per minute";
		document.getElementById("result2").innerHTML = click;
	}
	if (localStorage.getItem(1339) != null)
	{
		var accuracy = localStorage.getItem(1339) + " targets";
		document.getElementById("result3").innerHTML = accuracy;
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