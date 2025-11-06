let miToken = 'este_es_mi_token';
axios.interceptors.request.use(
    (config) => {
        config.headers.Authorizatios = `Bearer ${miToken}`;
        return config;
    }, (error) => {
        return Promise.reject(error);
    }
)

axios.interceptors.response.use(
    (respuesta) => {
        respuesta.data.customField = 'Nuevo Campo';
        return respuesta;
    },(error) => {
        return Promise.reject(error);  
    }
)

let pedido1 = axios.get('https://api.ejemplo.com/data1');
let pedido2 = axios.get('https://api.ejemplo.com/data1');
let pedido3 = axios.get('https://api.ejemplo.com/data1');

Promise.all([pedido1,pedido2,pedido3])
    .then(axios.spread((respuesta1, respuesta2, respuesta3) => {
        console.log(respuesta1, respuesta2, respuesta3);
    }))
    .catch(error => {
        console.error(error);
    });


let datos = {
    title: 'Nuevo post',
    body: 'Mi contenido'
}

axios.post('https://jsonplaceholder.typicode.com/posts', datos)
    .then(respuesta => console.log(respuesta.data))
    .catch(error => console.error(error));