<template>
    <div class="home">
        <div class="px-3 py-5 px-md-5 bg-light rounded-3 jumbotron">
            <div class="intro container px-0 px-md-3 px-lg-5 py-2 py-md-3">
                <h1 class="display-5 fw-bold">Shopify Internship Challenge</h1>

                <p>
                    Shopify Internship Challenge to build an application with
                    React js, that fetches data from the NASA free API. User
                    should be able to like images. I replicated this in Vue js
                </p>
                <!-- <button class="btn btn-primary btn-lg" type="button">
                    Example button
                </button> -->
            </div>
        </div>
        <section>
            <div class="container">
                <div
                    class="row justify-content-center align-items-center"
                    v-if="fetchedImages.length > 0"
                >
                    <NasaImage
                        v-for="(image, index) in fetchedImages"
                        :key="index"
                        :image="image"
                        :index="index"
                    />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import NasaImage from "../components/NasaImage.vue";

import { mapGetters } from "vuex";

export default {
    components: { NasaImage },
    computed: {
        ...mapGetters(["nasaImages"]),

        fetchedImages() {
            let images = [];

            if (this.nasaImages.length > 0) {
                images = this.nasaImages;
                // console.log(images);

                // let newImages = images.filter((newImage) => {
                //     newImage.like = 0;
                //     newImage.liked = false;
                //     console.log(typeof newImage.like);

                //     return newImage;
                // });

                // images = newImages;

                // console.log(typeof images.like);
            }

            return images;
        },
    },
};
</script>

<style scoped>
.jumbotron {
    max-width: 1300px;
    height: 320px;
    margin: auto;
    display: flex;
    align-items: center;
    border-radius: 1rem !important;
}

.jumbotron h1,
.jumbotron p {
    font-family: "Roboto Mono", monospace;
}

.intro h1 {
    margin-bottom: 20px;
}

.intro p {
    max-width: 650px;
}

section {
    padding-top: 80px;
    padding-bottom: 80px;
}
</style>
