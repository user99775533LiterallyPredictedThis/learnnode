<script setup>
import { ref } from "vue";

let cats = ref(0);
</script>

<template>
  <div class="columns">
    <div class="column has-background-primary" style="text-align: center">
      <h1>{{ cats }} cats!</h1>
      <div @click="cats++">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fkitten-png-kitten-playing-transparent-background-1920.png&f=1&nofb=1&ipt=ca6d593b0fc39c290bce3b2623b008e51e523b99d8cd63a1a45f1d71e65cf516"
        />
      </div>
    </div>
    <div class="column has-background-warning">test</div>
    <div class="column has-background-info">test</div>
  </div>
</template>
