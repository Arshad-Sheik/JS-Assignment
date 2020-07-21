class User {
    constructor(name, age, email) {
         this.name = name;
         this.age = age;
         this.email = email;
         this.luCoins = 0;
         this.courses =[];
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout() {
        console.log(`${this.name} has logged out`);
        return this;
    }
    getDetails() {
        console.log(`Name is ${this.name}\nEmail is ${this.email}`);
        return this;
    }
}

class Moderator extends User {
    
    addcoins(users, coin) {
        // this.luCoins++;
        users.luCoins += coin;
        console.log(`Moderator ${this.name} added ${coin} coins to user ${users.name}`);
        console.log(`${users.name} has ${users.luCoins} coins`);
        return this;
    }

    removecoins(users, coin) {
        // this.luCoins--;
        users.luCoins -= coin;
        console.log(`Moderator ${this.name} removed ${coin} coins from user ${users.name}`);
        console.log(`${users.name} has ${users.luCoins} coins`);
        return this;
    }
}    

class Admin extends Moderator {
    
    addCourse(user,course) {

        user.courses.push(course);
        console.log(`Admin ${this.name} added course ${course} to user ${user.name}`);
        return this;
    }

    deleteCourse(user,course) {

        let arrofcourses = user.courses
        let index = arrofcourses.indexOf(course);
        if (index > -1) {
        arrofcourses.splice(index, 1);
       }
        console.log(`Admin ${this.name} deleted the course ${course} for user ${user.name}`);
        // console.log(user);
        return this;
        
    }
}

let user1 = new User('Adam',70,'adam@gmail.com');
let user2 = new User('Eva',68,'eva@gmail.com');

let users = [user1,user2];

console.log(`Users Details : `);

count = 1;
users.forEach(element => {
    console.log(count++,".",JSON.stringify(element));
})

let mod = new Moderator('Claudia',36,'Claudia@gmail.com')

let admin = new Admin('Tannhaus',48,'tannhaus@gmail.com')

mod.login();
user1.login().getDetails();
mod.addcoins(user1,10);
mod.removecoins(user1,4);
user1.logout();
user2.login().getDetails();
mod.addcoins(user2,8);
mod.removecoins(user2,2);
user2.logout();

admin.login();
user1.login();
mod.addcoins(user1,27);
admin.addCourse(user1,'JavaScript').addCourse(user1,'Python').addCourse(user1,'Blockchain').addCourse(user1,'AI ML');

admin.deleteCourse(user1,'JavaScript');
admin.deleteCourse(user1,'AI ML');
console.log(user1.courses);

user1.logout();

user2.login();
mod.addcoins(user2,27);

admin.addCourse(user2,'Python').addCourse(user2,'JavaScript').deleteCourse(user2,'Python').addCourse(user2,'AI ML');
console.log(user2.courses);

user2.logout();

console.log(`Courses of ${user1.name}`,user1.courses,`${user2.courses}`);
console.log(`Courses of ${user2.name}`,user2.courses,`${user2.courses}`);

mod.logout();
admin.logout();
