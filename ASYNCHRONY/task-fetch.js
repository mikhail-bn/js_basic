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


// const usersPhotos = 'https://jsonplaceholder.typicode.com/photos/';
// const ids = [];
// const dataContainer = document.querySelector('#data-container');

// const createUserNotice = (url, title) => {
//     const userElement = document.createElement('li');
//     userElement.className = 'photo-item';

//     const userElementAnchor = document.createElement('img');
//     userElementAnchor.classList.add('photo-item__image');
//     userElementAnchor.src = url;   
//     userElement.append(userElementAnchor);

//     const userElementTitle = document.createElement('h3');
//     userElementTitle.classList.add('photo-item__title');
//     userElementTitle.textContent = title;
//     userElement.prepend(userElementTitle);

//     return userElement
// }
// const toggleLoader = () => {
//     const loaderHTML = document.querySelector('#loader');
//     const isHidden = loaderHTML.hasAttribute('hidden');
//     if (isHidden) {
//         loaderHTML.removeAttribute('hidden');
//     } else {
//         loaderHTML.setAttribute('hidden', '');
//     }
// }
// const getFastestLoadedPhoto = (ids) => {
//     toggleLoader();
//     Promise.race(ids.map(id => fetch(`${usersPhotos}/${id}`)))
//         .then(response => response.json())
//         .then((photo) => {
//             const photoItem = createUserNotice(photo.url, photo.title);
//             dataContainer.append(photoItem);
//             console.log(photo.url);
//             console.log(photo.title);
//         })
//         .catch((error) => {
//             console.log(error);
//             })
//         .finally(() => {
//             toggleLoader()
//             })
// }
// getFastestLoadedPhoto([60, 12, 55])


//* Задание #4

const dataContainer = document.querySelector('#data-container');

const userPostComment = (userComment, email) => {
   
    const comment = document.createElement('div');
    comment.className = 'post__comment';
    
    const commentAuthor = document.createElement('span');
    commentAuthor.className = 'post-comment__author';
    commentAuthor.textContent = email;
    comment.append(commentAuthor);

    const commentText = document.createElement('span');
    commentText.className = 'post-comment__text';
    commentText.textContent = userComment;
    comment.prepend(commentText);

    return comment
}
const createBlockComments = (title, bodyText, userComments) => {
    const blockComments = document.createElement('div');
    blockComments.className = 'post';
    blockComments.id = 'post';
    
    const postTitle = document.createElement('h1');
    postTitle.className = 'post__title';
    postTitle.textContent = title;
    blockComments.prepend(postTitle);

    const postText = document.createElement('p');
    postText.className = 'post__text';
    postText.textContent = bodyText;
    blockComments.append(postText);

    const postCommentsTitle = document.createElement('b');
    postCommentsTitle.className = 'post__comments-text';
    postCommentsTitle.textContent = 'Комментарии';
    blockComments.append(postCommentsTitle);

    const comments = document.createElement('div');
    comments.className = 'post__comments';    

    userComments.forEach((comment) => {
        const commentHtml = userPostComment(comment.body, comment.email);
        comments.append(commentHtml);
    })
    blockComments.append(comments);


    return blockComments
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

const commentsUrl = `https://jsonplaceholder.typicode.com/comments`;   
const userUrl = `https://jsonplaceholder.typicode.com/posts`;

const renderPost = (postId) => {
    toggleLoader();    
    fetch(`${userUrl}/${postId}`)
        .then(response => response.json())
        .then((post) => {
            fetch(`${commentsUrl}?postId=${post.id}`)
                .then(response => response.json())
                .then((comments) => {
                    const blockComment = createBlockComments(post.title, post.body, comments);
                    console.log('blockComment: ', blockComment);
                    document.body.append(blockComment);   
                })
                .catch(error => console.log(error))                   
        })
        .catch(error => console.log(error))
        .finally(() => {
            toggleLoader()
        })
}
renderPost(1);


// const createComment = (author, text) => {
//     const comment = document.createElement('div');
//     comment.className = 'post-comment';
  
//     const commentAuthor = document.createElement('span');
//     commentAuthor.className = 'post-comment__author';
//     commentAuthor.innerText = author;
  
//     const commentText = document.createElement('span');
//     commentText.className = 'post-comment__text';
//     commentText.innerText = text;
  
//     comment.append(commentAuthor, commentText);
  
//     return comment;
//   }
  
//   const createPost = (postName, text, comments) => {
//     const post = document.createElement('div');
//     post.id = 'post';
//     post.className = 'post';
    
//     const postTitle = document.createElement('h1');
//     postTitle.className = 'post__title';
//     postTitle.innerText = postName; 
  
//     const postText = document.createElement('p');
//     postText.className = 'post__text';
//     postText.innerText = text;
  
//     const commentsText = document.createElement('b');
//     commentsText.className = 'post__comments-text';
//     commentsText.innerText = 'Комментарии';
  
//     const commentsBlock = document.createElement('div');
//     commentsBlock.className = 'post__comments';
  
//     comments.forEach((comment) => {
//       const commentHTML = createComment(comment.email, comment.body);
//       commentsBlock.append(commentHTML);
//     });
  
//     post.append(postTitle, postText, commentsText, commentsBlock);
  
//     return post;
//   }
  
//   const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
//   const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
  
//   const renderPost = (postId) => {
//     fetch(`${POSTS_URL}/${postId}`)
//       .then((response) => response.json())
//       .then((post) => {
//         fetch(`${COMMENTS_URL}?postId=${post.id}`)
//           .then((response) => response.json())
//           .then((comments) => {
//             const postHTML = createPost(post.title, post.body, comments);
//             document.body.append(postHTML);
//           })
//           .catch((error) => {
//             console.error(error);
//           })
//       })
//       .catch((error) => {
//         console.error(error);
//       })
//   }
  
//   renderPost(1);