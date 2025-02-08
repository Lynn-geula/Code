function capital(str){
    let words = str.split("");
    for(let i = 0; i<words.lenggth;i++){
        words[i] =words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();

    }
    return words.join("")

}
console.log(capital("chennai city center"));
