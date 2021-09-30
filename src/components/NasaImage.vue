<template>
    <div class="col-12 col-md-6 col-lg-4" v-if="image">
        <div class="image-item">
            <div class="image" :style="`background: url(${image.img_src})`">
                <div class="content">
                    <p>No. of likes: {{ likes }}</p>
                </div>
            </div>

            <div class="image-info mb-4">
                <div class="title">
                    <h2>{{ image.rover.name }}</h2>

                    <i
                        class="far fa-heart text-danger"
                        title="like photo"
                        :class="[!liked ? 'far fa-heart' : 'fas fa-heart']"
                        @click="updateLike(index, $event)"
                    >
                    </i>
                </div>

                <div class="publish-date">
                    <time datetime="">{{ image.earth_date }}</time>
                </div>

                <!-- <p>No Description</p> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["image", "index"],

    data() {
        return {
            likes: 0,
            liked: false,
            id: this.image.id,
        };
    },

    methods: {
        // updateLike(image) {
        //     // console.log("here 1");
        //     // image.liked = !image.liked;

        //     // if (image.liked) {
        //     //     image.like = image.like + 1;
        //     //     console.log(image.liked);
        //     //     console.log(image.like);
        //     // } else {
        //     //     image.like = image.like - 1;
        //     //     console.log(image.liked);
        //     //     console.log(image.like);
        //     // }

        //     if (!localStorage.getItem(image.like)) {
        //         image.like++;
        //         this.image.liked = !this.image.liked;
        //         console.log("liked");

        //         localStorage.setItem(image.like, true);
        //     }
        //     if (image.like > 0 && localStorage.getItem(image.like)) {
        //         image.like.likes--;
        //         this.image.liked = !this.image.liked;
        //         console.log("unliked");

        //         localStorage.removeItem(image.like);
        //     }
        // },

        updateLike(index, event) {
            event.preventDefault();

            this.liked = !this.liked;
            let photoName = this.image.rover.name;
            let photoLikes = this.likes;

            if (this.image) {
                if (this.liked) {
                    // if (!localStorage.getItem(photoLikes)) {
                    this.likes++;
                    console.log(index, this.id, `${photoName} has been liked`);

                    // localStorage.setItem(photoLikes, true);
                    // }
                }
                if (photoLikes > 0) {
                    this.likes--;
                    console.log(
                        index,
                        this.id,
                        `${photoName} has been unliked`
                    );

                    // localStorage.removeItem(photoLikes);
                }
            }

            // let currentPhoto = this.likes;
            // if (!localStorage.getItem(currentPhoto)) {
            //     currentPhoto++;

            //     this.liked = !this.liked;
            //     console.log(index, "liked");

            //     localStorage.setItem(currentPhoto, true);
            // }
            // if (currentPhoto.likes > 0 && localStorage.getItem(currentPhoto)) {
            //     currentPhoto--;

            //     this.liked = !this.liked;
            //     console.log(index, "unliked");

            //     localStorage.removeItem(currentPhoto);
            // }
        },
    },
};
</script>

<style scoped>
.image-item .image {
    position: relative;
    width: 100%;
    height: 200px;
    border-radius: 1rem 1rem 0 0;
    /* background: url("../assets/img/1.jpg"); */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.image-item .image .content {
    position: absolute;
    background: rgba(0, 0, 0, 0.785);
    color: #f7f7f7;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem 1rem 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: 0.5s ease-in-out;
}

.image .content p {
    max-width: 300px;
    margin: 0 auto;
}

.image-item:hover .image .content {
    opacity: 1;
}

.image-info {
    padding: 20px 25px;
}

.image-info .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* .image-info .title svg {
    width: 16px;
    height: 16px;
    color: #252525;
    margin-bottom: 4px;
} */

.image-info .title i {
    font-size: 1.25rem;
}
.image-info .title i:hover {
    cursor: pointer;
}

.image-info h2 {
    font-size: 1.7rem;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 0;
}

.image-info .publish-date {
    font-size: 0.725rem;
    font-weight: 600;
    padding: 8px 0px 20px 3px;
    color: #777;
    letter-spacing: 3px;
    text-transform: uppercase;
}

.image-info p {
    font-size: 0.9rem;
    line-height: 1.5rem;
    letter-spacing: 0.25px;
    margin-bottom: 0;
    padding-left: 3px;
    padding-right: 3px;
}
</style>