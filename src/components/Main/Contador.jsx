import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion'

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
        console.log('Actualizando título...')
    })
    return(
        <div className="contador-container">
            <motion.h3 animate={{x:valor*15}}>Yo vi {valor} películas.</motion.h3>
            <button onClick={()=>incrementar()}>Yo vi más</button>
            <button onClick={()=>decrementar()}>Yo vi menos</button>
        </div>
    );
}

export default Contador