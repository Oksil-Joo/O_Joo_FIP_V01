import { getData } from "./components/TheDataMiner.js";
import TheThumbnailComponent from "./components/TheThumbNail.js";
import TheLightboxComponent from "./components/TheLightboxComponent.js";

(() => {

    
    let button = document.querySelector("#button");
    let burgerCon = document.querySelector("#burgerCon");

    const myVue = new Vue({
        created: function() {
            
            getData(null, (data) => this.carData = data);
        },

        data: {
            carData: [],
            message: "hello from Vue",
            isVisible: false,
            currentCarItem: {}
        },

        methods: {
            popLightBox(item) {
                this.currentCarItem = item;
                this.isVisible = true;
            }
        },

        components: {
            thumb: TheThumbnailComponent,
            lightbox: TheLightboxComponent
        }
    }).$mount("#app"); 
    

    function getMoreData(event) {
        if (event.target.closet("template").dataset.key) {
            let key = event.target.closest("template").dataset.key;

            getData({id: key}, function(data){
                donsole.log(data);
            });
            
   
        }
    }

    button.addEventListener("click", hamburgerMenu);

    getData(null, buildPorFt);
})()
