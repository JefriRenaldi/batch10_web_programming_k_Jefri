function helloName(params){
    if (params == "jefri"){
        return 'Hello ${params}';
    } else {
        return 'Anda bukan jefri';
    }
}

console.log(helloName("jefri"));