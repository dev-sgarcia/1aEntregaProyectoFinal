// Genero mi clase con los atributos de los paquetes vacacionales.
class Paquete {
    constructor(nombre, precio, id) {
      this.nombre = nombre;
      this.precio = precio;
      this.id = id;
    }
  }


  //  Declaro mi array
  let lista_compra = [];
  
  //  Genero mi arrar de paquetes vacío
  const paquetes = [];
  paquetes.push(new Paquete("- Transporte redondo y entrada a Six Flags ($450)", 450, 1));
  paquetes.push(new Paquete("- Transporte redondo. ($200)", 200, 2));
  paquetes.push(new Paquete("- Entrada a Six Flags. ($300)", 300, 3));
    paquetes.push(new Paquete("- Transporte sencillo (ida o vuelta).  ($120)", 120, 4));
  
  //  Función flecha para mostrar la lista
  const mostrarLista = () => {
    let texto = "";
    paquetes.forEach((item) => {
      texto += `${item.id}) ${item.nombre}\n`;
    });

    //  Capturo las entradas mediante "prompt"
    let seleccion = parseInt(prompt(`Selecciona el paquete deseado.\n${texto}`));   
    return seleccion;
  };

  //  Función flecha para hacer la búsqueda del paquete y agregarlo a mi lista de compra.
  const paqueteElegido = (id) => {
    console.log(id);
    let paqueteFind = paquetes.find((item) => item.id === id);
    lista_compra.push(paqueteFind);
    let continuar = confirm("¿Desea agregar otro paquete? \n(Aceptar = Si) (Cancelar = No)");
    if (continuar === true) {
      iniciaVenta();
    }
  };
  
  //  Funcion flecha con la que inicio la venta.
  const iniciaVenta = () => {
    paqueteId = mostrarLista();
    paqueteElegido(paqueteId);
  };
  
  //  Mando a llamar mi función para iniciar la venta.
  iniciaVenta();
  
  //  Hago la suma con el metodo "reduce", de los precios de los paquetes en mi lista de compras.
  let total = lista_compra.reduce((acc, item) => acc + item.precio, 0);
  //  Utilizo length para contar los paquetes en mi array (Se puede hacer de otro modo pero fue para ocupar length)
  let numeroPaquetes = lista_compra.length;

  //  Efectuo las salidas mediante "alert"
  alert("Resúmen de compra:\n\n" + "Total de paquetes: "+ numeroPaquetes + "\n Total a pagar: "+ total);
  alert("Gracias por su compra, ¡Buen Viaje");