<template>
    <div>
        <div class="card">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>
        <br /><br />
        <div ref="infinitescrolltrigger" class="scroll-trigger text-center">
            <span
                class="spinner-grow spinner-grow-md"
                role="status"
                v-if="isBussy"
                aria-hidden="true"
            ></span>
        </div>
    </div>
</template>

<script>
// import PageHeader from "@/components/header/PageHeader";
// import Footer from "../components/footer/Footer";
import "@/mixins";
import { mapActions, mapGetters } from "vuex";
export default {
    props: ["isSearching"],
    components: {
        // PageHeader,
        // Footer,
    },
    computed: {
        ...mapGetters(["AllgroupCompanies", "allNotes"]),

        allUsers: {
            get() {
                return this.$store.state.allUsers;
            },

            set(value) {
                return (this.$store.state.allUsers = value);
            },
        },

        maxPerpage: {
            get() {
                return this.$store.state.noteMaxPerpage;
            },

            set(value) {
                return (this.$store.state.noteMaxPerpage = value);
            },
        },
        currentPage: {
            get() {
                return this.$store.state.noteCurrentPage;
            },

            set(value) {
                return (this.$store.state.noteCurrentPage = value);
            },
        },
        noteTotalResults: {
            get() {
                return this.$store.state.noteTotalResults;
            },

            set(value) {
                return (this.$store.state.noteTotalResults = value);
            },
        },
        noteTotalPages: {
            get() {
                return this.$store.state.noteTotalPages;
            },

            set(value) {
                return (this.$store.state.noteTotalPages = value);
            },
        },

        totalResult() {
            return this.allNotes.length;
        },

        pageCount() {
            return Math.ceil(this.totalResult / this.maxPerpage);
        },
    },

    data() {
        return {
            isBussy: false,
            totalPages: 2,
            totalNoteResult: 100,
        };
    },

    methods: {
        ...mapActions([
            "getCustomerMetricsSSO",
            "setAllgroupCompanies",
            "saveAllUsers",
            "saveNotes",
            "fetchMoreNotes",
            "setCurrentClickedItem",
        ]),

        scrollTrigger: function () {
            // if (!this.isSearching) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (
                        entry.intersectionRatio > 0 &&
                        this.currentPage < this.noteTotalPages
                        // this.allNotes.length > 0 &&
                        // this.totalNoteResult < this.allNotes.length
                    ) {
                        this.isBussy = true;
                        this.currentPage += 1;
                        // this.maxPerpage = this.maxPerpage * this.currentPage;
                        this.fetchMoreNote();
                        // console.log("is here");
                    }
                });
            });

            observer.observe(this.$refs.infinitescrolltrigger);
            // }
        },

        fetchMoreNote: function () {
            let payload = {
                userCode: this.user.code,
                pageSize: this.maxPerpage,
                pageNumber: this.currentPage,
            };

            // console.log(payload);

            this.fetchMoreNotes(payload).then((response) => {
                this.isBussy = false;
                // console.log(response.data.data);
                if (response.data.success) {
                    this.noteTotalPages = response.data.data.totalPages;
                    this.noteTotalResults = response.data.data.totalRecords;

                    this.saveNotes(response.data.data.data);
                }
            });

            // setTimeout(() => {
            //   this.allUsers = this.allStaffs.slice(0, this.maxPerpage);
            //   this.isBussy = false;
            // }, 900);
        },
    },

    mounted() {
        this.scrollTrigger();
    },
};
</script>
<style scoped></style>