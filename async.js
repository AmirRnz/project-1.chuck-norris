const loadJoke = async () => {
    try{
        const chuckNorrisFetch = await fetch('https://api.chucknorris.io/jokes/random',{
            headers: {
                Accept: "application/json"
            }
        });
        console.log(chuckNorrisFetch)
        const jokeData = await chuckNorrisFetch.json();
        console.log("data saved:"+ jokeData) // [object object]
        console.log("data saved:", jokeData);
        console.log("stringify:" + JSON.stringify(jokeData))

        document.getElementById('loadingJoke').innerHTML = jokeData.value
    }
    catch(error){
        console.log(error)
    }

}

document.getElementById('loadJokeBtn').addEventListener("click", loadJoke);