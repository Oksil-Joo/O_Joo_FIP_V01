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
       let favor = Object.keys(info);

       favor.forEach(person => {
           let panel = theTemplate.cloneNode(true),
                memberInfo = panel.firstElementChild.children;

                memberInfo[0].querySelector('img').src = `images/${info[person].biopic}`;
                memberInfo[1].textContent = info[person].name;
                memberInfo[2].textContent = info[person].role;
                memberInfo[3].textContent = info[person].nickname;

            theTeam.appendChild(panel);
       })
    }

    getData();

})();