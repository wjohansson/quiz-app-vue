<template>
    <nav
        class="w-full flex justify-center absolute mt-4"
        :class="text"
        id="logo"
    >
        <h1 class="text-48 font-bold">{{ logo }}</h1>
    </nav>
    <start-page
        v-if="displayStart"
        @start-page-hide="startPageHide"
    ></start-page>
    <question-page
        v-if="displayQuestion"
        @question-page-hide="questionPageHide"
        :questions="questions"
        :progress="progress"
    ></question-page>
    <answer-page
        v-if="displayAnswer"
        @answer-page-hide-yes="answerPageHideYes"
        @answer-page-hide-no="answerPageHideNo"
        :questions="questions"
        :progress="progress"
    ></answer-page>
    <result-page
        v-if="displayResult"
        @result-page-hide="resultPageHide"
        :correct="correct"
        :totalQuestions="totalQuestions"
        :correctCategory="correctCategory"
    ></result-page>
    <progress-bar
        v-if="displayProgress"
        :progress="progress"
        :totalQuestions="totalQuestions"
        :progressWidth="progressWidth"
        :text="text"
        :backgroundLine="backgroundLine"
        :backgroundProgress="backgroundProgress"
    ></progress-bar>
    <blobs :displayAnswer="displayAnswer"></blobs>
</template>

<script>
import StartPage from "./components/StartPage.vue";
import QuestionPage from "./components/QuestionPage.vue";
import AnswerPage from "./components/AnswerPage.vue";
import ResultPage from "./components/ResultPage.vue";
import ProgressBar from "./components/ProgressBar.vue";
import Blobs from "./components/Blobs.vue";

export default {
    components: {
        StartPage,
        QuestionPage,
        AnswerPage,
        ResultPage,
        ProgressBar,
        Blobs,
    },
    data() {
        return {
            logo: "quiz",
            displayStart: true,
            displayQuestion: false,
            displayAnswer: false,
            displayResult: false,
            displayProgress: false,
            questions: 0,
            totalQuestions: 0,
            progress: 0,
            correct: 0,
            correctCategory: {},
            category: 0,
            progressWidth: "",
            text: "text-darkblue",
            backgroundLine: "bg-lightblue",
            backgroundProgress: "bg-darkblue",
        };
    },
    methods: {
        startPageHide() {
            axios.get("/questions").then((response) => {
                this.questions = response.data;
                this.displayStart = !this.displayStart;
                this.displayQuestion = !this.displayQuestion;
                this.displayProgress = !this.displayProgress;
                this.totalQuestions = this.questions.length;
                this.progress = 0;
                this.correct = 0;
                this.correctCategory = {"Film & TV": 0, "Geografi": 0, "Historia": 0, "Musik": 0, "Övrigt": 0, "Vetenskap": 0, "Sport": 0}
                this.progress++;
                this.progressWidth =
                    "width: " +
                    (this.progress / this.totalQuestions) * 100 +
                    "%";
            });
        },
        questionPageHide() {
            this.displayQuestion = !this.displayQuestion;
            this.displayAnswer = !this.displayAnswer;
            this.text = "text-white";
            this.backgroundLine = "bg-white";
            this.backgroundProgress = "bg-white";
        },
        answerPageHideYes() {
            this.displayAnswer = !this.displayAnswer;

            this.correct++;
            this.category = this.questions[this.progress - 1]['category']
            this.correctCategory[this.category]++;
            this.progress++;
            this.progressWidth =
                "width: " + (this.progress / this.totalQuestions) * 100 + "%";
            this.text = "text-darkblue";
            this.backgroundLine = "bg-lightblue";
            this.backgroundProgress = "bg-darkblue";
            if (this.progress > this.totalQuestions) {
                this.displayResult = !this.displayResult;
                this.displayProgress = !this.displayProgress;
                return;
            }
            this.displayQuestion = !this.displayQuestion;
        },
        answerPageHideNo() {
            this.displayAnswer = !this.displayAnswer;
            this.progress++;
            this.progressWidth =
                "width: " + (this.progress / this.totalQuestions) * 100 + "%;";
            this.text = "text-darkblue";
            this.backgroundLine = "bg-lightblue";
            this.backgroundProgress = "bg-darkblue";
            if (this.progress > this.totalQuestions) {
                this.displayResult = !this.displayResult;
                this.displayProgress = !this.displayProgress;
                return;
            }
            this.displayQuestion = !this.displayQuestion;
        },
        resultPageHide() {
            this.displayResult = !this.displayResult;
            this.displayStart = !this.displayStart;
        },
    },
};
</script>
