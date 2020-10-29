
// Crear una función asíncrona para obtener los datos de la URL
const data = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    try {
        // Dentro de un bloque Try/Catch, utilizar el método fetch mediante la instrucción await para recibir el valor directamente de la promesa.
        const resp = await fetch(url).then(resp = resp.json())
        setTimeout(() => {
            // Utilizar un método de iteración de arreglos para mostrar solamente los 1eros 20 títulos de  los datos recibidos.
            for (let i = 0; i < 20; i++) {
                console.log(`${i+1}: ${resp[i].title}`);
            }
        }, 3000);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}


const respData = () => {
    let prom = new Promise((resolve, rejected) => {
        // Crear una funcion que retorne una promesa despues de 3 seg. 
        setTimeout(() => {
            resolve('Información enviada');
        }, 3000);
    })
    return prom;
}
// Crear una función asíncrona que permite recibir el mensaje de la promesa creada en el req anterior. 
async function app(data, respData) {
    data();
    let rData = await respData();
    console.log(rData);
}
// Además agregar el llamado a las dos funciones principales. 
app(data, respData); 

