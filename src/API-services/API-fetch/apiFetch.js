const apiKey = '0bb3c776352a48b9a0a4fb7ad3821b6c'
const url = `https://api.rawg.io/api/platforms?key=${apiKey}`
const testUrl = `https://rawg.io/api/games?key=${apiKey}`


export default function getData(){

    return fetch(testUrl)
        .then(res => res.json())
        .then(res => res.results)
        

}



