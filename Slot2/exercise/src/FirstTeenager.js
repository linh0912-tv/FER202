import people from './people';

function FirstTeenager() {
  const teenager = people.find(p => p.age >= 13 && p.age <= 19);

  return (
    <div>
      <h2>First Teenager</h2>
      {teenager ? (
        <p>{teenager.name} ({teenager.age}) - {teenager.occupation}</p>
      ) : (
        <p>No teenager found.</p>
      )}
    </div>
  );
}

export default FirstTeenager;
