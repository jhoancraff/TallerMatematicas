const JhoanMath = {}

JhoanMath.esPar = function esPar(lista){
    return !(lista.length % 2)
}

JhoanMath.esImPar = function esImPar(lista){
    return lista.length % 2
}


JhoanMath.ordenarLista = function ordenarLista(listaDesordenada){
    function ordenandoList(valorActual, nuevoValor){
        return valorActual  - nuevoValor 

        
    }
    const utilizarMeSort = listaDesordenada.sort(ordenandoList)
    return utilizarMeSort    
}

JhoanMath.calcularMediana = function calcularMediana(listaDesordenada){
    const lista = JhoanMath.ordenarLista(listaDesordenada)
    const listaEsPar = JhoanMath.esPar(lista)
    

    if(listaEsPar){
        const viewMedianaPar = lista.length /2
        const ImprimirViewMedianaPar = (lista.length / 2) - 1
        return([lista[viewMedianaPar], lista[ImprimirViewMedianaPar]]);
        
        //JhoanMath.calcularrElemento([lista[viewMedianaPar], lista[ImprimirViewMedianaPar]])
    }else{
        const viewMediana = Math.floor(lista.length / 2)
        return(lista[viewMediana])
    }

}
 
JhoanMath.calcularrElemento = function calcularrElemento(lista){
    const sumaLista = lista.reduce(recorrerArray)

    function recorrerArray(valorActual, nuevoValor){
        return valorActual + nuevoValor
    }
//
    //for(i = 0; i < lista.length; i++){
    //    sumaLista = sumaLista + lista[i]
    //}


    const promedio = sumaLista / lista.length
    console.log(promedio)
    return promedio
    
}

JhoanMath.calcularModa = function calcularModa(lista){
    const listaConunt = {}

    for(let i = 0; i < lista.length; i++){
        const elemento = lista[i]
        if(listaConunt[elemento]){
            listaConunt[elemento] += 1
        }else{
            listaConunt[elemento] = 1
        }

        
    }
    const listaArray = Object.entries(listaConunt)
        const listaOrdenada = ordenarLista(listaArray, 1)
        const listaFinal = listaOrdenada[listaOrdenada.length - 1]
        console.log('la moda es' +listaFinal[0]);
}
