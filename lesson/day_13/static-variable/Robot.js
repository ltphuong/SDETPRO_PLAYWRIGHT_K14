class Robot {
    static id = 0;

    constructor() {
        this.sth = 'Robot';
        Robot.id++;
    }

    getId() {
        return Robot.id;
    }

    static doSthing() {
        console.log('Hello. My name is ', this.sth);
    }
}

module.exports = Robot;

const robot1 = new Robot();
Robot.doSthing();
const robot2 = new Robot();
console.log(robot1.getId());
console.log(robot2.getId());