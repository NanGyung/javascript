const peoples = [{
	name: 'Alberto',
	age: 27
},{
	name: 'Caroline',
	age: 27
},{
	name: 'Josh',
	age: 31
}];

// 이름만 추출하여 배열로 반환하는 함수를 구현하시오
// 반환값 [ 'Alberto', 'Caroline', 'Josh' ]
// {   //case1) 일반for문
//     function f(person){
//         const people = [];
//         for(let i = 0; i < person.length; i++){
//             people[i] = person[i].name;
//         }
//         return people;
//     }
//    const result = f(peoples);
//    console.log(result);
// }
{
    //해설
    function f(arrs){
        const result = [];
        for(let i = 0; i < arrs.length; i++){
            result.push(arrs[i]['name']);
        }
        return result;
    }
    const result = f(peoples);
    console.log(result);
}

// {   //case2) for~of문
//     function f(person){
//         const people = [];
//         for(let ele of person){
//             people.push(ele.name);
//         }
//         return people;
//     }
    
//    const result = f(peoples);
//    console.log(result);
// }
{   //해설 
    function f(arrs){
        const result = [];
        for( let people of arrs){
            // people.['name']
            // people.name
            result.push(people['name']);
        }
        return result;
    }
    const result = f(peoples);
    console.log(result);
}

// {   //case3) 배열의 고차함수 : map, filter, reduce, foreach
//     function f(person){
//         const result = person.map(e => e.name);
//         return result;
//     }
//    const result = f(peoples);
//    console.log(result);
// }
{   //해설
    function f(arrs){
        const output  = arrs.map(ele => ele['name']);
        return output;
    }

    const result = f(peoples);
    console.log(result);
}
{   //해설2
    function f(arrs){
        const result = [];
        arrs.forEach(ele=> result.push(ele['name']));
        return result;
    }
    const result = f(peoples);
    console.log(result);
}
{
    const f = arrs => {
        const result = [];
        arrs.forEach(ele=> result.push(ele['name']));
        return result;
    }
    const result = f(peoples);
    console.log(result);
}
