//Creacion de la maquina pagina 53

class MaquinaExpendedora{
    constructor(){
        this.p1 = new Producto('10', 'Papa Margarita', 1700); //Instancia de la clase producto y debe mandarle 3 parametros
        this.p2 = new Producto('20', 'Jugo Hit', 2400); //Instancia de la clase producto y debe mandarle 3 parametros
        this.p3 = new Producto('30', 'Chocolatina jet', 700); //Instancia de la clase producto y debe mandarle 3 parametros
        this.p4 = new Producto('40', 'Galleta festival', 1000); //Instancia de la clase producto y debe mandarle 3 parametros
    }

    darProducto1(){
        return this.p1;
    }

    darProducto2(){
        return this.p2;
    }

    darProducto3(){
        return this.p3;
    }

    darProducto4(){
        return this.p4;
    }

    abastecerProducto1(pUnidades){
        //Invocar al metodo de la clase producto llamado abastecer 
        this.p1.abastecer(pUnidades);

    }

    abastecerProducto2(pUnidades){
        //Invocar al metodo de la clase producto llamado abastecer 
        this.p2.abastecer(pUnidades);

    }

    abastecerProducto3(pUnidades){
        //Invocar al metodo de la clase producto llamado abastecer 
        this.p3.abastecer(pUnidades);

    }

    abastecerProducto4(pUnidades){
        //Invocar al metodo de la clase producto llamado abastecer 
        this.p4.abastecer(pUnidades);

    }

    venderProducto1(){
        //Vender unidades del p1
        if(this.p1.darCantidadUnidadesDisponibles() > 0){
            //Verifica si hay unnidades de l prodcuto disponible
            this.p1.vender();
        }else{
            //Se envia mennsaje de alerta 
            alert("No hay unidades disponibles :C");
        }
    }

    venderProducto2(){
        //Vender unidades del p2
        if(this.p2.darCantidadUnidadesDisponibles() > 0){
            //Verifica si hay unnidades de l prodcuto disponible
            this.p2.vender();
        }else{
            //Se envia mennsaje de alerta 
            alert("No hay unidades disponibles :C");
        }
    }

    venderProducto3(){
        //Vender unidades del p3
        if(this.p3.darCantidadUnidadesDisponibles() > 0){
            //Verifica si hay unnidades de l prodcuto disponible
            this.p3.vender();
        }else{
            //Se envia mennsaje de alerta 
            alert("No hay unidades disponibles :C");
        }
    }

    venderProducto4(){
        //Vender unidades del p4
        if(this.p4.darCantidadUnidadesDisponibles() > 0){
            //Verifica si hay unnidades de prodcuto disponible
            this.p4.vender();
        }else{
            //Se envia mennsaje de alerta 
            alert("No hay unidades disponibles :C");
        }
    }

    darCantidadTotalVentas(){
        let cantidadTotal = this.p1.darCantidadUnidadesVendidas()+
                            this.p2.darCantidadUnidadesVendidas()+
                            this.p3.darCantidadUnidadesVendidas()+
                            this.p4.darCantidadUnidadesVendidas();
        return cantidadTotal;
    }

    darValorTotalVentas(){
        let valorVentas = this.p1.darCantidadUnidadesVendidas()*this.p1.darPrecio()+
                            this.p2.darCantidadUnidadesVendidas()*this.p2.darPrecio()+
                            this.p3.darCantidadUnidadesVendidas()*this.p3.darPrecio()+
                            this.p4.darCantidadUnidadesVendidas()*this.p4.darPrecio();

        return valorVentas;
    }


}

//Creacion de la clase producto

class Producto{
    constructor(id, nombre, precio){
        //Constructor de la clase producto
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidadUnidadesDisponibles = 0;
        this.cantidadUnidadesVendidas = 0;
    }

    darIndetificador(){
        return this.id;
    }

    darNombre(){
        return this.nombre;
    }
    

    darPrecio(){
        return this.precio;
    }
    
    darCantidadUnidadesDisponibles(){
        return this.cantidadUnidadesDisponibles;
    }

    darCantidadUnidadesVendidas(){
        return this.cantidadUnidadesVendidas;
    }

    abastecer(pUnidades){
        //Metodo que abastece unn producto
        this.cantidadUnidadesDisponibles = this.cantidadUnidadesDisponibles+pUnidades;
    }

    vender(){
        //Metodo que vende un producto(quita de disponibles y suma en ventas)
        this.cantidadUnidadesDisponibles = this.cantidadUnidadesDisponibles-1;
        this.cantidadUnidadesVendidas = this.cantidadUnidadesVendidas+1;

    }

}

let m = new MaquinaExpendedora(); //instancia de la maquina clase

function abastecerPapa(){

    let cant = prompt("Ingrese la cantidad de unidades que abastece el producto");
    m.abastecerProducto1(parseInt(cant)); //Convertir string
    let disp = m.darProducto1().darCantidadUnidadesDisponibles();//Obtengo cantidade que tiene ese producto
    document.getElementById('abastecerPapa').innerHTML = 'Disponibles: ' + disp;
}

function abastecerHit(){

    let cant = prompt("Ingrese la cantidad de unidades que abastece el producto");
    m.abastecerProducto2(parseInt(cant)); //Convertir string
    let disp = m.darProducto2().darCantidadUnidadesDisponibles();//Obtengo cantidade que tiene ese producto
    document.getElementById('abastecerHit').innerHTML = 'Disponibles: ' + disp;
}

function abastecerJet(){

    let cant = prompt("Ingrese la cantidad de unidades que abastece el producto");
    m.abastecerProducto3(parseInt(cant)); //Convertir string
    let disp = m.darProducto3().darCantidadUnidadesDisponibles();//Obtengo cantidade que tiene ese producto
    document.getElementById('abastecerJet').innerHTML = 'Disponibles: ' + disp;
}

function abastecerGalleta(){

    let cant = prompt("Ingrese la cantidad de unidades que abastece el producto");
    m.abastecerProducto4(parseInt(cant)); //Convertir string
    let disp = m.darProducto4().darCantidadUnidadesDisponibles();//Obtengo cantidade que tiene ese producto
    document.getElementById('abastecerGalleta').innerHTML = 'Disponibles: ' + disp;
}

function comprarPapa(){

    let cant_disp;
    cant_disp = m.darProducto1().darCantidadUnidadesDisponibles();

    if(cant_disp<=0){

        alert("El producto se encuentra agotado");
    }else{

        //De lo contrario si hay unidades disponibles 
        m.venderProducto1(); //llama a la funcion vender de ese producto

        let disponibilidad=m.darProducto1().darCantidadUnidadesDisponibles();
        document.getElementById('abastecerPapa').innerHTML = 'Disponible: ' + disponibilidad;
    }

}

function comprarHit(){

    let cant_disp;
    cant_disp = m.darProducto2().darCantidadUnidadesDisponibles();

    if(cant_disp<=0){

        alert("El producto se encuentra agotado");
    }else{

        //De lo contrario si hay unidades disponibles 
        m.venderProducto2(); //llama a la funcion vender de ese producto

        let disponibilidad=m.darProducto2().darCantidadUnidadesDisponibles();
        document.getElementById('abastecerHit').innerHTML = 'Disponible: ' + disponibilidad;
    }

}

function comprarJet(){

    let cant_disp;
    cant_disp = m.darProducto3().darCantidadUnidadesDisponibles();

    if(cant_disp<=0){

        alert("El producto se encuentra agotado");
    }else{

        //De lo contrario si hay unidades disponibles 
        m.venderProducto3(); //llama a la funcion vender de ese producto

        let disponibilidad=m.darProducto3().darCantidadUnidadesDisponibles();
        document.getElementById('abastecerJet').innerHTML = 'Disponible: ' + disponibilidad;
    }

}

function comprarGalleta(){

    let cant_disp;
    cant_disp = m.darProducto4().darCantidadUnidadesDisponibles();

    if(cant_disp<=0){

        alert("El producto se encuentra agotado");
    }else{

        //De lo contrario si hay unidades disponibles 
        m.venderProducto4(); //llama a la funcion vender de ese producto

        let disponibilidad=m.darProducto4().darCantidadUnidadesDisponibles();
        document.getElementById('abastecerGalleta').innerHTML = 'Disponible: ' + disponibilidad;
    }

}

function cantidad_ventas(){
	// Genera un alert con la cantidad de ventas de todos los productos
	alert("La cantidad de ventas de la maquina es:" + m.darCantidadTotalVentas());
}

function total_ventas(){
	// Genera un alert con el total de las ventas
	alert("La cantidad de ventas totales es:" + m.darValorTotalVentas());
}   


function unidades_vendidas(){

    let vend_papa = m.darProducto1().darCantidadUnidadesVendidas();
    let vend_jugo = m.darProducto2().darCantidadUnidadesVendidas();
    let vend_choco = m.darProducto3().darCantidadUnidadesVendidas();
    let vend_galleta = m.darProducto4().darCantidadUnidadesVendidas();

	alert("La cantidad de unidades vendidas por producto es:\n Papa " + vend_papa
		+ "\n Jugo Hit :" + vend_jugo
		+ "\n Chocolatina jet" + vend_choco
		+ "\n Galletas " + vend_galleta
		);
}