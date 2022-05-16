let shout = (string) => {
    return string.toUpperCase();  
}

shout('hello');

let whisper = (string) => {
    return string.toLowerCase();
}

let logShout = (string) => {
    console.log(string.toUpperCase());
}

let logWhisper = (string) => {
    console.log(string.toLowerCase());
}

let sayHiToHeadphonedRoommate = (string) => {
    if(string === string.toLowerCase()){
        return 'I can\'t hear you!';
    } else if(string === string.toUpperCase()){
        return 'YES INDEED!';
    } else if(string === 'Let\'s have dinner together!'){
        return 'I would love to!';
    }
}