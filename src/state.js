import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
  baseUrl: 'https://ski-resort-forecast.p.rapidapi.com',



  /* connectAPI() {
    axios
      .get(this.base_url + this.comicsUri)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("Error:");
        console.error(error);
      });
  }, */
});