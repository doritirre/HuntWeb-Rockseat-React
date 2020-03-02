import React, { Component } from 'react';



class Hello extends Component{

    render() {
        const soma = (a = 2, b = 3) => {
            return a + b;
        }

        return ( 
            <div>
                <h1>Resultado:</h1>
                <h2>
                    { 
                        soma() > 3 ? "Maior que 3" : "Menor que 3" 
                    }
                </h2>
            </div>
        );
    }
}

export default Hello;