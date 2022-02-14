const url = "https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json";

const resultsContainer = document.querySelector(".results")

async function getTeams () {
    try {
        const response = await fetch(url);
        const responseJSON = await response.json();
        console.log(responseJSON);
        const teams = responseJSON;

        resultsContainer.innerHTML = "";

        for (let i = 0; i < teams.length; i++){
            if (i === 15) {
                break;
            }
            const teamName = teams[i].teamName;
            const city = teams[i].location;

            if (teamName.startsWith("c") || teamName.startsWith("C")) {
                continue;
            }
            resultsContainer.innerHTML += `<div class="card">
                                           <h4>${teamName}</h4>
                                           <p>${city}</p>
                                          </div>`;
        }
    }catch (error) {
        console.log(error);
        resultsContainer.innerHTML = message("error", error)
    }
}
getTeams();