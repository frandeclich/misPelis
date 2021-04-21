import React, {Component} from 'react';

class Contador extends Component{

    constructor(props){
        super(props)
        this.state = {
            valor: props.valor,
        }
    }
    incrementar(){
        this.setState({
            valor: this.state.valor + 1
        })
    }
    decrementar(){
        this.setState({
            valor: this.state.valor - 1
        })
    }
    componentDidMount(){
        console.log('Contador montado.')
        this.setState({valor:this.state.valor + 1})
    }
    componentDidUpdate(){
        console.log('Contador actualizado.')
    }
    render(){
        console.log('Renderizando...')
        return(
            <div className="contador-container">
                <h3>Yo vi {this.state.valor} películas.</h3>
                <button onClick={()=>this.incrementar()}>Yo vi más</button>
                <button onClick={()=>this.decrementar()}>Yo vi menos</button>
            </div>
        );
    }
}

export default Contador