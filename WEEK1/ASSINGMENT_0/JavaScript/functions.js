module.exports = generalCalculation;

function generalCalculation(pArgv) {
    let parameterAreOK = check(pArgv);
    if(!parameterAreOK){
        console.log("please check your parameters");
        return false;
    }
    switch (pArgv[0]) { //Dört işlemin tanımlanması swich case yapısı ile sağlanmıştır.
        case '+':
            return add(Number(pArgv[1]), Number(pArgv[2]));
            break;
        case '-':
            return subtruct(Number(pArgv[1]), Number(pArgv[2]));
            break;
        case 'x':
            return multiply(Number(pArgv[1]), Number(pArgv[2]));
            break;
        case '/':
            return divide(Number(pArgv[1]), Number(pArgv[2]));
            break;
        default:
            break;
    }
}

function check(pList){
    if(!(pList[0]=='x'||pList[0]=='/'||pList[0]=='+'||pList[0]=='-')){
        console.log("operand must be for div -> / mult -> x add -> + subt -> -");
        return false;
    }else if(isNaN(pList[1])||isNaN(pList[2])){
        console.log("at least one of the parameters is not a Number");
            return false;
    }else if(pList.length>3){
        console.log("the operation take place with your first two numbers");
            return true;
    }else{
        return true;
    }
}


function add(pFirst, pSecond) {
    return Number(pFirst) + Number(pSecond);
}

function subtruct(pFirst, pSecond) {
    return Number(pFirst) - Number(pSecond);
}

function multiply(pFirst, pSecond) {
    return Number(pFirst) * Number(pSecond);
}

function divide(pFirst, pSecond) {
    if(pSecond==0){
        console.log('diveder can not be 0');
        return NaN;
    }
    return Number(pFirst) / Number(pSecond);
}