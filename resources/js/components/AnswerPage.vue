<template>
    <div
        class="w-full h-screen pt-48 pb-36 flex flex-col items-center justify-between bg-lightblue"
        id="answer-page"
    >
        <div class="flex flex-col gap-6 justify-center">
            <h4 class="text-16 text-center text-white">Rätt svar:</h4>
            <h2 class="text-center text-40 text-green font-semibold">
                {{ questions[progress - 1]["answer"] }}
            </h2>
        </div>
        <div class="flex gap-4">
            <button
                class="text-white text-24 py-2 px-4 w-48 border-2 border-white rounded-full hover:bg-white hover:text-lightblue"
                @click="buttonClickYes"
            >
                {{ answerPageButtonYes }}
            </button>
            <button
                class="text-white text-24 py-2 px-4 w-48 border-2 border-white rounded-full hover:bg-white hover:text-lightblue"
                @click="buttonClickNo"
            >
                {{ answerPageButtonNo }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        questions: Array,
        progress: Number,
    },
    data() {
        return {
            answerPageButtonYes: "Ja",
            answerPageButtonNo: "Nej",
        };
    },
    methods: {
        buttonClickYes() {
            this.$emit("answerPageHideYes");
        },
        buttonClickNo() {
            this.$emit("answerPageHideNo");
        },
    },
};
</script>

<style></style>
