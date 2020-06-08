var minhaPromise = function() {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://api.github.com/users/yasminmedeiros');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) { // 4 aparece que estiver OK
                if (xhr.status === 200) //valor que retorna se estiver ok
                    resolve(JSON.parse(xhr.responseText));
                else
                    reject('Erro na requisição')
            }
        }
    });

}
minhaPromise()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });