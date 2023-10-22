const CardFormacao = (dados) => {
  const { escola, curso, datas, descricao } = dados.dados;

  return (
    <div className="card-formacao">
      <p className="datas">{`${datas[0]} - ${datas[1]}`}</p>
      <div className="container-detalhes-formacao">
        <p className="curso">{curso}</p>
        <p className="escola">{escola}</p>
        <p className="descricao">{descricao}</p>
      </div>
    </div>
  );
};

export default CardFormacao;
