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
            },

            closeLightBox() {
                this.isVisible = false;
            }
        },
    
    components: {
        thumb: TheThumbnailComponent,
        lightbox: TheLightboxComponent
    }

    }).$mount("#app"); 
    
})()
