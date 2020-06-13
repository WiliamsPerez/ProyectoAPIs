let aprendiendo;

aprendiendo = function(){
    console.log('Aprendiendo JavaScript');

}

aprendiendo = () => {
    console.log('Aprendiendo JavaScript');

}

//una linea no requiere llave 
aprendiendo = () => console.log('Aprendiendo JavaScript');
//retornar valor
aprendiendo = () => 'Aprendiendo JavaScript';
//retorna objeto 
aprendiendo = () => ({aprendiendo: 'Aprendiendo JavaScript'});
//pasar parametros
aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);
//pasando un parametro
aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
//pasando dos parametros 
aprendiendo = (tec1, tec2) => console.log(`Aprendiendo ${tec1} y ${tec2}`);



const productos = ['disco', 'Camisa', 'Guitarra'];

/*
const letrasProducto = productos.map((producto) => {
    return producto.length;

});
console.log(letrasProducto);
 */
productos.forEach(producto => console.log(producto));