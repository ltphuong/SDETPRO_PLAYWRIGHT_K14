## Install a third party package
1. Init simple nodejs project
2. Install `readline-sync` with command `nmp i readline-sync`
3. Below function will return a velue as string

```
const readlineSync = require('readline-sync');

function getUserInput(question){
    return readlineSync.question(question);
}
```

The above purpose is to have something to show a desmonstration better getting user input without handling async function