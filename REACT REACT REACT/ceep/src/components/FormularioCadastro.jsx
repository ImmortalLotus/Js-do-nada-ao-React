﻿import React, { Component } from "react"

class FormularioCadastro extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="titulo" />
                <textarea placeholder="texto" />
                <button>Criar Nota</button>
            </form>
        );
    }
}
export default FormularioCadastro;