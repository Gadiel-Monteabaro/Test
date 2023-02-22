/*
    Una función constructora o constructor, es una función que podemos llamar al mismo tiempo que instanciamos un objeto.
    
    notas
    Se considera una buena práctica nombrar funciones constructoras con una primera letra en mayúscula.

    Sobre esto
    En un constructor la función this no tiene valor. Es un sustituto del nuevo objeto. El valor de this se convertirá en el nuevo objeto cuando se cree un nuevo objeto.
*/

function HouseKepper(name, age, yearsOfExperience, cleaningRepertorie) {
    this.name = name;
    this.age = age;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRepertorie = cleaningRepertorie;
    this.clean = function () {
        alert("Cleaning in progress...")
    }
}

let houseKeeper1 = new HouseKepper("Gadiel", 26, 12, ["bathroom", "lobby", "bedroom"]);

console.log(houseKeeper1);


