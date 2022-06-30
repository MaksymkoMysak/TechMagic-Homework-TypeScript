export default function arrayUpdating<T>(array: Array<T>, key: number, newKeyValue: T) {
    let updatedArray: T[] = [];
    array.forEach(val => updatedArray.push(Object.assign({}, val)));
    updatedArray[key] = newKeyValue;
    return updatedArray;
}