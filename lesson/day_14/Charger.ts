import RobotCat from "./RobotCat";

export default class Charger {
    static charge(robotCatList: NonNullable<RobotCat[]>) {
        robotCatList.forEach(robotCat => {
            console.log(robotCat.charge());
        });
    }
}