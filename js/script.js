
const container= document.querySelector('.content-boxes')

for(let i = 1; i<=100 ; i++){
    let element= '';
    let div3=(i%3 === 0);
    let div5=(i%5 === 0);


    if(div3 && div5){
        element = 'fizzbuzz';
        element= `<div class="box box-red"> ${'fizzbuzz'}</div>`;
    }

    else if(div3){
        element = 'fizz';
        element= `<div class="box box-green"> ${'fizz'}</div>`;
    }

    else if(div5){
        element = 'buzz';
        element= `<div class="box box-orange"> ${'buzz'}</div>`;
    }

    else {
        element= i
        element= `<div class="box box-blue"> ${i}</div>`;
    }
    container.innerHTML+= element;
    console.log(element);
}