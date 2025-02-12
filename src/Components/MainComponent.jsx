import BioCard from "./BioCard";
import data from "../data.js";

export default function MainComponent() {

  const bioCardElements = data.map((person) => {
    return (
      <BioCard
        key={person.id}
        {...person}
        
      />
    );
  });

  return (
    <>
      <main>
        {bioCardElements}

      </main>
    </>
  );
}
