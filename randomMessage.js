//function that generates a random number between zero and the number passed as an argument.
const generateNumRandom = num =>{
    return Math.floor(Math.random() * num);
}

//objet containing the words of the message.

const messageOfTheDay = {
    positiveVerbs : ['pray', 'meditate', 'to love', 'enjoy', 'rest'],
    timeToDoIt : ['more often', 'sometimes', 'always'],
    by : ['everyone', 'your family', 'your friends', 'yourself']
}

let arrayMessages = [];


//loop to generate the random messages.
for (let part in messageOfTheDay){

    let numIndex = generateNumRandom(messageOfTheDay[part].length);
    if (part === 'positiveVerbs'){
        arrayMessages.push(`one of the most important things is '${messageOfTheDay[part][numIndex]}'`);
    }else if(part === 'timeToDoIt'){
        arrayMessages.push(`which you should do '${messageOfTheDay[part][numIndex]}'`);
    }else if (part === 'by'){
        arrayMessages.push(`for the sake of '${messageOfTheDay[part][numIndex]}'`);
    }
}

//function that print the message.
const printMessage = array =>{

    console.log(array.join('\n'));
}


printMessage(arrayMessages);
