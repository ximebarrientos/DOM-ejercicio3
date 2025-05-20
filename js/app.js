const inputTarea = document.getElementById("nuevaTarea");
const btnAgregar = document.querySelector(".btn-rosa");
const listaTareas = document.querySelector(".list-group");


btnAgregar.addEventListener("click", function (e) {
    e.preventDefault()
  const texto = inputTarea.value.trim();

  if (texto === "") {
    alert("Por favor, escribí una tarea.");
    return;
  }

  // Crear nuevo elemento <li>
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";
  li.textContent = texto;

  // Crear botón eliminar
  const btnEliminar = document.createElement("button");
  btnEliminar.className = "btn btn-danger btn-sm";
  btnEliminar.textContent = "Eliminar";

  // Agregar evento para eliminar tarea
  btnEliminar.addEventListener("click", function () {
    listaTareas.removeChild(li);
  });

  // Agregar botón al <li> y <li> a la lista
  li.appendChild(btnEliminar);
  listaTareas.appendChild(li);

  // Limpiar el input
  inputTarea.value = "";
});