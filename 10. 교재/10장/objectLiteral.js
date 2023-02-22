{
    {
        const person = {name: '홍길동', age: 30}        ;
        console.log(person);
    }

    {
        const person = {};
        person.name = '홍길동';
        person.age = 30;
        console.log(person);
    }

    {
        const person = {};
        person['name'] = '홍길동';
        person['age'] = 30;
        console.log(person);
    }
    {
        const name = 'name' + 1;
        const person = {};
        person[name] = '홍길동';
        person['age'] = 30;
        console.log(person);
    }

    {
        const name = '홍길동';
        const age = 30;
        // 변수명 => 프로퍼티 키, 변수값 => 프로퍼티 값
        const person = {name, age}; // es6 { name: '홍길동', age: 30 }
        console.log(person);
    }

    {
        // es5
        const person = {
            name : '홍길동',
            age : 30,
            smile: function(){ console.log('웃다') },
            eat: function(){ console.log('먹다') }
        }
        console.log(person.name);
        console.log(person.age);

        person.name = '홍길순';
        person['age'] = 20;
        console.log(person.name);
        console.log(person.age);

        person.smile();
        person.eat();
    }

    {   //es6
        const person = {
            name : '홍길동',
            age : 30,
            smile(){ console.log('웃다') },
            eat(){ console.log('먹다') }
        }
        person.smile();
        person.eat();
    }

    
}