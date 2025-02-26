<script>
import NavBar from "@/components/navegacion/navbar.vue";

export default {
  components: { NavBar },
};


// Script de pulgadas a CM
document.addEventListener('DOMContentLoaded', () => {
    const inputPulgadas = document.getElementById('inputPulgadas');
    const convertirAPulgadasButton = document.getElementById('convertirAPulgadasButton');
    const listaResultadosConversionPulgadas = document.getElementById('listaResultadosConversionPulgadas');

    convertirAPulgadasButton.addEventListener('click', () => {
        const plugadasTexto = inputPulgadas.value.trim();
        if (plugadasTexto === '') return;

        const li = document.createElement('li');
        li.classList.add('list-unstyled')
        li.classList.add('p-1')
        li.textContent = (inputPulgadas.value * 2.54).toFixed(2);
        console.log(li)

        const eraseButton = document.createElement('button');
        eraseButton.classList.add('rounded')
        eraseButton.textContent = '❌';
        eraseButton.style.marginLeft = '10px';

        eraseButton.addEventListener('click', () => {
            listaResultadosConversionPulgadas.removeChild(li);
        });

        li.appendChild(eraseButton);
        listaResultadosConversionPulgadas.appendChild(li);

        inputPulgadas.value = '';
    });
});


</script>

<template>
  <div class="app-container">
    <NavBar></NavBar>

    <!-- Conversor Pulgadas -->
    <main>
      <div class="container d-flex justify-content-center p-2">
        <div class="border rounded p-3">
          <h1>📏 Pulgadas A Cm</h1>
          <input
            type="text"
            id="inputPulgadas"
            placeholder="Introduca pulgadas..."
          />
          <button id="convertirAPulgadasButton">Convertir</button>
          <ul id="listaResultadosConversionPulgadas"></ul>
        </div>
      </div>

      <!-- GIF del GreyKnight -->
      <div class="container d-flex justify-content-center p-2">
        <img src="/public/GreyKnight.gif" alt="GreyKnight" class="img-fluid" />
      </div>
    </main>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 90vh;
}

main {
  flex: 1;
}
</style>
