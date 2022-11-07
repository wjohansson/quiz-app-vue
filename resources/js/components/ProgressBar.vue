<template>
    <div class="absolute px-8 bottom-8 tablet:px-48 w-screen">
        <div
            class="w-full h-[2px] relative bg-lightblue rounded-full flex align-center"
            :class="backgroundLine"
        >
            <div
                class="h-[14px] absolute -mt-[6px] rounded-full bg-darkblue"
                :style="progressWidth"
                :class="backgroundProgress"
            ></div>
        </div>
        <h4 class="w-full text-center mt-4" :class="text">
            Fråga {{ progress }} av {{ totalQuestions }}
        </h4>
    </div>
</template>

<script>
export default {
    props: {
        progress: Number,
        totalQuestions: Number,
        progressWidth: String,
        backgroundLine: String,
        backgroundProgress: String,
        text: String,
    },
    data() {
        return {};
    },
};
</script>

<style></style>
