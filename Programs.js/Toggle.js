// function toggle(str){
//     let result = "";
//     for(let i =0 ; i<str.length;i++){
//         let char = str[i]
//         if(char===char.toUpperCase()){
//             result = result+char.toLowerCase();
//         }
//         else{
//             result = result + char.toUpperCase();
//         }
//     }
//     return result;
//     }
//     console.log(toggle("Hi Hello"));
     

























function toggle(str){
    let result = "";
    for(let i = 0 ;i<str.length;i++){
        let char = str[i]
        if(char === char.toLowerCase()){
            result = result+char.toUpperCase();
        }
        else{
            result = result+char.toLowerCase();
        }
    }
    return result
}
console.log(toggle("Hi HeLo I am lYNNEA"));
