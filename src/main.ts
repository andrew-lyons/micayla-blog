import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(
    faEnvelope,
    faFacebook,
    faInstagram
);

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')