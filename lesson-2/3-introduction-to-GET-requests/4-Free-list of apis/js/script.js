// kitchen()  // run the code
//     .then()    // next step
//     .then()    // next step
//     .catch()   // error caught here
//     .finally() // end of the promise [optional]



// Async / Await in JS -> try, catch
// When we're using async/await, we use this format:

//👇 Magical keyword


// async function kitchen(){

//     try{
// // Let's create a fake problem
//         await abc;
//     }

//     catch(error){
//         console.log("abc does not exist", error)
//     }

//     finally{
//         console.log("Runs code anyways")
//     }
// }

// kitchen()  // run the code

function getSomething(){
    console.log("hello i am RESPONSE from the API")
}

const result = document.querySelector(".result");

    try{
        getSomething();
        result.innerHTML = "success";
    }

    catch(error){
        console.log("abc does not exist", error);
        result.innerHTML = "Nah there is an Error!";
    }

    finally{
        console.log("Runs code anyways")
    }
    const APIurl = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=40"

const pokemonContainer = document.querySelector(".pokemons");

// async function kitchen(){

//     try{
// // Let's create a fake problem
//         await abc;
//     }

//     catch(error){
//         console.log("abc does not exist", error)
//     }
// }

// kitchen();  // run the code

async function getPokemonNames(){
    try {
        const response = await fetch(APIurl);
        const responseJSON = await response.json();
        const pokemonsData = responseJSON.results;
        for (let i = 0; i < pokemonsData.length; i++) {
            pokemonContainer.innerHTML += `<li><span>${pokemonsData[i].name}</span></li>`
        }
    }
    catch(error){
        console.log(error);
        pokemonContainer.innerHTML = `<li><span> ERROR:'(</span></li>`
    }
}

getPokemonNames();