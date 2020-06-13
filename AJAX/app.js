document.getElementById('Cargar').addEventListener('click', cargarDatos);


function cargarDatos(){
    //crear el objeto xmlhttRequest
    const xhr = new XMLHttpRequest();
    // Abrir una conexion 
    xhr.open('GET', 'datos.txt', true);

    //una ves que carga 
    xhr.onreadystatechange = function() {

        console.log(`Estado ${this.readyState}`);

        //200:correcto | 403:prohibido | 404:no encontrado
        if(this.readyState === 4 && this.status === 200) {
            // console.log(this.responseText);
        }

    }
    //enviar el request
    xhr.send();

}
