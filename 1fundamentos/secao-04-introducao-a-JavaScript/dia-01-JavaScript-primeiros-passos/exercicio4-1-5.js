let a = 20;
let b = 20;
let c = 140;
let sum = a+b+c;

let angulosPositivos = a>0 && b>0 && c>0

if (angulosPositivos){
    if (sum===180){
        console.log(true);
    }
    else {
        console.log(false);
    };

}
else {
    console.log("ângulo invalido");
};
