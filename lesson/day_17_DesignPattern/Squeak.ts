import QuackBehavior from "./QuackBehavior";

export default class Queak implements QuackBehavior {
    quack(): void {
        throw new Error('Squeak squeak...')
    }
}