document.getElementById("translateBtn").addEventListener("click", () => {
  // Lógica para enviar el archivo al backend para traducir
  console.log("Traducir archivo");
  // Simulación:
  document.getElementById("originalText").value = "Texto extraído del PDF...";
  document.getElementById("brailleText").value = "⠞⠑⠭⠞⠕ ⠃⠗⠁⠊⠇⠇⠑";
});

document.getElementById("printBtn").addEventListener("click", () => {
  // Enviar la orden al backend para imprimir
  console.log("Imprimir texto en Braille");
});
