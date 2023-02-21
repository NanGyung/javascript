{
    //Map vs 객체리터럴 차이점
    // 1. Map : 이터러블 객체, 객체를 key로 가질 수 있다
    // 2. 객체 리터럴 : 이터러블 객체 x , 문자열, Symbol만 key로 가질 수 있다
    // 3. Map은 유틸리티 메소드를 사용할 수 있다  

    // 생성
    // case1)
    const map = new Map();

    // case2)
    const map2 = new Map([['student','학생'],['teacher','교사'],['chair','의자']]);
    console.log(map2);

    // case3)
    const dic = [['student','학생'],['teacher','교사'],['chair','의자']];
    const map3 = new Map(dic);
    console.log(map3);

    console.log('----------------------------------------------------------');
    
    // 요소추가
    map.set('student','학생');
    map.set('teacher','교사');
    console.log(map);
    map.set('teacher','교사');
    console.log(map);
    map.set('chair','의자');
    console.log(map);

    // 요소수 갯수
    console.log(map.size);

    // 요소 조회
    const value = map.get('student');
    console.log(value);

    // 요소 존재 유무 by key
    const isExist = map.has('student');
    console.log(isExist);
    
    // 요소 삭제
    map.delete('chair');
    console.log(map);

    // 요소 조회
    // 1) keys
    console.log(map.keys());
    for(let key of map.keys()){
        console.log(key);
    }
    // 2) values
    console.log(map.values());
    for(let value of map.values()){
        console.log(value);
    }
    // 3) entries
    console.log(map.entries());
    for(let entry of map.entries()){
        console.log(entry);
    }

    // 전체 요소 삭제
    map.clear();
    console.log(map);
}