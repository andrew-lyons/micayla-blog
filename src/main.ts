import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faComment, faEnvelope, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(
    faEnvelope,
    faFacebook,
    faInstagram,
    faComment,
    faThumbsUp
);

createApp(App)
.use(router)
.provide('wp', 'https://public-api.wordpress.com/rest/v1.1/sites/micaylalyons.wordpress.com')
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
