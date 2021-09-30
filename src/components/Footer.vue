<template>
    <div id="footer" class="border-top">
        <footer class="container py-3">
            &copy; <span id="footer_year">2021</span>
            <a href="https://github.com/OkiemuteGold" target="_blank"
                >OkiemuteGold</a
            >
        </footer>
    </div>
</template>

<script>
export default {
    methods: {
        getCurrentYear: function () {
            let footerYear = document.getElementById("footer_year");
            let fullyear;
            let date = new Date();
            let currentYear = date.getFullYear();
            currentYear > 2021
                ? (fullyear = `2021 - ${currentYear}`)
                : (fullyear = currentYear);
            return (footerYear.innerHTML = fullyear);
        },
    },
    mounted() {
        this.getCurrentYear();
    },
};
</script>

<style scoped>
#footer {
    position: relative;
    bottom: 0;
    right: 0;
    left: 0;
}

footer {
    font-size: 0.75rem;
    color: #777;
    letter-spacing: 2px;
}
</style>