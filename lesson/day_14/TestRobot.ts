import BatteryRobotCat from './BatteryRobotCat';
import Charger from './Charger';
import SolarRobotCat from './SolarRobotCat';

const solarRobotCat = new SolarRobotCat('Solar', 1);
const batteryRobotCat = new BatteryRobotCat('Battery', 1);


Charger.charge([solarRobotCat, batteryRobotCat])