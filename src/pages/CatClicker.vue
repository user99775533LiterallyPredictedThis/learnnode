<script setup>
import { ref } from "vue";
import BuildingButton from "../components/BuildingButton.vue";

let cats = ref(0);
let cps = ref(0);

setInterval(() => {
  cats.value += cps.value;
}, 1000);

let buildings = ref([
  { name: "Cursor", icon: "☝️", cps: 0.1, price: 15, count: 0 },
  { name: "Grandma", icon: "👵", cps: 1, price: 100, count: 0 },
]);

function buyBuilding(building) {
  if (cats.value >= building.price) {
    cats.value -= building.price;
    cps.value += building.cps;
    building.count++;
  }
}
</script>

<template>
  <div class="columns">
    <div class="column has-background-primary" style="text-align: center">
      <h1>{{ parseFloat(cats.toFixed(1)) }} cats!</h1>
      <h3>per second {{ parseFloat(cps.toFixed(1)) }}</h3>

      <div @click="cats++">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fkitten-png-kitten-playing-transparent-background-1920.png&f=1&nofb=1&ipt=ca6d593b0fc39c290bce3b2623b008e51e523b99d8cd63a1a45f1d71e65cf516"
        />
      </div>
    </div>
    <div class="column has-background-warning">test</div>
    <div class="column has-background-info">
      <BuildingButton
        v-for="building in buildings"
        :building="building"
        :disabled="cats < building.price"
        @click="buyBuilding(building)"
      ></BuildingButton>
    </div>
  </div>
</template>

<style>
.is-disabled {
  cursor: not-allowed !important;
  opacity: 50%;
}
</style>
