import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "es6-promise/auto";
// createApp(App).mount('#app')

const app = createApp(App);

app.use(store);
app.mount("#app");
