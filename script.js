console.log("First portfolio Project")
console.log("---------------------")


const arrays = {
    first: ["Cliff", "Bob", "Jeff", "Steve", "Larry", "Kyle", "Jack", "Alan", "Carl" ],
    middle: ["king of", "master of", "demon of", "ruler of", "knight of", "angel of"],
    end: ["Evil", "Doom", "Hell", "Great", "Fire", "Water", "Wind", "Earth", "Sun" ]
}

const randomIndex = arr => Math.floor(Math.random() * arr.length)

console.log(arrays.first[randomIndex(arrays.first)] + " " + arrays.middle[randomIndex(arrays.middle)] + " " + arrays.end[randomIndex(arrays.end)] + "!")
console.log("---------------------")