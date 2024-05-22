const user = {
    username: "Pavitra",
    price: 199,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Sagar"
// user.welcomeMessage()

// function chai(){
//     let username = "Pavitra"
//     console.log(this.username)

// }

// const chai = () => {
//     let username = "pavitra"
//     console.log(this);
// }

const chai = function (){
    let username = "pavitra"
    console.log(this);
}

chai()