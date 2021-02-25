// JavaScript Document
function doSearch(){
	var oForm = document.searchForm;
	var keyword = document.getElementById('keyword2').value;
	if(keyword != ''){
		oForm.keyword.value = keyword;
		oForm.submit();
	}
}
function doLogin(){
	var oForm = document.loginForm;
	var password = document.getElementById('password2').value;
	var username = document.getElementById('username2').value;
	
	if(password != '' && username != ''){
		oForm.username.value = username;
		oForm.passwd.value = password;
		bbslogin(username, password);
		oForm.submit();
	}
}
function keyLogin(oEvent){
	var oForm = document.loginForm;
	var password = document.getElementById('password2').value;
	var username = document.getElementById('username2').value;
	var evn =  (window.navigator.userAgent.indexOf("MSIE")>=1) ? event : oEvent;
	if (evn.keyCode==13 && password != '' && username != ''){
		oForm.username.value = username;
		oForm.passwd.value = password;
		bbslogin(username, password);
		oForm.submit();
	}
}

function bbslogin(username, password){
	if(window.navigator.userAgent.indexOf("MSIE")>=1){
		document.frames.bbs_login.document.all.loginform.username.value = username;
		document.frames.bbs_login.document.all.loginform.password.value = password;
		document.frames.bbs_login.document.all.loginform.submit();
	}else{
		document.getElementById("bbs_login").contentWindow.document.getElementById('username').value=username;
		document.getElementById("bbs_login").contentWindow.document.getElementById('password').value=password;
		document.getElementById("bbs_login").contentWindow.document.getElementById('loginform').submit();
	}
}

function dologout(){
	if(window.navigator.userAgent.indexOf("MSIE")>=1){
		document.frames.bbs_login.document.all.loginform.action = '/bbs/logging.php?action=logout&formhash=4962fe96';
		document.frames.bbs_login.document.all.loginform.submit();
	}else{
		document.getElementById("bbs_login").contentWindow.document.getElementById('loginform').action = '/bbs/logging.php?action=logout&formhash=94775838';
		document.getElementById("bbs_login").contentWindow.document.getElementById('loginform').submit();
	}
	window.location.href = '/admin.php?action=logout&from=index';
}

function doReset(){
	document.getElementById('password2').value = '';
	document.getElementById('username2').value = '';
}