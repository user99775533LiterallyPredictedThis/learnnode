<script setup>
let res = await fetch('https://api.chucknorris.io/jokes/random');
let data = await res.json();
console.group(data);

console.log('Hello');
</script>

<template>
<button class="button is-primary" @click="window.alert('Cool')">Alert</button>
</template>