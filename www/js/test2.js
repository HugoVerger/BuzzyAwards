nbtm = false;

function start() {
	if (nbtm)
	{
		document.location.href="test3.html";
	}
	else
	{
		$("#intro").css("display", "none");
		$("#btn").css("display", "none");
		$("#result").css("display", "block");
		$("#timer").css("display", "block");

		var clicknumber = 0;

		$(window).click(function() {
			clicknumber++;
			$("#result").html('Clicks: ' + clicknumber);
		});

		setTimeout(function(){
			$(window).unbind("click");
			$("#btn").css("display", "block");
			$("#btn").html("Next Test");
			nbtm = true;
			localStorage.setItem(1338, clicknumber);
			$("#btn2").css("display", "block");
		}, 12000);
	}
}

function back() {
	document.location.href="index.html";
}