import { getData } from "./components/TheDataMiner.js";
import TheThumbnailComponent from "./components/TheThumbNail.js";
import TheLightboxComponent from "./components/TheLightboxComponent.js";

(() => {

    const myVue = new Vue({
        created: function() {
            
            getData(null, (data) => this.newProfData = data);
        },

        data: {
            newProfData: [],
            message: "hello from Vue",
            isVisible: false,
            currentNewItem: {}
        },

        methods: {
            popLightBox(item) {
                this.currentNewItem = item;
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
    getData(null, buildPorFt);
})()
