export default class RobotCat {
    private name: string;
    private id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    charge(): string {
        return 'Charging...'
    }
}