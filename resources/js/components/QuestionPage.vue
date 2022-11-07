<template>
    <div
        class="w-full h-screen pt-48 pb-36 flex flex-col items-center justify-between"
    >
        <div class="flex flex-col gap-6 justify-center w-2/3">
            <h4 class="text-16 text-center text-lightblue">
                {{ questions[progress - 1]["category"] }}
            </h4>
            <h2 class="text-center text-32">
                {{ questions[progress - 1]["question"] }}
            </h2>
        </div>
        <button
            class="text-lightblue text-24 py-2 px-4 w-48 border-2 border-lightblue rounded-full hover:bg-lightblue hover:text-white"
            @click="buttonClick"
        >
            {{ questionButtonLabel }}
        </button>
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
            questionButtonLabel: "Se svaret",
        };
    },
    methods: {
        buttonClick() {
            this.$emit("questionPageHide");
        },
    },
};
</script>

<style></style>
