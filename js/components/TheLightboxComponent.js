
export default {
    name: "TheLightboxComponent",

    props: ["piece"],

    template:
    `<section class="lightboxWrapper">
        <div>
            <h1 class="title"> {{piece.name}} </h1>
            <h2> {{piece.role}}  </h2>
            <p> {{piece.description}} </p>
        <div>
    </section>
    `
}