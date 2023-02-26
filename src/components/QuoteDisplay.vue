<template>
  <v-card class="m-4">
    <v-card-text>
      <div v-if="loading">
        <p>Loading...</p>
      </div>
      <div v-else>
        <div v-if="quote">
          <p>{{ quote.text }}</p>
          <p>{{ quote.author }}</p>
        </div>
        <div v-else>
          <p>No quote yet. Click the button to fetch one!</p>
        </div>
        <v-btn color="primary" @click="fetchQuote" :disabled="loading">
          Get a new quote
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>




<script>
export default {
  name: 'QuoteDisplay',
  data() {
    return {
      loading: false,
      quote: null,
    };
  },
  methods: {
    fetchQuote() {
      this.loading = true;
      this.axios
        .get('/quotes')
        .then((response) => {
          console.log('Fetched quotes:', response.data);
          const quotes = response.data;
          const randomIndex = Math.floor(Math.random() * quotes.length);
          this.quote = quotes[randomIndex];
          this.$log(
            'Fetched quote: ' +
              this.quote.text +
              ' by ' +
              this.quote.author
          );
        })
        .catch((error) => {
          console.error('Failed to fetch quote:', error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
</style>
