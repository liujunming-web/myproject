function greeter(person:string){
    return "Hello, " + person
}

let user = "Jane User11";

console.log(greeter(user))

class Log {
    print (msg:string) {
        console.log(msg)
    }
}

const dec = (target,property:string) => {
    const old = target.prototype[property]
    target.prototype[property] = (msg:string)=> {
        msg = `{${msg}}`
        old(msg)
    }
}


dec(Log,'print')
dec(Log,'print')
dec(Log,'print')

const log = new Log();
log.print('123')