import TheVideoComponent from "./TheVideoComponent.js";


export default {
    name: "TheLightboxComponent",

    props: ["piece"],

    computed: {
        activeComponent: function() {
            return `${this.piece.mediaType + "Component"}`;
        }
    },

    template:
    `<section class="lightboxWrapper">

        <div class="btAlign">
            <i @click="closeMe" class="fa fa-window-close" style="font-size:48px;color:#E96A97"></i>
        </div>
        <div class="wrapCon">
            <div class="dataImg">
                <img :src='"images/" + piece.bigImg' :alt="piece.name">
                <component v-if="piece.mediaType" :is="activeComponent"></component>
            </div>
            <div class="wrapDes">
                <h1 class="title" > {{piece.name}} </h1>
                <h2 class="subTitle"> {{piece.role}}  </h2>
                <h2 class="lightTitle">concept</h2>
                <p class="lightContents"> {{piece.description}} </p>
                <h2 class="lightTitle">Using Software</h2>
                <p class="lightContents"> {{piece.software}} </p>
            </div>
        <div>
    </section>
    `,

    methods: {
        closeMe() {
            this.$emit("closelb");
        }
    },

    components: {
        videoComponent: TheVideoComponent
    }
}