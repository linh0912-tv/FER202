import Person from "./Person";
import people from './people';

function PeopleList() {
  return (
    <div>
      {people.map((person, index) => (
        <Person key={index} person={person} />
      ))}
    </div>
  );
}

export default PeopleList;
