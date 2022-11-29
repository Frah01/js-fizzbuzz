
const container= document.querySelector('.content-boxes')

for(let i = 1; i<=100 ; i++){
    let element= '';
    let div3=(i%3 === 0);
    let div5=(i%5 === 0);


    if(div3 && div5){
        element= `<div class="box box-red">fizzbuzz</div>`;
        console.log('fizzbuzz')
    }

    else if(div3){
        element= `<div class="box box-green">fizz</div>`;
        console.log('fizz')
    }

    else if(div5){
        element= `<div class="box box-orange">buzz</div>`;
        console.log('buzz')
    }

    else {
        element= `<div class="box box-blue">${i}</div>`;
        console.log(i)
    }
    container.innerHTML+= element;
}
