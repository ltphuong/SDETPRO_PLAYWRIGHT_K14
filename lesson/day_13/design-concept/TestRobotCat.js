const BatteryRobotCat = require("./BatteryRobotCat");
const Charger = require("./Charger");
const SolarRobotCat = require("./SolarRobotCat");

// Models
const batteryRobotCat = new BatteryRobotCat();
const solarRobotCat = new SolarRobotCat();

// Usage of controller
Charger.charge([batteryRobotCat, solarRobotCat]);