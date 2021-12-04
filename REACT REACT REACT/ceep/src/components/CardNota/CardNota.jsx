import React, { Component } from "react";
import "./estilo.css";
//dá pra importar svg ao invés de usar eles diretamente no img src.
//import deletarSVG from "../../assets/img/press_deletar.svg"
// ou dá pra usar o svg direto : 
import { ReactComponent as DeletarSVG} from "../../assets/img/press_deletar.svg"
class CardNota extends Component {

    apagarNota() {
        const index = this.props.index;
        this.props.deletarNota(index);
    }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
                <h3 className="card-nota_titulo">{this.props.titulo}</h3>
                <DeletarSVG onClick={ this.apagarNota.bind(this) }/>
        </header>
            <p className="card-nota_texto">{ this.props.texto }</p>
      </section>
    );
  }
}

export default CardNota;
