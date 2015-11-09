nbtm = false;

function start() {
	if (nbtm)
	{
		document.location.href="result.html";
	}
	else
	{
		$("#intro").css("display", "none");
		$("#btn").css("display", "none");
		$("#result").css("display", "block");

		var clicknumber = 0;

		$("body").click(function() {
			clicknumber++;
			$("#result").html('Clicks: ' + clicknumber);
		});

		setTimeout(function(){
			$("body").unbind("click");
			$("#btn").css("display", "block");

				$("#btn").html("Next Test");
				nbtm = true;
				localStorage.setItem(2, clicknumber);

		}, 5000);
	}
}