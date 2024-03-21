const RobotCat = require('./RobotCat');

class SolarRobotCat extends RobotCat {
    charge() {
        return super.charge() + 'with solar circuit';
    }
}
module.exports = SolarRobotCat;