import{ getData } from "./components/TheDataMiner.js";
import TheThumbNail from "./components/TheThumbNail.js";

(() => {
    const   theTeam = document.querySelector("#team-members"),
            theTemplate = document.querySelector("#bio-template").content;
    
            function getData() {
                fetch("./data.json")
                .then(res => res.json()) //unpach the API
                .then(data => {
                    console.table(data);
                
                    buildTeam(data);
                })
                .catch(error => console.error(error));
            }
        
            function buildTeam(info) {
                let team = Object.keys(info);
         
                team.forEach(person => {
                    let panel = theTemplate.cloneNode(true),
                         memberInfo = panel.firstElementChild.children;
         
                         memberInfo[0].querySelector('img').src = `images/${info[person].biopic}`;
                         memberInfo[1].textContent = info[person].name;
                         memberInfo[2].textContent = info[person].role;
                         memberInfo[3].textContent = info[person].nickname;
         
                     theTeam.appendChild(panel);
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
    getData(buildTeam);
})()
