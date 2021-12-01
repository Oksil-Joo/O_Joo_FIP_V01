
export default {
    name: "TheLightboxComponent",

    props: ["piece"],

    template:
    `<section class="lightboxWrapper">
        <div>
            <h1 class="title"> {{piece.name}} </h1>
            <h2> All-Inclusive Price  </h2>
            <p> {{piece.price}} </p>
            <h2> INTERIOR </h2>
            <p> {{piece.interior}} </p>
            <h2> EXTERIOR </h2>
            <p> {{piece.exterior}} </p>
            <h2> FUEL-EFFICIENCY </h2>
            <p> {{piece.fuel}} </p>
        <div>
    </section>
    `
}