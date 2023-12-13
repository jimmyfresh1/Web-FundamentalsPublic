var user1 = {
    "name": "Bob",
    "occupation":"scientist",
    "age":56,   
    "sayHi":function(){
        console.log(this.name, "says hi")
    }
}

user1.sayHi()