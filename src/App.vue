<template>
    <div id="app">
        <Header />

        <transition name="page" mode="out-in">
            <router-view />
        </transition>

        <Footer />
    </div>
</template>

<script>
import Header from "../src/components/Header.vue";
import Footer from "./components/Footer.vue";

import { mapActions } from "vuex";
export default {
    components: {
        Header,
        Footer,
    },

    methods: {
        ...mapActions(["fetchNasaImages", "saveNasaImages"]),
    },

    mounted() {
        let images = JSON.parse(localStorage.getItem("nasaImages"))
            ? JSON.parse(localStorage.getItem("nasaImages"))
            : [];

        if (images.length > 0) {
            this.saveNasaImages(images);
        } else {
            this.fetchNasaImages();
        }
    },
};
</script>

<style>
*,
body {
    margin: 0;
    padding: 0;
}

body {
    overflow-x: hidden;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

#app {
    font-family: "Open Sans", sans-serif;
    /* font-family: "Roboto Mono", monospace; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

.page-enter,
.page-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}

.page-enter-active,
.page-leave-active {
    transition: all 0.3s ease;
}

.page-enter-to,
.page-leave {
    opacity: 1;
    transform: translateY(0);
}

::-moz-selection {
    background: #42b983;
    color: #fff;
}

::selection {
    background: #42b983;
    color: #fff;
}

img,
svg {
    max-width: 100%;
    height: auto;
}
</style>
