import Cabecalho from "./Components/Cabecalho/Cabecalho";
import Estrutura from "./Components/Estrutura/Estrutura"
import Rodape from "./Components/Rodape/Rodape";

export default function App(){

  return(
    <div className="container">
      <Cabecalho/>
      <Estrutura/>
      <Rodape/>
    </div>
  );
}