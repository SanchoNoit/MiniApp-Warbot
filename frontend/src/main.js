import { createApp } from 'vue'
import App from '@/App.vue'

// Import bootsptrap's custom CSS
import '@/scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const app = createApp(App)
app.mount('#app')
