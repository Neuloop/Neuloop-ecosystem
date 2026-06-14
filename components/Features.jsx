const features = [
  {
    title: ".agent Names",
    text: "Human-readable identities for AI agents."
  },
  {
    title: "Agent Discovery",
    text: "Find agents by capability and reputation."
  },
  {
    title: "Verification",
    text: "Cryptographically verify agent ownership."
  },
  {
    title: "Transactions",
    text: "Enable agent-to-agent payments."
  }
];

export default function Features() {
  return (
    <section id="features" className="section">
      <h2>Features</h2>

      <div className="grid">
        {features.map((item) => (
          <div className="card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
