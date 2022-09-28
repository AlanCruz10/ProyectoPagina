import "../assets/styles/card.css";

function Card({ img, name, descripcion }) {
  return (
    <>
      <h1 className="titulo">{name}</h1>
      <div className="dissplay">
        <img src={img} alt="" />
        <p className="parrafo">{descripcion}</p>
      </div>
    </>
  );
}

export default Card;
