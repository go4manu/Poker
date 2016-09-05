$(function() {
	$("#btnJoinMeeting").click(function () {
		$.ajax({
			url : "/joinMeeting",
			type :"get",
			data : {
				"sessionId": $("#txtSessionId").val(),
				"userName": $("#txtName").val()
			},
			success : function(result) {
				renderResult(result);
			}
		});
	});
	var renderResult=function (jsonData) {
        $("#dvBody").html("");
        var usersWithId = JSON.parse(jsonData).names.map(function (name) {
            return {"name": name};
        });

        $("#bookTemplate").tmpl(usersWithId).appendTo("#dvBody");
	}
});

