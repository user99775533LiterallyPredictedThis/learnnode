<script setup>
import { ref } from 'vue';
import Tabs from './components/Tabs.vue';
let tabTitles = ['Pictures', 'Music', 'Videos', 'Documents', 'Games'];
let tabContent =[
    'Some cool pictures',
    'Some cool music',
    'Some cool videos',
    'Some cool documents',
    'Some cool games',
]
let tabActive = ref(0);

function setActive(key){
    tabActive.value = key;
}
</script>

<template>
<Tabs :titles="tabTitles" @change="setActive"></Tabs>
<div class="content">
    <h1>{{ tabContent[tabActive] }}</h1>
</div>
</template>