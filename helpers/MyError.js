class MyError extends Error{
    constructor(message,code,type){
        super(message)
        this.code=code,
        this.type=type
    }
}

module.exports=MyError