

/////////////////////
// Función para agregar una nueva nota
function agregarNota() {
    const nuevaNotaTexto = document.getElementById("nota").innerHTML;
    if (nuevaNotaTexto.trim() !== "") {
        const listaNotas = document.getElementById("listaNotas");
        const nuevaNota = document.createElement("p");
        nuevaNota.className = "newNote";
        nuevaNota.innerHTML = `
            ${nuevaNotaTexto}
            <div class="eliminar" onclick="eliminarNota(this)">Borrar</div>
           
        `;
        listaNotas.appendChild(nuevaNota);
        document.getElementById("nuevaNota").innerHTML = "";
    }
}

// Función para eliminar una nota
function eliminarNota(elementoEliminar) {
    const notaAEliminar = elementoEliminar.parentNode;
    notaAEliminar.remove();
}