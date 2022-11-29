for(let i = 1; i<=100 ; i++){
    let element= '';
    let div3=(i%3 === 0);
    let div5=(i%5 === 0);


    if(div3 && div5){
        element = 'fizzbuzz';
    }

    else if(div3){
        element = 'fizz';
    }

    else if(div5){
        element = 'buzz';
    }

    else {
        element= i
    }

    console.log(element);
}