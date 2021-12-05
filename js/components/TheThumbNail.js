
export default {
    name: "TheThumbnailComponent",

    props: ["piece"],

    template: `
    <div @click="showmydata" class="workTemplate">
            <img :src='"images/" + piece.work' :alt="piece.name">
   </div>
     `,
     methods: {
         showmydata() {
             this.$emit("showdata", this.piece);
         }
     }
}