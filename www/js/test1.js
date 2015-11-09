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

		//var timer = 2000 + Math.random() * 2000;
		var timer = 500;
		setTimeout(function(){
			$("body").css("background-color", "red");
			var start = new Date().getTime();
			$(this).click(function() {
				$(this).unbind("click");
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
					localStorage.setItem(1, average);
				}
			});
		}, timer);
	}
}

function format(n){
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