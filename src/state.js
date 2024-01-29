import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
    baseUrl: "https://rapidapi.com/joeykyber/api/ski-resort-forecast",



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