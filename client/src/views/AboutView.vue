<script>
import {mapState, mapActions} from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
  name: `Get Data`,

  computed: {
    ...mapState(useCounterStore, ['listofinfo'])
  },

  methods: {
    ...mapActions(useCounterStore, ['getInfo']),

    async fetchInfo() {
      this.getInfo()
    }
  },

  created() {
    this.getInfo()
  }
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>

</style>
