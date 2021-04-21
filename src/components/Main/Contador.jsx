import React, {useEffect, useState} from 'react';

function Contador(props){

    const [valor,setValor] = useState(props.valor)
    function incrementar(){
        setValor(valor + 1)
    }
    function decrementar(){
        setValor(valor - 1)
    }
    useEffect(()=>{
        document.title = `Viste ${valor} películas.`
    })
    return(
        <div className="contador-container">
            <h3>Yo vi {valor} películas.</h3>
            <button onClick={()=>incrementar()}>Yo vi más</button>
            <button onClick={()=>decrementar()}>Yo vi menos</button>
        </div>
    );
}

export default Contador