<script setup>
import { ref } from "vue";

let res = await fetch("https://api.chucknorris.io/jokes/random");
let data = await res.json();
console.group(data);
let joke = ref("");
joke.value = data.value;

console.log("Hello");
</script>

<template>
  <h1>{{ joke }}</h1>
</template>
