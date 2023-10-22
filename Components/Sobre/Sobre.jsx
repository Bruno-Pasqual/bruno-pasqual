import { useState } from 'react';

const Sobre = () => {
  const [ativo, setAtivo] = useState(1);

  return (
    <div id="sobre">
      <div className="sobre-header">
        {/* <img src="/public/perfil.png" className="imagem-perfil" /> */}
        <div className="container-foto"></div>
        <div className="container-info">
          <p>
            Meu nome é Bruno Henrique Pasqual. Tenho atualmente
            <span> 26 anos</span> e venho da área de{' '}
            <span>automação e controle</span> , área qual eu já tive
            experiência.
          </p>
          <p>
            Atualmente estou em um processo de{' '}
            <span> transição de carreira</span>, buscando adentrar na área de{' '}
            <span> desenvolvimento</span>.
          </p>
          <ul>
            <li>Python</li>
            <li>Javascript</li>
            <li>Nodejs</li>
            <li>React</li>
            <li>CSS</li>
            <li>SQL</li>
          </ul>
        </div>
      </div>
      <div className="sobre-hobbies">
        <h4>Hobbies</h4>
        <div className="container-atividades">
          <img
            src="../../public/drive.jpg"
            className={ativo == 1 ? 'ativo' : ''}
            alt=""
            onClick={() => setAtivo(1)}
          />

          <img
            src="../../public/nado.jpg"
            alt=""
            className={ativo == 2 ? 'ativo' : ''}
            onClick={() => setAtivo(2)}
          />
          <img
            src="../../public/volei.jpg"
            className={ativo == 3 ? 'ativo' : ''}
            alt=""
            onClick={() => setAtivo(3)}
          />
          <img
            src="../../public/travel.jpg"
            alt=""
            className={ativo == 4 ? 'ativo' : ''}
            onClick={() => setAtivo(4)}
          />
        </div>
      </div>
    </div>
  );
};

export default Sobre;
