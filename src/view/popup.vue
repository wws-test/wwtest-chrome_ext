<template>
  <v-app>
    <v-card>
      <Form />
    </v-card>
  </v-app>
</template>

<script>

import '@/assets/css/tailwind.css';
import '@/assets/css/popup.css';
import Form from '@/components/FormComponent.vue';

export default {
  name: 'App',
  components: {
    Form
  },
};
</script>
