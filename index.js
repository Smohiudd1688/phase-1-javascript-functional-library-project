function myEach(collection, callback) {
    let newCollection = collection;
    if (Array.isArray(collection) !== true) {
        newCollection = Object.values(collection);
    }

    for (const element of newCollection) {
        callback(element);
    }

    return collection;
}

function myMap(collection, callback) {
    let newCollection = collection;
    const modifiedArray = []
    if (Array.isArray(collection) !== true) {
        newCollection = Object.values(collection);
    }

    for (const element of newCollection) {
        modifiedArray.push(callback(element));
    }

    return modifiedArray;
}

function myReduce(collection, callback, acc) {
    let newCollection = collection;
    let sum = 0;

    if (Array.isArray(collection) !== true) {
        newCollection = Object.values(collection);
    }

    /*for (const element of newCollection) {
        sum = callback(acc, element, collection);
    }

    return sum;*/
    
    if (typeof(acc) === 'undefined') {
        return newCollection.reduce(callback);
    } else {
        return newCollection.reduce(callback, acc);
    }

}

const accum = myReduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 10);
const noAccum = myReduce({one: 1, two: 2, three: 3}, function(acc, val, collection) { return acc + val; });

console.log(accum);
console.log(noAccum);


function myFind(collection, predicate) {
    let newCollection = collection;
    if (Array.isArray(collection) !== true) {
        newCollection = Object.values(collection);
    }

    for (const element of newCollection) {
        if (predicate(element) === true)
        {
            return element;
        }
    }
}

function myFilter(collection, predicate) {
    let newCollection = collection;
    const filteredArray = [];

    if (Array.isArray(collection) !== true) {
        newCollection = Object.values(collection);
    }

    for (const element of newCollection) {
        if (predicate(element) === true)
        {
            filteredArray.push(element);
        }
    }

    return filteredArray;
}

function mySize(collection) {
    let newCollection = collection;
    let size = 0;

    if (Array.isArray(collection) !== true) {
        newCollection = Object.values(collection);
    }

    for (const element of newCollection) {
        ++size;
    }

    return size;
}

function myFirst(array, n) {      
    if (typeof(n) === 'undefined') {
        return array[0];
    } else {    
        const newArray = [];
        for (let i = 0; i < n; i++) {
            newArray.push(array[i]);
        }
        return newArray;
    }
}

function myLast(array, n) {      
    if (typeof(n) === 'undefined') {
        return array[array.length - 1];
    } else {    
        const newArray = [];
        for (let i = array.length - n; i < array.length; i++) {
            newArray.push(array[i]);
        }
        return newArray;
    }
}

function myKeys(object) {
    const keyArray = [];

    for (const key in object) {
        keyArray.push(key);
    }

    return keyArray;
}

function myValues(object) {
    const valueArray = [];

    for (const key in object) {
        valueArray.push(object[key]);
    }

    return valueArray;
}