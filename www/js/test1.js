trynumber = 1;
average = 0;
nbtm = false;


function changecolor() {
	if (nbtm)
	{
		document.location.href="test2.html";
	}
	else
	{
		$("#intro").css("display", "none");
		$("#btn").css("display", "none");
		$("#result").css("display", "none");

		var timer = 1000 + Math.random() * 3000;
		setTimeout(function(){
			$("body").css("background-color", "red");
			var start = new Date().getTime();
			$(this).mousedown(function() {
				$(this).unbind("mousedown");
				$("body").css("background-color", "black");
				var end = new Date().getTime();
				var time = end - start;
				$("#result").append('Test number ' + trynumber + ': ' + format(time) + 'ms</br>');
				average += time;
				$("#result").css("display", "block");
				$("#btn").css("display", "block");
				if (trynumber < 3)
				{
					$("#btn").html("Retry");
					trynumber++;
				}
				else
				{
					average = Math.trunc(average/3 * 10)/10;
					$("#result").append('Average: ' + format(average) + 'ms</br>');
					$("#btn").html("Next Test");
					nbtm = true;
					localStorage.setItem(1337, average);
					$("#btn2").css("display", "block");
				}
			});
		}, timer);
	}
}

function back() {
	document.location.href="index.html";
}

function format(n) {
	if (n < 10)
	{
		return "00" + n;
	}
	else if (n <100)
	{
		return "0" + n;
	}
	else
		return n;
}