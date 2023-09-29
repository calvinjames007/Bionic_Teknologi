import axios from 'axios';
import { defineStore } from 'pinia';
const SERVER_URL = 'https://bti.id/services/btiportalcorems/api/pt-job-posts/no-auth'

export const useCounterStore = defineStore('counter', {
    state: () => ({
        listofinfo: []
    }),

    actions: {
        async getInfo() {
            try {
                const {data} = await axios({
                    url: `${SERVER_URL}`,
                    method: `GET`
                })

                this.listofinfo = data
            }
            catch (error) {
                console.log(error)
            }
        }
    }
})