// Botón para abrir el selector de archivo
document.getElementById("uploadButton").addEventListener("click", () => {
  document.getElementById("pdfFile").click();
});

// Mostrar nombre del archivo cargado
document.getElementById("pdfFile").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    document.getElementById("fileName").textContent = file.name;
  } else {
    document.getElementById("fileName").textContent = "No hay ningún archivo seleccionado";
  }
});

// Traducir
document.getElementById("translateButton").addEventListener("click", () => {
  const file = document.getElementById("pdfFile").files[0];
  if (!file) {
    alert("Primero debes seleccionar un archivo PDF.");
    return;
  }

  showModal(() => {
    console.log("Traduciendo...");
    // Llama aquí tu lógica de traducción real
  });
});

// Imprimir
document.getElementById("printButton").addEventListener("click", () => {
  const file = document.getElementById("pdfFile").files[0];
  if (!file) {
    alert("Primero debes seleccionar un archivo PDF.");
    return;
  }

  showModal(() => {
    console.log("Imprimiendo...");
    // Llama aquí tu lógica de impresión real
  });
});

// Función para mostrar la ventana modal
function showModal(onConfirm) {
  const modal = document.getElementById("customModal");
  modal.style.display = "block";

  const yesBtn = document.getElementById("confirmYes");
  const noBtn = document.getElementById("confirmNo");

  yesBtn.onclick = () => {
    modal.style.display = "none";
    onConfirm();
  };

  noBtn.onclick = () => {
    modal.style.display = "none";
  };
}
