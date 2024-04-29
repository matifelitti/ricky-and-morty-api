import "./App.css";

const Card = ({ characters = [] }) => {

  return (
    <>
      {characters.map((item, index) => (
        <div className="card" key={index}>
          <div className="card-content">
            <img className="image" src={item.image} alt="image" />
            <div className="info">
              <h4>{item.id}. {item.name}</h4>
              <br></br>
              <p>
                <strong>Status:</strong> {item.status}
              </p>
              <p>
                <strong>Species:</strong> {item.species}
              </p>
              <p>
                <strong>Origin:</strong> {item.origin.name}
              </p>
              <p>
                <strong>Location:</strong> {item.location.name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
