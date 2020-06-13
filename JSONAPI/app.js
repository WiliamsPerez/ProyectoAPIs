const cargarPosts = document.querySelector('#cargar').addEventListener('click', cargarAPI);


function cargarAPI(){
    //crear el objeto 
    const xhr = new  XMLHttpRequest();
    //abrir la conexion 
    xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts', true);
    //cargar y leer datos 
    xhr.onload = function() {
        if(this.status === 200) {
            const respuesta = JSON.parse(this.responseText);
            let contenido = '';
            respuesta.forEach(function(post){
                contenido += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                `;

            });
            document.getElementById('listado').innerHTML = contenido;
        }
    }
    //enviar la conexión 
    xhr.send();
}