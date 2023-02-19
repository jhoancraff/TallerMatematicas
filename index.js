// Las funciones que aparecen en cada una de las funciones de este archivo, se encuentra en 
//funciones.Math.js




//Esta función hara una busqueda del nombre de las personas del archivo salarios.js 
function busquedaPersona(nombrePersona){

    function busquedaArray(persona){
        const personaEncontrada = persona.name 
        return personaEncontrada == nombrePersona   
    }

    const encontrarPersona = salarios.find(busquedaArray)

    return encontrarPersona
}    

//Esta función sacara la mediadana de salario con el nombre de la persona del archivo salarios.js
function medianaPorpersona(encontrarMediana){
    const trabajo = busquedaPersona(encontrarMediana).trabajos;
     
    function recorrerElemento(elemento){
        return elemento.salario
    }
    const salario = trabajo.map(recorrerElemento)
    const calcularSalrio = JhoanMath.calcularMediana(salario)
    console.log(calcularSalrio)
}

//Es una proyección del salario que tendra la persona por cada año que va pasando
function proyeccionSalario(nombrePersona){
    
    const trabajo = busquedaPersona(nombrePersona).trabajos;
    let agregarArray = []
    

    for(let i = 1; i < trabajo.length; i++ ){
        const ultimoSalario = trabajo[i].salario;
        const salarioAnterior = trabajo[i-1].salario;
        const crecimiento = ultimoSalario - salarioAnterior;
        const porcentajeCrecimiento = crecimiento / salarioAnterior
        agregarArray.push(porcentajeCrecimiento)

    }

    

    const calcularCrecimiento = JhoanMath.calcularMediana(agregarArray)
    
    const ultimosSalario = trabajo[trabajo.length - 1].salario
    const aumentoSalario =  ultimosSalario * calcularCrecimiento
    const nuevoSueldo = ultimosSalario + aumentoSalario

    return nuevoSueldo
}

const empresas = {}

//Este for sirve para recorrer el arreglo de salario dentro del arreglo de trabajos para buscar el 
//objecto trabajos en el archivo salarios.js
//Con este for vamos a meter los arreglos dentro del objeto empresas
for(persona of salarios){
    
    for(trabajo of persona.trabajos){
        
        if(!empresas[trabajo.empresa]){
            empresas[trabajo.empresa] = {}
        }

        if(!empresas[trabajo.empresa][trabajo.year]){
            empresas[trabajo.empresa][trabajo.year] = []
        }


        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario)    
    }
}

function encontraMedianaEmpresa(nombre, year){
    if (!empresas[nombre]) {
        console.warn('No hay salarios');
    }else if (!empresas[nombre][year]) {
        console.warn('la empresa no dio salario');
    }else{
        return JhoanMath.calcularMediana(empresas[nombre][year])
    }
}

function proyeccionEmpresaSalario(nombreEmpresa){

    if(!empresas[nombreEmpresa]){
        console.log('La empresa no existe')
    }else{
        const empresaYear = Object.keys(empresas[nombreEmpresa])
        const listaMedianaYear = empresaYear.map((year) => {
            return encontraMedianaEmpresa(nombreEmpresa,year)
        })
        
        
    
        
    }

    
}

