//* fetch()

//* fetch(url)

//* GET POST DELETE

const TODOS_URL = 'https://jsonplaceholder.typicode.com/t';

const createElement = (text) => {
    
}
    const getAllToDos = () => {
        const result = fetch(TODOS_URL, {    
            method: 'GET',
        
        })
        
        console.log('result: ', result);
        
        result
            .then((response) => {
                console.log('response ', response);
                if(!response.ok) {
                    throw new Error('Ошибка запроса');
                }
                return response.json();
            })
            .then((todos) => {
                console.log('todos: ', todos);
            })
            .catch((error) => {
                console.log('error: ', error);
            })
    }
