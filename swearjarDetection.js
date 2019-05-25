const swearjar = require('swearjar');
const profanes = require('./profanes.js');

const changeWords = () => {
    var checkWords = profanes.map((word, index) => {
        if(swearjar.profane(word)){ //if word
            word = "***";
        }
        console.log(word);
    });
}

// const countUsers = () => {

// }
changeWords();