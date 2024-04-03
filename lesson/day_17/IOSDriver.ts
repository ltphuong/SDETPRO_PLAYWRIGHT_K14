import AppiumDriver from "./AppiumDriver";

export default class IOSDriver extends AppiumDriver {
    initSession(): void {
        console.log(('Initilizing IOS Driver'));

    }
}