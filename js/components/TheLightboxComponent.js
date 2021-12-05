
export default {
    name: "TheLightboxComponent",

    props: ["piece"],

    template:
    `<section class="lightboxWrapper">
        <div>
            <i @click="closeMe" class="fa fa-window-close" style="font-size:48px;color:#E96A97"></i>
            <h1 class="title" > {{piece.name}} </h1>
            <h2 class="subTitle" > {{piece.role}}  </h2>
            <p class="lightContents" > {{piece.description}} </p>
        <div>
    </section>
    `,

    methods: {
        closeMe() {
            this.$emit("closelb");
        }
    }
}