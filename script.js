

/////////////////////
// Función para agregar una nueva nota
function agregarNota() {
    const nuevaNotaTexto = document.getElementById("nota").innerHTML; // Obtenemos el valos del elemento por el id
    // creamos condicional para saber si el texto esta vacio, si no es asi al se crea cada na de las notes al presionar el boton
    if (nuevaNotaTexto.trim() !== "") {
        const listaNotas = document.getElementById("listaNotas");
        const nuevaNota = document.createElement("p");
        nuevaNota.className = "newNote";
        nuevaNota.innerHTML = `
            ${nuevaNotaTexto}
            <div class="eliminar" onclick="eliminarNota(this)">Borrar</div>
           
        `;
        listaNotas.appendChild(nuevaNota); // agregamos el nuevo elemento al index.html
        document.getElementById("nuevaNota").innerHTML = "";
    }
}

// Función para eliminar una nota
function eliminarNota(elementoEliminar) {
    const notaAEliminar = elementoEliminar.parentNode;
    notaAEliminar.remove();
}