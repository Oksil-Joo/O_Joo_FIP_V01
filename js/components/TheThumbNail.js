export default {
    name: "TheThumbnailComponent",
    
    props: ["piece"],

    template: `
    <div class="carPanel">
        <div>
            <img :src='"images/" + piece.carpic' :alt="piece.name">
            <p><button @click="showmydata"> Go to {{piece.name}} </button></p>
        </div>  

    </div>
     `,
     methods: {
         showmydata() {
             this.$emit("showdata", this.piece);
         }
     }
}