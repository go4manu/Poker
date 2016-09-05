exports.sessionObj=function(sessionId,names){
	this.sessionId=sessionId;
	this.names=names;
};
exports.user=function(name,answer){
	this.name=name;
	this.answer=answer;
};
exports.qna=function (que,ans) {
	this.que=que;
	this.ans=ans;
};
