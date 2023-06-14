//* Задание #1 >>>>>> Требуется переписать данный код, который использует then, catch и finally, в код, который использует исключительно async await и try, catch, finally.

// const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
// let isLoading = false;
// const createNewPost = () => {
// isLoading = true;
// fetch(POSTS_URL, {
// method: 'POST',
// })
// .then((response) => response.json())
// .then((result) => {
// console.log('result', result)
// })
// .catch((error) => {
// console.log('error', error)
// })
// .finally(() => {
// isLoading = false;
// });
// };
// createNewPost();

// const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
// let isLoading = false;
// const createNewPost = async() => {
//     isLoading = true;
//     try {
//         const response = await fetch(POSTS_URL, {
//              method: 'POST',
//              });
//         if(!response.ok) {
//             throw new Error('... and there is a mistake')
//         }
//         const result = await response.json();
//         console.log('result: ', result);
//     } catch(error)  {
//         console.log('error', error)
//     } finally {
//         isLoading = false;
//     }
// }
// createNewPost();

//* Задание #2 >>>>>> Требуется переписать данный код, который использует then и catch, в код, который использует исключительно async await и try, catch.

// const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
// const getTodosByIds = (ids) => {
//     const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
//     Promise.all(requests)
//         .then((responses) => {
//             const dataResults = responses.map((data) => data.json());
//             return Promise.all(dataResults)
//         })
//         .then((allTasks) => {
//         console.log(allTasks);
//         })
//         .catch((error) => {
//         console.log(error);
//         })
// }
// getTodosByIds([43, 21, 55, 100, 10]);



// const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

// const getTodosByIds = async(ids) => {
//     try {
//         const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));        
//         const responses = await Promise.all(requests);        
//         const allTasks = await Promise.all(responses.map(data => data.json()));

//         return console.log('allTasks: ', allTasks);
//     } catch(error) {
//         console.log('error: ', error);
//     }
// }
// getTodosByIds([43, 21, 55, 100, 10]);


//* Задание #3 >>>>>>

const ALBOMS_URL = 'https://jsonplaceholder.typicode.com/albums';
const dataContainer = document.querySelector('#data-container');
const toggleLoader = () => {
    const loaderHTML = document.querySelector('#loader');
    const isHidden = loaderHTML.hasAttribute('hidden');
    if (isHidden) {
        loaderHTML.removeAttribute('hidden');
    } else {
        loaderHTML.setAttribute('hidden', '');
    }
}
const createAlbomItem = (text) => {
    const albomTag = document.createElement('li');
    albomTag.textContent = text;

    return albomTag
};
const renderAlbums = async() => {
    toggleLoader();
    try {
        const response = await fetch(ALBOMS_URL, {});
        const alboms = await response.json();
        alboms.forEach(albom => {
            const dataAlbums  = createAlbomItem(albom.title);
            dataContainer.append(dataAlbums);  
        })              
    } catch {
        dataContainer.textContent = 'Произошла ошибка в получении данных об альбомах...';
    } finally {
        toggleLoader();
    }
}
renderAlbums()