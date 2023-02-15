{
    // 함수선언문의 이름이 동일하면 재정의 됨
    function sum(v1=1,v2=2){    //매개변수 디폴트값 지정
        let result = null;
        result = v1 + v2;
        return result;
    }

    // function sum(v1){};
    // function sum(){};    
    //함수이름이 같으면 제일 마지막에 정의한 함수로 재정의 됨(오버로딩x)
    // 오류x : undefined

    //매개변수를 주지 않아도 디폴트값으로 계산
    const result = sum();   
    console.log(result);
    
    const result2 = sum(10);
    console.log(result2);

    const result3 = sum(10,20);
    console.log(result3);

}
{
    //  IIFE(Immediately-Involked-Function-Excution): 즉시실행함수
    // (함수)() or (함수())
    // 함수를 정의하고 즉시 실행하고자 할때 사용하는 문법

    // case1)
    {
        const result = (function sum(v1,v2){
                            return v1+v2;
                        })(10,20);
        console.log(`result = ${result}`);
    }
    
    // case2)
    {
        const result = (function sum(v1,v2){
                            return v1+v2;
                        }(10,20));
        console.log(`result = ${result}`);
    }

    // case3) 화살표 함수: 함수명, return문 생략(실행문이 하나일 때)
    {   
        const result = ( (v1,v2) => v1+v2 )(10,20);
        console.log(`result = ${result}`);
    }
    
}