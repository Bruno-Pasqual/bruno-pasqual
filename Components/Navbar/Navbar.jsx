import { useState } from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Navbar = () => {
  const [itemAtivo, setItemAtivo] = useState(0);

  const handleClick = (index) => {
    setItemAtivo(index);
  };

  return (
    <nav>
      <header>
        <h2>Bruno Pasqual</h2>
        <h3>Desenvolvedor Full-stack</h3>
      </header>
      <ul className="lista-nav">
        <li
          className={itemAtivo == 0 ? 'ativo' : ''}
          onClick={() => handleClick(0)}
        >
          <div className="bullet-point"></div>
          <a href="#sobre">Sobre</a>
        </li>
        <li
          className={itemAtivo == 1 ? 'ativo' : ''}
          onClick={() => handleClick(1)}
        >
          <div className="bullet-point"></div>
          <a href="#cidade">Cidade</a>
        </li>
        <li
          className={itemAtivo == 2 ? 'ativo' : ''}
          onClick={() => handleClick(2)}
        >
          <div className="bullet-point"></div>
          <a href="#formacao">Formação</a>
        </li>
        <li
          className={itemAtivo == 3 ? 'ativo' : ''}
          onClick={() => handleClick(3)}
        >
          <div className="bullet-point"></div>
          <a href="#experiencia">Experiência</a>
        </li>
        <li
          className={itemAtivo == 4 ? 'ativo' : ''}
          onClick={() => handleClick(4)}
        >
          <div className="bullet-point"></div>
          <a href="#cultura">Cultura</a>
        </li>
      </ul>
      <footer className="icons-container">
        <a
          href="https://github.com/Bruno-Pasqual?tab=repositories"
          target="blank"
        >
          <div className="icons">
            <AiFillGithub />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/bruno-pasqual-01ba36231/"
          target="blank"
        >
          <div className="icons">
            <AiFillLinkedin />
          </div>
        </a>
      </footer>
    </nav>
  );
};

export default Navbar;
