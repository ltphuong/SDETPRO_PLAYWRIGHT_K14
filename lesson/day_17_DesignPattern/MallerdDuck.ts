import Duck from "./Duck";
import Quack from "./Quack";

export default class MallerdDuck extends Duck {
    constructor() {
        super();
        this.quackBehavior = new Quack();
    }
}