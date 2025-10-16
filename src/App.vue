<script setup>
import { ref } from "vue";
import Modal from "./components/Modal.vue";
import ImgModal from "./components/ImgModal.vue";

let modalActive = ref(false);
let modal2Active = ref(false);
let modal3Active = ref(false);
</script>

<template>
    <div class="container mt-3">
        <button class="button is-primary mx-2" @click="modalActive = true">
            Click here
        </button>
        <button class="button is-warning mx-2" @click="modal2Active = true">
            Click here too
        </button>
        <button class="button is-danger mx-2" @click="modal3Active = true">
            Click here as well
        </button>
    </div>

    <ImgModal :active="modalActive" @close="modalActive = false" url="https://placekittens.com/500/500?r=1"></ImgModal>
    <ImgModal :active="modal2Active" @close="modal2Active = false" url="https://placekittens.com/500/500?r=2">
    </ImgModal>
    <ImgModal :active="modal3Active" @close="modal3Active = false" url="https://placekittens.com/500/500?r=3">
    </ImgModal>

    <div class="card my-5">
        <div class="card-image">
            <figure class="image is-4by3">
                <img src="https://placekittens.com/1280/960" alt="" />
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48?r=4">
                        <img src="https://placekittens.com/96/96?r=5" alt="" />
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">Meow Smith</p>
                    <p class="subtitle is-6">@meowsmith</p>
                </div>
            </div>

            <div class="content">
                <a>meow meow purr meow purrrrrrrrrrrrrr</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
        </div>
    </div>
    <Modal :active="modal3Active" @close="modal3Active = false"> </Modal>
</template>
