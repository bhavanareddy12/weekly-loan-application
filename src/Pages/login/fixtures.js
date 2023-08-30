export const loginFun = (data) => {
    const users = [{"id":1,"email":"bruno@email.com","password":"bruno"},{"id":2,"email":"techie@email.com","password":"techie"},{"id":3,"email":"nilson@email.com","password":"nilson"},{"id":4,"email":"nilson1@email.com","password":"nilson"},{"id":5,"email":"nilson2@email.com","password":"nilson"},{"id":6,"email":"nilson3@email.com","password":"nilson"},{"id":7,"email":"nilson4@email.com","password":"nilson"},{"id":8,"email":"nilson7@email.com","password":"nilson"},{"id":9,"email":"nilson8@email.com","password":"nilson"}]
    let result = users.find(x=>(x.email === data.email && x.password === data.password))
    if(result !== undefined){
        return {status:200,color:'success',message:"Congrats you are logged to admin panel"}
    }
    else{
        return {status:400,color:'danger',message:"You need to remember your username/password. Please try again"}
    }
}

