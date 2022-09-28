import Titulo from '../components/Titulo';
import Top from "../components/Top";

function Contenedor() {

    let title = "TOPS ANIMES MAS POPULARES";

    return(
        <>
            <Titulo title={title}/>
            <Top/>
        </>
    );
}
export default Contenedor;