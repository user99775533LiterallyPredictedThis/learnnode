<script setup>
import axios from "axios";
import CharacterCard from "../components/CharacterCard.vue";
import { ref } from "vue";

let characters = ref([]);
let info = ref({
  count: 0,
  pages: 0,
  next: null,
  prev: null,
});

let currentPage = ref(1);
let searchValue = ref('');

async function getCharacters(page) {
  let res = await axios.get("https://rickandmortyapi.com/api/character", {
    params: {
        page,
        name: searchValue.value
    }
  });
  characters.value = res.data.results;
  info.value = res.data.info;
}

await getCharacters(currentPage.value);

function generatePages(count, current) {
  let pages = [];
  for (let i = 1; i <= 3; i++) {
    pages[i] = i;
  }
  if (current > 2 && current < count - 1) {
    pages.push("...");
}

    for (let i = current - 2; i <= current + 2; i++) {
      pages[i] = i;
    }

  if (current < count - 2) {
    pages.push("...");
  }

  for (let i = count - 3; i <= count; i++) {
    pages[i] = i;
  }
  return pages.filter((page) => page);
}

let timeout;

async function getPage(page) {
    clearTimeout(timeout);
    timeout = setTimeout(async () => {
    currentPage.value = page;
    await getCharacters(currentPage.value);
    }, 882);
}
</script>

<template>
  <div class="field has-addons mx-5">
    <div class="control">
      <input
        v-model="searchValue"
        @input="getPage(1)"
        class="input"
        type="text"
        placeholder="Find a character"
      />
    </div>
    <div class="control">
      <button class="button is-info">Search</button>
    </div>
  </div>
  <div class="my-2 is-flex is-justify-content-space-between">
    <nav
      class="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <button
        class="pagination-previous"
        :disabled="!info.prev"
        @click="getPage(currentPage - 1)"
      >
        Previous
      </button>
      <button
        class="pagination-next"
        :disabled="!info.next"
        @click="getPage(currentPage + 1)"
      >
        Next page
      </button>
      <ul class="pagination-list">
        <li v-for="page in generatePages(info.pages, currentPage)">
          <a
            v-if="page === currentPage"
            class="pagination-link is-current"
            aria-label="Page 46"
            aria-current="page"
            >{{ page }}</a
          >
          <a
            v-else-if="page !== '...'"
            href="#"
            class="pagination-link"
            @click="getPage(page)"
            aria-label="Goto page 1"
            >{{ page }}</a
          >
          <span v-else class="pagination-ellipsis">&hellip;</span>
        </li>
      </ul>
    </nav>
  </div>
  <div class="columns is-multiline">
    <div class="column is-3" v-for="character in characters">
      <CharacterCard :character="character"></CharacterCard>
    </div>
  </div>
</template>
