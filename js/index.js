import arrayUpdating from './arrayUpdating.js';
const postContainer = document.querySelector('.postContainer');
const listOfPosts = document.querySelector('.postContainer__list');
const arrContainer = document.querySelector('.arrayContainer');
export async function getPost(request) {
    const response = await fetch(request);
    const body = await response.json();
    return body;
}
const data = await getPost('https://jsonplaceholder.typicode.com/posts');
console.log(data[0]);
for (let i = 0; i < data.length; i++) {
    const li = document.createElement('li');
    li.textContent = 'userId: ' + data[i].userId + '\n' + 'id: ' + data[i].id + '\n' + 'title: ' + data[i].title + '\n' + 'body: ' + data[i].body;
    listOfPosts === null || listOfPosts === void 0 ? void 0 : listOfPosts.appendChild(li);
}
let testArray = [{ id: 0, name: "firstItem" }, { id: 1, name: "secondItem" }, { id: 2, name: "thirdItem" }];
let updatedArray = arrayUpdating(testArray, 1, { id: 10, name: "updatedElement" });
let testArrayHTML = document.createElement("p");
testArrayHTML.innerHTML = `Orginal array: ${JSON.stringify(testArray)}`;
let updatedArrayHTML = document.createElement("p");
updatedArrayHTML.innerHTML = `Updated array: ${JSON.stringify(updatedArray)}`;
arrContainer === null || arrContainer === void 0 ? void 0 : arrContainer.appendChild(testArrayHTML);
arrContainer === null || arrContainer === void 0 ? void 0 : arrContainer.appendChild(updatedArrayHTML);
