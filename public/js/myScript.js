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

        $("#dvBody").append($("<div class='row2'></div>").append($("#userTemplate")
            .tmpl(usersWithId)));
        
        var lstButton=[{"no":"0"},{"no":"1"},{"no":"2"},{"no":"3"},{"no":"5"},
            {"no":"8"},{"no":"13"},{"no":"20"},{"no":"Q"}];

           $("#dvBody").append($("<div class='row2'></div>").append($("#buttonTemplate")
               .tmpl(lstButton)));
	}
});

