class Animal{
    constructor(nombre, peso, edad) {
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }

    informacion() {
        return Object.values(this);
    }
}

class Perro extends Animal{
    constructor(nombre, peso, edad, raza) {
        super(nombre, peso, edad);
        this.raza = raza;
    }
}

class Gato extends Animal{
    constructor(nombre, peso, edad, sexo) {
        super(nombre, peso, edad);
        this.sexo = sexo;
    }
}

class Conejo extends Animal{
    constructor(nombre, peso, edad, color) {
        super(nombre, peso, edad);
        this.color = color;
    }
} 

const perro = new Perro("Boby", 20, 5, "Labrador");
const gato = new Gato("Mishi", 4, 2, "Hembra");
const conejo = new Conejo("Copito", 3, 1, "Blanco");

const animales = [perro, gato, conejo];

function mostrar() {
    let elementoLista = document.getElementById('lista');
    
    for (let animal of animales) {
        let frase = '';
        let elementoSubLista = document.createElement('li');   
        for (let elemento of animal.informacion()) {
            frase += elemento + ' ';
        }
        elementoSubLista.textContent = frase;
        elementoLista.appendChild(elementoSubLista);
    }
}