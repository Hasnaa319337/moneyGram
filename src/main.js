import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// bootstarp
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)
app.use(vuetify)
app.use(router)

app.mount('#app')
