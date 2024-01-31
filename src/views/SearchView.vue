<script>
import axios from 'axios';
import { state } from '../state.js';

export default {
    name: 'SearchView',

    data() {
        return {
            resort: '',
            dataResults: [],

        }
    },
    methods: {
        searching() {
            if (this.resort.length > 3) {

                const apiKey = '1bd77c1e76msh9cb0c084532d1afp19c174jsn0949a4e2e26a';

                axios
                    .get(state.baseUrl + '/' + this.resort + '/snowConditions', {
                        headers: {
                            'X-RapidAPI-Key': apiKey,
                            'X-RapidAPI-Host': 'ski-resort-forecast.p.rapidapi.com'
                        },
                        params: {
                            units: 'm',
                        }
                    })
                    .then(response => {
                        console.log(response.data);
                        this.dataResults = response.data;

                        console.log(this.dataResults.basicInfo.name);
                    })
                    .catch(error => {
                        console.error(error);
                    })

            }
            else {
                this.dataResults = [];
            }


        }
    }
}
</script>

<template>
    <div class="violet pb-5">
        <div class="container">
            <h2 class="jumbo p-5 rounded-5 bg_card">We accompany you in finding the best ski area for you and your passion
                for snow.
            </h2>


            <div class="mb-3 col-12 col-md-4">
                <label for="ski-area" class="form-label">Search the perfect sky-area for you
                </label>
                <input v-model="resort" type="text" class="form-control" name="ski-area" id="ski-area"
                    aria-describedby="helpId" placeholder="Livigno" />
            </div>

            <a class="btn btn-secondary" href="#" @click="searching()">
                <i class="fa-solid fa-circle-right"></i>
            </a>

            <h4>
                {{ this.dataResults.basicInfo.name }}
            </h4>
            <!-- <div v-if="this.dataResults.length > 0">

            </div> -->





        </div>

    </div>
</template>

<style></style>