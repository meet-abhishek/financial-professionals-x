export default function BioCard({ person }) {
  console.log(person);
  return (
    <>
      <div className="bio-card">
        <div className="name-photo">
          <h3 className="name-el">{person.name}</h3>
          <img className="image-el" src={person.photo} alt={person.alt} />
        </div>
        <div className="bio">
          <span>Rank: {person.id}</span>
          <p>{person.bio}</p>
          <h4>Net Worth: {person.netWorth}</h4>
        </div>
        <div className="divider"></div>
        
          <div className="details">
            <div className="role">
              <h5>{person.role}</h5>
              <h5>{person.education}</h5>
              <h5>{person.industry}</h5>
              <h5>{person.founder}</h5>
              <h5>{person.country}</h5>
            </div>
            <div className="award">
              {person.awards.map((award, index) => (
                <h5>
                  Award {index + 1}: {award}
                </h5>
              ))}
            </div>
            <div className="quote">
              <h5>{person.famousQuote}</h5>
            </div>
          </div>
        
      </div>
    </>
  );
}
