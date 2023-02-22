// promise
{
    const p = new Promise((s,f)=>{
        // 1. 비동기 처리   
        // 2. 비동기 처리결과
        if(성공) {
            s(성공값);
        }else{
            f(실패값);
        }
    });
    p
}