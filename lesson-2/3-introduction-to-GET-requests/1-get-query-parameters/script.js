

//EXAMPLE 1

//catfact.ninja

const URL = "https://catfact.ninja/facts";

const factsContainer = document.querySelector(".my-cats-facts");

fetch(URL)
    .then((Response) => Response.json())
    .then((data) => {
        console.log(data);
        console.log(data.data);
        factsContainer.innerHTML= "";
        const myCatFactsArr = data.data;
        for (let i = 0; i < myCatFactsArr.length; i++) {
            console.log(myCatFactsArr[i].fact);
            if (i ===  4) {
                break;
            }
            factsContainer.innerHTML += `<li>${myCatFactsArr[i].fact}</li>`
        }
    })

    .catch((error) => {
        console.log(error);
    })