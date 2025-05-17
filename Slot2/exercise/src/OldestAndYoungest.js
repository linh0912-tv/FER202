import people from './people';

function OldestAndYoungest() {
  if (people.length === 0) return <p>No data</p>;

  let oldest = people[0];
  let youngest = people[0];

  people.forEach(p => {
    if (p.age > oldest.age) oldest = p;
    if (p.age < youngest.age) youngest = p;
  });

  return (
    <div>
      <h2>Oldest and Youngest</h2>
      <p>Oldest: {oldest.name} ({oldest.age})</p>
      <p>Youngest: {youngest.name} ({youngest.age})</p>
    </div>
  );
}

export default OldestAndYoungest;
