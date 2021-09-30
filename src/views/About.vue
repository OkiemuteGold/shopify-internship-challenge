<template>
    <div class="about">
        <div class="px-3 py-5 px-md-5 bg-light rounded-3 jumbotron">
            <div class="intro container px-0 px-md-3 px-lg-5 py-2 py-md-3">
                <h1 class="display-5 fw-bold">This is an about page</h1>

                <p>
                    Shopify Internship Challenge to build an application with
                    React js, that fetches data from the NASA free API. User
                    should be able to like images. I replicated this in Vue js.
                </p>
            </div>
        </div>
    </div>
</template>

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
