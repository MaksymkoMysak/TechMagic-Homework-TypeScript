export default function arrayUpdating(array, key, newKeyValue) {
    let updatedArray = [];
    array.forEach(val => updatedArray.push(Object.assign({}, val)));
    updatedArray[key] = newKeyValue;
    return updatedArray;
}
