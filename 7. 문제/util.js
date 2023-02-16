const calculator = data => {
    let result = null;
    switch(data.operator){
        case '+' : 
            result = data.op1 + data.op2;
            break;
        case '-' : 
            result = data.op1 - data.op2; 
            break;
        case '*' : 
            result = data.op1 * data.op2; 
            break;
        case '/' : 
            result = data.op1 / data.op2; 
            break;
    }
        return result;
}