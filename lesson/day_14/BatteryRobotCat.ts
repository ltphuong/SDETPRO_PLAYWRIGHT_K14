import RobotCat from './RobotCat';

export default class BatteryRobotCat extends RobotCat {
    charge(): string {
        return super.charge() + 'with battery circuit';
    }
}