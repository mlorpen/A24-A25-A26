/**
 * @swagger
 * components:
 *   schemas:
 *     Bicicleta:
 *       type: object
 *       required:
 *         - color
 *         - modelo
 *       properties:
 *         id:
 *           type: int
 *           description: El id autogenerado para la bici
 *         color:
 *           type: string
 *           description: Color de la bici
 *         modelo:
 *           type: string
 *           description: Modelo de la bici
 *         latitud:
 *           type: double
 *           description: Latitud de la localización de la bici
 *         longitud:
 *           type: double
 *           descripcion: Longitud de la localización de la bici
 *       example:
 *         id: 1
 *         color: rojo
 *         modelo: treck
 *         latitud: 25.63456
 *         longitud: -10.345233
 */
let Bicicleta = function (id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.allBicis = [];

Bicicleta.add = function (bici) {
    this.allBicis.push(bici);
}

Bicicleta.removeById = function(id) {

    for(let i=0; i<this.allBicis.length; i++){
        if(this.allBicis[i].id == id){
            this.allBicis.splice(i, 1)
        }
    }
    
}

Bicicleta.updateById = function(id, bici) {
    for(let i=0; i<this.allBicis.length; i++){
        if(this.allBicis[i].id == id){
            this.allBicis[i] = bici
        }
    }
}

let a = new Bicicleta(1, "Rojo", "Trek", [28.503789, -13.853296]);
let b = new Bicicleta(2, "Azul", "Orbea", [28.501367, -13.853476]);
Bicicleta.add(a);
Bicicleta.add(b);


module.exports = Bicicleta;
