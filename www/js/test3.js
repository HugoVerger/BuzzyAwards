nbtm = false;

function start() {
	if (nbtm)
	{
		document.location.href="test4.html";
	}
	else
	{
		$("#intro").css("display", "none");
		$("#btn").css("display", "none");
		$("#result").css("display", "block");
		$("#target").html('<img src="target.png">');
		var targethit = 0;

		var x = 5 + Math.random() * 85 + "%";
		var y = 5 + Math.random() * 85 + "%";
		$('#target').css('left', x);
		$('#target').css('top', y);
		$('#target').css('display', 'block');

		$("#target").click(function() {
			targethit++;
			$("#result").html('Targets hit: ' + targethit);
			var x = 5 + Math.random() * 85 + "%";
			var y = 5 + Math.random() * 85 + "%";
			$('#target').css('left', x);
			$('#target').css('top', y);
		});

		setTimeout(function(){
			$("#target").unbind("click");
			$("#target").css("display", "none");
			//$("#btn").css("display", "block");
			$("#btn").html("Next Test");
			nbtm = true;
			localStorage.setItem(1339, targethit);
			$("#btn2").css("display", "block");
		}, 15000);
	}
}

function back() {
	document.location.href="index.html";
}