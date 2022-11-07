<template>
    <div
        class="w-full h-screen pt-48 pb-36 flex flex-col items-center justify-between"
    >
        <div class="flex flex-col gap-6 justify-center">
            <h4 class="text-16 text-center font-semibold">Ditt resultat:</h4>
            <h2 class="text-center text-40 font-semibold">
                {{ correct }} av {{ totalQuestions }} rätt
            </h2>
        </div>
        <div ref="blobContainer" class="flex gap-2">
            <div
                class="w-24 flex flex-col gap-4 items-center"
                v-for="category in categories"
                :key="category"
            >
                <ul :ref="category" class="flex flex-col-reverse gap-2 justify-start">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <slot></slot>
                </ul>
                <h3 class="font-semibold text-14 text-black">{{ category }}</h3>
            </div>
        </div>
        <button
            class="text-lightblue text-24 py-2 px-4 w-48 border-2 border-lightblue rounded-full hover:bg-lightblue hover:text-white"
            @click="buttonClick"
        >
            {{ resultButtonLabel }}
        </button>
    </div>
</template>

<script>

export default {
    props: {
        correct: Number,
        totalQuestions: Number,
        correctCategory: Object,
    },
    data() {
        return {
            categories: [
                "Film & TV",
                "Geografi",
                "Historia",
                "Musik",
                "Övrigt",
                "Vetenskap",
                "Sport",
            ],
            resultButtonLabel: "Kör igen!",
            blobs: [],
            currentCategoryBlobs: null,
            colorBlobs: null,
        };
    },
    methods: {
        buttonClick() {
            this.$emit("resultPageHide");
        },
    },
    mounted() {
        this.blobs = Object.values(this.$refs.blobContainer.querySelectorAll("li"))
        console.log(this.blobs)

        for (var key in this.correctCategory) {
            this.currentCategoryBlobs = this.blobs.splice(0, 5)
            this.colorBlobs = this.currentCategoryBlobs.splice(0, this.correctCategory[key])
            
            for (var key in this.colorBlobs) {
                this.colorBlobs[key].style.background = "#00FFC4"
            }
        }
    }
};
</script>

<style scoped>
li {
    width: 40px;
    height: 30px;
    background: #eeeeee;
    border-radius: 1000px;
}
</style>
