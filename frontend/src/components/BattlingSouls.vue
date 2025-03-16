<script>
import { usePersonajesStore } from '@/stores/personajesStore'
import { mapState } from 'pinia'

  export default {
    data() {
      return {
        ataques : 0,
      }
    },

    methods: {
      atacar() {
        console.log(`Se efectúa un ataque.`)
        this.ataques++;
      },
    },

    computed: {
      ...mapState(usePersonajesStore, ["personajes"])
    }
  }

</script>

<template>
  <div class="container border p-3">
    <div class="container border d-flex justify-content-end">
      <div class="">
        <h1>Container de adversario</h1>
        <div class="row">
          <div class="col-4">
            <button type="button" class="btn btn-success" @click="atacar">Atacar</button>
          </div>
          <div class="col-4">
            <button type="button" class="btn btn-danger">Defender</button>
          </div>
          <div class="col-4">
            <button type="button" class="btn btn-warning">Magia</button>
          </div>
        </div>
      </div>
    </div>

    <div class="container border d-flex justify-content-start">
      <div class="">
        <h1>Container propio</h1>
        <div class="row">
          <div class="col-4">
            <button type="button" class="btn btn-success" @click="atacar">Atacar</button>
          </div>
          <div class="col-4">
            <button type="button" class="btn btn-danger">Defender</button>
          </div>
          <div class="col-4">
            <button type="button" class="btn btn-warning">Magia</button>
          </div>
        </div>
      </div>
    </div>

    <div class="container p-5 m-5">
      {{ ataques }}
      {{ personajes }}
    </div>
  </div>
</template>
