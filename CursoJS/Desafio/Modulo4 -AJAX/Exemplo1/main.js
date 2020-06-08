var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/yasminmedeiros');
xhr.send(null)

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) { // 4 aparece que estiver OK
        console.log(JSON.parse(xhr.responseText));
    }
}