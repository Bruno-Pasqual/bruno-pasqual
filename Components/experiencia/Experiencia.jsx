import './Experiencia.css';

const Experiencia = () => {
  return (
    <div id="experiencia">
      {/*  <h4 className="titulo-container">Experiência</h4> */}
      <div className="wrapper">
        <img src="/public/flowon.png" alt="" className="logo-flowon" />
        <div className="experiencia-card">
          <div className="header-experiencia">
            <p className="role">
              <span>Desenvolvedor Front-end</span> -{' '}
              <a
                href="https://www.linkedin.com/search/results/all/?keywords=flowon&origin=GLOBAL_SEARCH_HEADER&sid=DXP"
                target="_blank"
              >
                Flowon
              </a>
            </p>
            <p className="datas">Agosto 2023 - Atual</p>
          </div>
          <ul className="lista-tarefas">
            <li className="tarefa-primaria">
              <p>
                Utilizo designs criados no Figma e Sketch como base para a
                codificação de páginas web. No projeto atual, decidimos utilizar
                a combinação do React com o TypeScript.
              </p>
            </li>
            <li className="tarefa-primaria">
              <p>
                {' '}
                <p>
                  Realizo a integração do front-end com o back-end para
                  assegurar que a troca de informações seja precisa e eficiente.
                  Além disso, garanto que o envio de dados para o servidor
                  ocorra de acordo com a estrutura desejada.
                </p>
              </p>
            </li>
            <li className="tarefa-secundaria">
              <p>
                <p>
                  Conduzimos um detalhado levantamento dos requisitos funcionais
                  e não funcionais da aplicação. Isso permite compreendermos
                  plenamente as necessidades do projeto e garantir que todas as
                  funcionalidades atendam às expectativas.
                </p>
              </p>
            </li>
            <li className="tarefa-secundaria">
              <p>
                <p>
                  Elaboramos um fluxo completo de funcionamento da aplicação,
                  mapeando cada etapa para garantir uma experiência de usuário
                  consistente e intuitiva.
                </p>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experiencia;
