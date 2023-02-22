// symbol : 자바스크립트의 기본 타입 중 하나, es6에서 추가됨
// 용도 : 객체의 중복되지 않는 프로퍼티 키를 생성하기 위함
/* symbol값 생성 방법 : Symbol()함수를 사용
                       Symbol.for('key') : 전역 심볼 레지스트리에서 관리됨 
*/
{
    // Symbol 생성
    const s1 = Symbol();
    const s2 = Symbol();

    console.log(s1 == s2);
}

{
    // Symbol("설명(description)")
    const s1 = Symbol("name");
    const s2 = Symbol("age");

    console.log(s1 == s2);
}

{   //Symbol 생성 시 각각 유니크한 값을 가짐
    const s1 = Symbol("name");
    const s2 = Symbol("age");
    const s3 = Symbol("name");

    console.log(s1 == s2);
    console.log(s2 == s3);  //false

    console.log(s1.description);    //name
    console.log(s2.description);    //age
}

{
    const obj = {
        [Symbol("name")] : '홍길동',
        [Symbol("age")] : 30
    }

    console.log(obj);
    console.log(obj[Symbol()]);
    console.log(obj);
    obj[Symbol()] = 'A';
    console.log(obj);
    console.log(obj[Symbol("name")]);

    console.log('-------------------')
    for(let prop in obj){
        console.log(prop);
    }

    console.log(Object.keys(obj));
    console.log(Object.getOwnPropertySymbols(obj));

    for(let prop of Object.getOwnPropertySymbols(obj)){
        console.log(obj[prop]);
    }
}

{
    {
        // 일반심볼
        const name = Symbol('name');
        const name2 = Symbol('name');
        console.log(name == name2);
    }

    {   // 전역심볼
        const name = Symbol.for('name');
        const name2 = Symbol.for('name');

        console.log(name == name2);

        // 전역심볼 값으로 키를 찾는 법
        console.log(Symbol.keyFor(name));   //name
        console.log(Symbol.keyFor(name2));  //name
    }

    {
        const Direction = {
            UP :    1,
            Down :  2,
            LEFT :  3,
            RIGHT : 4
        }

        let x = Direction.UP; //1
        // x = 1;  
    }
    {   //Symbol은 특정된 값으로 대체할 수 없음(일관된 코드 작성 가능)
        const Direction = {
            UP :    Symbol('UP'),
            DOWN :  Symbol('DOWN'),
            LEFT :  Symbol('LEFT'),
            RIGHT : Symbol('RIGHT')
        }

        const x = Direction.UP; //?
        
    }
}