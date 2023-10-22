import Cidade from '../Cidade/Cidade';
import Cultura from '../Cultura/Cultura';
import Formacao from '../Formacao/Formacao';
import Sobre from '../Sobre/Sobre';
import Experiencia from '../experiencia/Experiencia';

const Output = () => {
  return (
    <div id="output">
      <Sobre />
      <Cidade />
      <Formacao />
      <Experiencia />
      <Cultura />
    </div>
  );
};

export default Output;
