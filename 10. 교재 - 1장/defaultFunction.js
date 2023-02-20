{
    function calculatePrice(total, tax = 0.1, tip = 0.05){
    // When no value is given for tax or tip, the default 0.1 and 0.05 will be used
    console.log(total,tax,tip);
    return total + (total * tax) + (total * tip);
    }
    console.log(calculatePrice(100, 0.15));
    console.log(calculatePrice(100, undefined, 0.15));
}