$(function() {
	$("#btnJoinMeeting").click(function () {
		$.ajax({
			url : "/joinMeeting",
			type :"post",
			data : {
				"sessionId": $("#txtSessionId").val(),
				"userName": $("#txtName").val()
			},
			success : function(result) {
				$("#dvBody").html(result);
			}
		});
	});
});

