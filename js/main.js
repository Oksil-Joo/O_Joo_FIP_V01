import{ getData } from "./components/TheDataMiner.js";
import TheThumbNail from "./components/TheThumbNail.js";

(() => {
    const   thePortfolio = document.querySelector("#portfolio-lists"),
            theTemplate = document.querySelector("#work-template").content;
    
            function getData() {
                fetch("./data.json")
                .then(res => res.json()) //unpach the API
                .then(data => {
                    console.table(data);
                
                    buildPorFt(data);
                })
                .catch(error => console.error(error));
            }
        
            function buildPorFt(info) {
                let port = Object.keys(info);
         
                port.forEach(work => {
                    let panel = theTemplate.cloneNode(true),
                         memberInfo = panel.firstElementChild.children;
         
                         memberInfo[0].querySelector('img').src = `images/${info[work].workpic}`;
                         memberInfo[1].textContent = info[work].name;
                         memberInfo[2].textContent = info[work].role;
                         memberInfo[3].textContent = info[work].dec;
         
                     thePortfolio.appendChild(panel);
                })
             }

    // const myVue = new Vue({
    //     created: function() {
    //         // go fetch the portfolio data here
    //         getData(null, (data) => this.portfolioData = data )
    //     },

    //     data: {
    //         // this is storing the database info from our fetch call
    //         portfolioData: [],
    //         message: "hello from Vue"
    //     },

    //     methods: {

    //     },

    //     components: {
    //         thumb: TheThumbNail
    //     }
    // }).$mount("#app");   
    

    // function getMoreData(event) {
    //     if (event.target.closet("section").dataset.key) {
    //         let key = event.target.closest("section").dataset.key;

    //         getData({id: key}, function(data){
    //             donsole.log(data);
    //         });
            
   
    //     }
    // }
    // theTeam.addEventListener("click", getMoreData);
    // getData(null, buildTeam);
    getData(buildPorFt);
})()
