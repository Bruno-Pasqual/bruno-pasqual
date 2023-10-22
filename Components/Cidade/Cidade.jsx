const Cidade = () => {
  return (
    <div id="cidade">
      <h3>Sorocaba, SP</h3>
      <div className="container-mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d468204.3280566021!2d-47.50665671613402!3d-23.538029454647535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58abceb48f503%3A0x947f99ac59d0781b!2sSorocaba%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1697772679170!5m2!1spt-BR!2sbr"
          width="100%"
          height="350"
          loading="lazy"
          className="mapa"
        ></iframe>
      </div>
      <div className="container-fotos">
        <img src="/public/sorocaba.webp" alt="" />
      </div>
    </div>
  );
};

export default Cidade;
