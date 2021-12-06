
export default {
    name: "TheLightboxComponent",

    props: ["piece"],

    template:
    `<section class="lightboxWrapper">
        <div class=""wrapCon>
            <div class="btAlign">
                <i @click="closeMe" class="fa fa-window-close" style="font-size:48px;color:#E96A97"></i>
            </div>
            <div>
                <img :src='"images/" + piece.bigimg' :alt="piece.name">
                <h1 class="title" > {{piece.name}} </h1>
                <h2 class="subTitle"> {{piece.role}}  </h2>
                <h2 class="lightTitle">concept</h2>
                <p class="lightContents"> {{piece.description}} </p>
                <h2 class="lightTitle">Using Software</h2>
                <p class="lightContents"> {{piece.software}} </p>
            <div>
        <div>
    </section>
    `,

    methods: {
        closeMe() {
            this.$emit("closelb");
        }
    }
}