import CardFormacao from './CardFormacao';

const dados = [
  {
    escola: 'Fatec - Votorantim',
    curso: 'Desenvolvimento de Software Multiplataforma',
    datas: ['2023', 'Cursando'],
    descricao:
      'O profissional é aquele que projeta, desenvolve e testa software para múltiplas plataformas, aplicações em Nuvem e Internet das Coisas. Seleciona e aplica conceitos, métodos e tecnologias de Linguagens de Programação, Banco de Dados, Engenharia de Software, Segurança da Informação e Inteligência Artificial, propondo soluções tecnológicas. .',
  },
  {
    escola: 'Fatec - Tatuí',
    curso: 'Automação Industrial',
    datas: ['2016', '2018'],
    descricao:
      'O profissional é aquele que, é responsável por definir e desenvolver soluções sem a interferência humana - ou seja, com uso de máquinas. Realiza automações nos mais variados sistemas industriais, desde um simples equipamento até a automatização de toda planta fabril. ',
  },
  {
    escola: 'Etec - Rubens de Faria e Souza',
    curso: 'Técnico em Eletrotécnica',
    datas: ['2014', '2015'],
    descricao:
      'O profissional é aquele que Projeta, instala, opera e mantém elementos do sistema elétrico de potência. Elabora e desenvolve projetos de instalações elétricas industriais, prediais e residenciais e de infraestrutura para sistemas de telecomunicações em edificações.',
  },
];

const Formacao = () => {
  return (
    <div id="formacao">
      {/*   <h4 className="titulo-container">Formação</h4> */}
      <div className="container-formacoes">
        {dados.map((dado, index) => (
          <CardFormacao dados={dado} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Formacao;
