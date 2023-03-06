<template>
  <div>
    <button @click="fetchData">Fetch Data</button>
    <div v-if="isLoading">Loading...</div>
    <div v-if="data">{{ data }}</div>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      isLoading: false,
      data: null,
      error: null,
    };
  },
  methods: {
    fetchData() {
      this.isLoading = true;
      axios.get('https://jsonplaceholder.typicode.com/posts/1')
          .then(response => {
            this.isLoading = false;
            this.data = response.data;
          })
          .catch(error => {
            this.isLoading = false;
            this.error = error.message;
          });
    },
  },
};
</script>
