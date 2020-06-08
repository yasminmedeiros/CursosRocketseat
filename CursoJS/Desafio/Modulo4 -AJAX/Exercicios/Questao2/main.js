 var inputElement = document.querySelector('#nome');
 var buttonElement = document.querySelector('#button');
 var listaElement = document.querySelector('#lista');
 buttonElement.addEventListener("click", function() {
     axios.get(('https://api.github.com/users/' + inputElement.value + '/repos'))
         .then(function(response) {
             listaElement.value = '';
             for (let value of response.data) {
                 console.log(value.name);
                 var elemento = document.createTextNode(value.name);
                 var novoElemento = document.createElement('li');
                 novoElemento.appendChild(elemento);
                 listaElement.appendChild(novoElemento);

             }
         })
         .catch(function(error) {
             var elemento = document.createTextNode("...Carregando....");
             var novoElemento = document.createElement('li');
             novoElemento.appendChild(elemento);
             listaElement.appendChild(novoElemento);
         })
 }, );