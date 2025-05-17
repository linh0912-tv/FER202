import people from './people';

function SortByOccupationThenAge() {
  const sorted = [...people].sort((a, b) => {
    if (a.occupation < b.occupation) return -1;
    if (a.occupation > b.occupation) return 1;
    return a.age - b.age;
  });

  return (
    <div>
      <h2>Sorted by Occupation and Age</h2>
      <ul>
        {sorted.map((p, i) => (
          <li key={i}>{p.name} - {p.occupation} ({p.age})</li>
        ))}
      </ul>
    </div>
  );
}

export default SortByOccupationThenAge;
