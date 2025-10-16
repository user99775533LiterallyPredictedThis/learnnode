<script setup>
defineProps(['titles']);
import { ref } from 'vue';

let active = ref(0);
let emit = defineEmits(['change']);

function setActive(key) {
    active.value = key;
    emit('change', key);
}
</script>
<template>
    <div class="tabs is-centered">
        <ul>
            <li v-for="(title, key) in titles" :class="{'is-active': active === key}">
                <a @click="setActive(key)">{{ title }}</a>
            </li>
        </ul>
    </div>
</template>