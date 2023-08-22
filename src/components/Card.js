function Card(props) {
    const { id, name, age, isActive } = props;
    return (
      <div>
        <div className="Card">
          <p>Id : {id}</p>
          <p>Name : {name}</p>
          <p>Age : {age}</p>
          <p>Active : {isActive ? "Yes" : "No"}</p>
        </div>
      </div>
    );
  }
  
  export default Card;

