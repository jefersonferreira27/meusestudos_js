// Módulos em JS
// Serve para dividir o código em arquivos separados
// Os módulos são importados de arquivos externos com o @import
// Os módulos também dependem type="module"da tag <script>

// Exportação nomeada
// Nome do arquivo tipo: person.js
const name = "Jeferson";
const age = 70;

export{name, age}


// Exportação padrão
// Nome do arquivo: mensagem.js
let somar = (a,b) => {
    return a + b;
}

export default somar;

// Importação de arquivos nomeados
import {name, age} from "./person.js";


// Importaçao de arquivos padrão
import somar from "./person.js";