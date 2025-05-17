import people from './people';

function GroupByOccupation() {
  const grouped = people.reduce((acc, person) => {
    acc[person.occupation] = acc[person.occupation] || [];
    acc[person.occupation].push(person);
    return acc;
  }, {});

  return (
    <div>
      <h2>Grouped by Occupation</h2>
      {Object.entries(grouped).map(([occ, list]) => (
        <div key={occ}>
          <h3>{occ}</h3>
          <ul>
            {list.map((p, i) => (
              <li key={i}>{p.name} ({p.age})</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupByOccupation;
