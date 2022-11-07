<template>
    <div
        class="w-full h-screen pt-48 pb-36 flex flex-col items-center justify-between"
    >
        <div class="flex flex-col gap-6 justify-center">
            <h2 class="text-32 font-bold text-center">Antar du utmaningen?</h2>
            <p class="text-center text-20">
                Klicka på starta quiz för att börja
            </p>
        </div>
        <button
            class="text-lightblue text-24 py-2 px-4 w-48 border-2 border-lightblue rounded-full hover:bg-lightblue hover:text-white"
            @click="buttonClick"
        >
            {{ startButtonLabel }}
        </button>
    </div>
</template>

<script>
export default {
    props: {},
    data() {
        return {
            startButtonLabel: "Starta Quiz",
        };
    },
    methods: {
        buttonClick() {
            this.$emit("startPageHide");
        },
    },
};
</script>

<style></style>
