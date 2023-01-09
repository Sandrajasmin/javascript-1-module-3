const URL = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=6cb543d9bd3f46d1832d05155c841a57";

const factsContainer = document.querySelector(".my-cats-facts");

fetch(URL)
    .then((Response) => Response.json())
    .then((data) => {
        console.log(data);
        console.log(data.data);
        factsContainer.innerHTML = "";
        const myCatFactsArr = data.data;
        for (let i = 0; i < myCatFactsArr.length; i++) {
            console.log(myCatFactsArr[i].name);
            if (i === 4) {
                break;
            }
            factsContainer.innerHTML += `<li>${myCatFactsArr[i].fact}</li>`
        }
    })

    .catch((error) => {
        //console.log(error);
    })


    /*
    Loop through the results and display the following properties in 
    HTML, but only for the first eight results: name rating number of 
    tags (not the tag details, just the amount of tags) 
    The styling for this assignment is not important but loading 
    indicator should be displayed while the API call is in progress.
    */