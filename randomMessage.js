const generateNumRandom = num =>{
    //console.log(num);
    return Math.floor(Math.random() * num);
}

//console.log(generateNumRandom(5));

const messageOfTheDay = {
    positiveVerbs : ['pray', 'meditate', 'to love', 'enjoy', 'rest'],
    timeToDoIt : ['more often', 'sometimes', 'always'],
    by : ['everyone', 'your family', 'your friends', 'yourself']
}

let arrayMessages = [];

for (let part in messageOfTheDay){

    let numIndex = generateNumRandom(messageOfTheDay[part].length);
    //console.log(numIndex);
    if (part === 'positiveVerbs'){
        arrayMessages.push(`one of the most important things is '${messageOfTheDay[part][numIndex]}'`);
    }else if(part === 'timeToDoIt'){
        arrayMessages.push(`which you should do '${messageOfTheDay[part][numIndex]}'`);
    }else if (part === 'by'){
        arrayMessages.push(`for the sake of '${messageOfTheDay[part][numIndex]}'`);
    }
}

const printMessage = array =>{

    console.log(array.join('\n'));
}


printMessage(arrayMessages);