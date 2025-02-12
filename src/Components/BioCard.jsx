export default function BioCard(props) {
  console.log(props);
  return (
    <>
      <div className="bio-card">
        <div className="photo">
          <img src={props.photo} alt={props.alt} />
        </div>
        <div className="bio">
          <h1>{props.name}</h1>
        </div>
        <div className="networth">
          <h4>Net Worth: {props.netWorth}</h4>
        </div>
        <div className="quote">
          <span>{props.famousQuote}</span>
        </div>
      </div>
    </>
  );
}
