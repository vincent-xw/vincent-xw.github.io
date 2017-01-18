$(document).ready(function(){
	$("#next").click(function(){
		$("#frame1").addClass("frame2");
		$("#frame2").addClass("frame").css("display","block");
		$(".skill,.skillinfo").css({
			"animation":"show 2s 2s both"
		});

	});
	$("#next2").click(function(){
		$("#frame1").css("display","none");
		$("#frame2").addClass("frame2");
		$("#frame3").addClass("frame").css("display","block");
		$(".projectinfo").css({
			"animation":"show 2s 2s both"
		});
	});
});