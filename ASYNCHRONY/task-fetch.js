//* Задание #1

// const usersUrl = 'https://jsonplaceholder.typicode.com/users';
// const createUserNotice = (userName) => {
//     const userElement = document.createElement('li');
//     const userElementAnchor = document.createElement('a');
//     userElementAnchor.href = '#';
//     userElementAnchor.textContent = userName;
//     userElement.append(userElementAnchor)

//     return userElement
// }
// const toggleLoader = () => {
//     const loaderHTML = document.querySelector('#loader');
//     const isHidden = loaderHTML.hasAttribute('hidden');
//     if (isHidden) {
//         loaderHTML.removeAttribute('hidden')
//     } else {
//         loaderHTML.setAttribute('hidden', '')
//     }
// }
// const dataContainer = document.querySelector('#data-container')
// const getAllUsersNames = () => { 
//     toggleLoader();
//     const usersDatas = fetch(usersUrl, {        
//         method: 'GET',
//     })
// console.log('usersDatas: ', usersDatas);
//     usersDatas
//         .then((answer) => {
//             console.log('answer: ', answer);            
//             if(!answer.ok) {
//                 throw new Error('This is fiasco, Bro')
//             }

//             return answer.json()
//         })
//         .then((users) => {
//             console.log('users: ', users);
//             users.forEach(elemUser => {
//                 const userHTML = createUserNotice(elemUser.username);
//                 dataContainer.append(userHTML)
//             })            
//         })
//         .catch((error) => {
//             console.log('error: ', error);            
//         })
//         .finally(() => {
//             toggleLoader();
//         })
// }
// getAllUsersNames()


//* Задание #2

// const usersUrl = 'https://jsonplaceholder.typicode.com/users';
// const usersIds = [];
// const dataContainer = document.querySelector('#data-container');

// // Создаем элемент 
// const createUserNotice = (userName) => {
//     const userElement = document.createElement('li');
//     const userElementAnchor = document.createElement('a');
//     userElementAnchor.href = '#';
//     userElementAnchor.textContent = userName;
//     userElement.append(userElementAnchor)

//     return userElement
// }

// // Функция для отображения анимации лоадера при ожидании ответа от сервера
// const toggleLoader = () => {
//     const loaderHTML = document.querySelector('#loader');
//     const isHidden = loaderHTML.hasAttribute('hidden');
//     if (isHidden) {
//         loaderHTML.removeAttribute('hidden');
//     } else {
//         loaderHTML.setAttribute('hidden', '');
//     }
// }
// const getUsersByIds = (usersIds) => {
//     toggleLoader();
//     const requests = usersIds.map(id => fetch(`${usersUrl}/${id}`));
//     Promise.all(requests)
//         .then((responses) => {
//             const usersDatas = responses.map((response) => response.json());
//             return Promise.all(usersDatas)
//         })        
//         .then((usersTitles) => {
//             console.log('usersTitles: ', usersTitles);
//             usersTitles.forEach((userTitle) => {
//                 const userElem = createUserNotice(userTitle.username);
//                 dataContainer.append(userElem);
//             })

//         })
//         .catch((error) => {
//             console.log('error: ', error);            
//         })
//         .finally(() => {
//             toggleLoader()
//         })
// }
// getUsersByIds([5, 6, 2, 1])






//* Задание #3


const usersPhotos = 'https://jsonplaceholder.typicode.com/photos/';
const ids = [];
const dataContainer = document.querySelector('#data-container');

const createUserNotice = (userName) => {
    const userElement = document.createElement('li');
    userElement.className = 'photo-item';

    const userElementAnchor = document.createElement('img');
    userElementAnchor.classList.add('photo-item__image');
    userElementAnchor.src = 'https://via.placeholder.com/600/92c952';
    userElementAnchor.textContent = userName;
    userElement.append(userElementAnchor);

    const userElementTitle = document.createElement('h3');
    userElementTitle.classList.add('photo-item__title');
    userElementTitle.textContent = 'accusamus beatae ad facilis cum similique qui sunt';
    userElement.prepend(userElementTitle);

    return userElement
}
const toggleLoader = () => {
    const loaderHTML = document.querySelector('#loader');
    const isHidden = loaderHTML.hasAttribute('hidden');
    if (isHidden) {
        loaderHTML.removeAttribute('hidden');
    } else {
        loaderHTML.setAttribute('hidden', '');
    }
}
const getFastestLoadedPhoto = (ids) => {
    toggleLoader();
    Promise.race()
}
getFastestLoadedPhoto()