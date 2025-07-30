import "./card.css";

function Card(props) {
  return (
    <div className="card">
      <img src={props.mahsulot.image}alt=""/>
      <h3>{props.mahsulot.tile}</h3>
      <h3>{props.mahsulot.category}</h3>
      <h2>Price: {props.mahsulot.price}$</h2>
    </div>
  );
}

export default Card;
