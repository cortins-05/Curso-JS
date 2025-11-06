let usuario = "Lucas";
let password = 'javascriptTotal';

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    cache: 'default',
    redirect: 'manual',
    credentials: 'include',
    headers: {
        'Authorization': 'Basic'+btoa(usuario+':'+password),
        'Content-Type': 'aplication/json'
    }
})
    .then(response => {
        if (response.type === 'opaqueredirect') {
            let nuevaUbicacion = response.headers.get('Location');
            console.log('Redirigiendo a ' + nuevaUbicacion);
        } else {
            return response.json();
        }
    })
    .then(data => console.log(data))
    .catch(error => console.error(error))


let token = 'miToken';

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    credentials: 'include',
    headers: {
        'Authorization': 'Bearer'+token,
        'Content-Type': 'aplication/json'
    }
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
