import BioCard from "./BioCard";
import data from "../data.js";

export default function MainComponent() {
  const bioCardElements = data.map((person) => {
    return (
      <BioCard
      key={person.id}
        person={person}
        // rank={person.id}
        // name={person.name}
        // bio={person.bio}
        // photo={person.photo}
        // alt={person.name}
        // role={person.role}
        // education={person.education}
        // invStrategy={person.investmentStrategy}
        // industry={person.industry}
        // founder={person.companyFounded}
        // netWorth={person.netWorth}
        // country={person.country}
        // quote={person.famousQuote}
      />
    );
  });

  return (
    <>
      <main>{bioCardElements}</main>
    </>
  );
}
