const formulario = document.getElementById("formInventario");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  // 1. Capturar los inputs
  const inputProducto = document.getElementById("producto");
  const inputCantidad = document.getElementById("cantidad");
  const inputPrecio = document.getElementById("precio");

  // 2. Extraer valores (parsear a número los campos tipo number )

  const valorProducto = inputCantidad.value.trim();
  const valorCantidad = parseInt(inputCantidad.value);
  const valorPrecio = parseInt(inputPrecio.value);

  // 3. Capturamos los campos de texto para errores

  const errorProducto = document.getElementById("errorProducto");
  const errorCantidad = document.getElementById("errorCantidad");
  const errorPrecio = document.getElementById("errorPrecio");
  const mensajeExito = document.getElementById("mensajeExito");

  let formularioValido = true;

  // 4. Limpieza Inicial

  errorProducto.textContent = "";
  errorCantidad.textContent = "";
  errorPrecio.textContent = "";
  mensajeExito.textContent = "";

  inputProducto.classList.remove("input-error", "input-valido");
  inputCantidad.classList.remove("input-error", "input-valido");
  inputPrecio.classList.remove("input-error", "input-valido");

  // 5. La lógica de validación

  // Validar Producto (Texto vacio)
  if (valorProducto === "") {
    errorProducto.textContent = "El nombre del producto es obligatorio";
    inputProducto.classList.add("input-error");
    formularioValido = false;
  } else {
    inputProducto.classList.add("input-valido");
  }

  // Validar cantidad (Debe ser un número mayor a cero)
  if (isNaN(valorCantidad) || valorCantidad <= 0) {
    errorCantidad.textContent = "La cantidad debe ser mayor a cero";
    inputCantidad.classList.add("input-error");
    formularioValido = false;
  } else {
    inputCantidad.classList.add("input-valido");
  }

  // Validar precio (Debe ser un número razonable)
  if (isNaN(valorPrecio) || valorPrecio < 100) {
    errorPrecio.textContent = "El precio válido (mínimo $100)";
    inputPrecio.classList.add("input-error");
    formularioValido = false;
  } else {
    inputPrecio.classList.add("input-valido");
  }

  // 6. Desición Final
  if (formularioValido === true) {
    mensajeExito.textContent = "Producto guardado correctamente";

    // Reseteamos las cajas para que puedan registrar otro producto
    formulario.reset();
    inputProducto.classList.remove("input-valido");
    inputCantidad.classList.remove("input-valido");
    inputPrecio.classList.remove("input-valido");
  }
});
