export function setItem(key, value) {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(`the error is ${error}`);
    }
}

export function getItem(key) {
    try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : undefined; 

    } catch (error) {
        console.error(`the error is ${error}`);
    }
}

export function removeItem(key) {
    try {
        const resp = window.localStorage.removeItem(key);
        if(resp) return true
        return false;
    } catch (error) {
        console.error(`the error is ${error}`);
    }
}


