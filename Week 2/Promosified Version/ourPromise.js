console.log("---Start---");

class Promise2 {
    constructor(fn) {
        this.fn = fn;
        fn(() => {
            this.resolve();
        })
        
    }

    then(callBack) {
        this.resolve = callBack;
    }
}

// function setTimeout(fn, ms)

function readTheFile(Zala) {
    console.log("hii There");
    setTimeout(() => {
        Zala(34);
    }, 3000);
}

function setTimeOutPromisified() {
    console.log("hii");
    
    return new Promise(readTheFile);
}

let p = setTimeOutPromisified();

function call(Num) {
    console.log("hii There Completed");
    console.log(Num);
    
    
}

p.then(call);

console.log("---End---");


