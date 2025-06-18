import './App.css';
import EX4 from './components/EX4';
import EX5 from './components/EX5';
import EX6 from './components/EX6';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ border: "2px solid #007bff", borderRadius: 10, padding: 20, marginBottom: 24, background: "#f8f9fa" }}>
          <h2 style={{ color: "#212529" }}>EX4: Input Validation</h2>
          <EX4 />
        </div>
        <div style={{ border: "2px solid #28a745", borderRadius: 10, padding: 20, marginBottom: 24, background: "#f8f9fa" }}>
          <h2 style={{ color: "#212529" }}>EX5: Email & Password Validation</h2>
          <EX5 />
        </div>
        <div style={{ border: "2px solid #ffc107", borderRadius: 10, padding: 20, background: "#f8f9fa" }}>
          <h2 style={{ color: "#212529" }}>EX6: Complex Form Validation</h2>
          <EX6 />
        </div>
      </header>
    </div>
  );
}

export default App;
