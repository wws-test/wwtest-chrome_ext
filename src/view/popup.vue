<template>
  <v-app>
    <v-card>
      <QuoteDisplay />
    </v-card>
  </v-app>
</template>

<script>

import '@/assets/css/tailwind.css';
import '@/assets/css/popup.css';
import QuoteDisplay from '@/components/QuoteDisplay.vue';
export default {
  name: 'App',
  components: {
    QuoteDisplay
  },
};
</script>
