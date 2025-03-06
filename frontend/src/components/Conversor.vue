<script>
// Script de pulgadas a CM
// document.addEventListener('DOMContentLoaded', () => {

export default {
  data() {
    return {

    };
  },

  methods: {
    convertirAPulgadas() {
      const listaResultadosConversionPulgadas = document.getElementById('listaResultadosConversionPulgadas');
      const inputPulgadas = document.getElementById('inputPulgadas');
      const plugadasTexto = inputPulgadas.value.trim();
      if (plugadasTexto === "") return;

      const li = document.createElement("li");
      li.classList.add("list-unstyled");
      li.classList.add("p-1");
      li.textContent = (inputPulgadas.value * 2.54).toFixed(2);
      console.log(li);

      const eraseButton = document.createElement("button");
      eraseButton.classList.add("rounded");
      eraseButton.textContent = "❌";
      eraseButton.style.marginLeft = "10px";

      eraseButton.addEventListener("click", () => {
        listaResultadosConversionPulgadas.removeChild(li);
      });

      li.appendChild(eraseButton);
      listaResultadosConversionPulgadas.appendChild(li);

      inputPulgadas.value = "";
    },
  },
};
</script>

<template>
  <div class="container d-flex justify-content-center p-2">
    <div class="border rounded p-3">
      <h1>📏 Pulgadas A Cm</h1>
      <input
        type="text"
        id="inputPulgadas"
        placeholder="Introduca pulgadas..."
      />
      <button id="convertirAPulgadasButton" @click="convertirAPulgadas()">Convertir</button>
      <ul id="listaResultadosConversionPulgadas"></ul>
    </div>
  </div>
</template>
