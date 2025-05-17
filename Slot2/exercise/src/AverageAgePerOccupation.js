import people from './people';

function AverageAgePerOccupation() {
  const group = {};

  people.forEach(p => {
    if (!group[p.occupation]) {
      group[p.occupation] = { totalAge: 0, count: 0 };
    }
    group[p.occupation].totalAge += p.age;
    group[p.occupation].count += 1;
  });

  return (
    <div>
      <h2>Average Age per Occupation</h2>
      <ul>
        {Object.entries(group).map(([occ, data]) => (
          <li key={occ}>
            {occ}: {(data.totalAge / data.count).toFixed(2)} years
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AverageAgePerOccupation;
