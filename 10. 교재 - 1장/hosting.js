// 평가 -> 실행
{   //변수의 특징
    {
        let x;  //초기값 없으면 undefined로 초기화
        console.log(x);
    }

    {   //호이스팅 : 코드 평가 시 전역변수, 전역함수를 상위로 끌어 올리는 동작
        console.log(x);
        // let x;  //호이스팅이 되지만 초기화 하지 않음
    }

    {
        var x;
        console.log(x);
    }

    {
        console.log(x);
        var x;  //호이스팅 되고 undefined로 초기화
    }
}

{
    // 함수 호이스팅   
    {   //함수 선언문
        console.log(add(10,20));

        function add(v1,v2){
            return v1+v2;
        }
    }
    
    // 함수 표현식과 화살표 함수는 호출되기 전에 초기화를 해줘야함
    {   //함수 표현식
        const add2 = function(v1,v2){
            return v1+v2;
        }   
        console.log(add2(10,20));
    }
    {   //화살표 함수
        const add2 = (v1,v2) => {
            return v1+v2;
        }
        console.log(add2(10,20));
    }
}