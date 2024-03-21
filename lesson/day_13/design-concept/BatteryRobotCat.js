const RobotCat = require('./RobotCat');

class BatteryRobotCat extends RobotCat {
    charge() {
        return super.charge() + 'with battery circuit';
    }
}
module.exports = BatteryRobotCat;