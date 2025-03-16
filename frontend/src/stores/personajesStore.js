import { defineStore } from "pinia";
import personajesJSON from '@/assets/personajesJSON.json';

export const usePersonajesStore = defineStore("personajes", {
  state: () => ({
    // Esto será la vida de los personajes
    personajes: personajesJSON.personajes.map((personajeJSON) => ({
      ...personajeJSON,
      HPRestante: personajeJSON.totalHP
    })),
  }),

  getters: {},

  actions: {},
});
