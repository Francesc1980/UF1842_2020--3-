let fotos=["casa1","casa2","casa3","casa4","casa5","casa6","casa7","casa8"];
let galeria=[];
    
for(let i=0; i< fotos.length; i++){
//1.recuperamos el nombre de la foto
let siguienteFoto = fotos[i];
//2.Creamos un elemento nuevo del tipo img y tenemos que llenar la propiedad .src con la ruta a la imagen

let imagen = document.createElement("img");
imagen.src =`/img/${siguienteFoto}.jpg`;

imagen.addEventListener("dblclick",function(event){
    //identificar la foto clicada(event.target.src)
    //añadir el valor del event.target.src en el array de galeria
    //llamar a la funcion llenarGaleria()
    
    let fotoClicada = event.target.src;

    if (galeria.includes(fotoClicada)){
        alert(`La foto ${fotoClicada}ya esta en la galeria`);
        return;




    }
    //si la galaria ya tiene la foto mostramos una alerta para mostrar 
   
  


    galeria.push(fotoClicada);
    llenarGaleria();


    

})

//3 añadir la imgen como hijo de section
let sectionFototeca = document.querySelector("#fototeca");
sectionFototeca.appendChild(imagen);
}




function llenarGaleria(){

let sectionGaleria = document.querySelector("#galeria");
sectionGaleria.innerHTML = "";

// 1.Recuperar el arrey galeria

for (let i = 0; i < galeria.length; i++){
    let contenedorImagen = document.createElement("div");
    contenedorImagen.classList.add("imagen-galeria");

    let imagen = document.createElement("img");
    imagen.src = galeria[i];
    

    let aspaQuitarFoto = document.createElement("img");
    aspaQuitarFoto.src = "/img/borrar.png";
    aspaQuitarFoto.classList.add("aspa-eliminar");
    aspaQuitarFoto.id = imagen.src;

    aspaQuitarFoto.addEventListener("click",function(event){

    let srcFoto= event.target.id;

    let posImagenGaleria = galeria.indexOf(srcFoto);

    galeria.splice(posImagenGaleria, 1);

    llenarGaleria();

    






    })



    





    contenedorImagen.appendChild(imagen);
    contenedorImagen.appendChild(aspaQuitarFoto);

    sectionGaleria.appendChild(contenedorImagen);




     


    



}


//probar hacer fin de semana configurar  para mostrar foto clickada en el slider 

//consejo en el teams¡¡¡¡ cuidado abrir lightbox ascocial doubli














}










