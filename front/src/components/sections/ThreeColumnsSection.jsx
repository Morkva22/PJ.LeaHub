export default function ThreeColumnsSection() {
    const columns = [
        { title: "Neurodivergent minds", desc: "ADHD, autism, dyslexia — we get it", emoji: "brain" },
        { title: "Freelancers & students", desc: "Honest time tracking, no stress", emoji: "target" },
        { title: "100 % Open Source", desc: "No subscriptions. Forever free.", emoji: "heart", special: true }
    ]

    return (
        <section style={{ padding: '100px 20px', background: '#f9f9f9' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                {columns.map((col, i) => (
                    <div key={i} style={{ background: 'white', padding: '2.5rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                        <div style={{
                            width: '80px', height: '80px',
                            background: col.special ? '#FF6B6B20' : '#50C87820',
                            borderRadius: '50%', margin: '0 auto 1.5rem',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px'
                        }}>
                            {col.special ? '♥' : '✦'}
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>{col.title}</h3>
                        <p style={{ color: '#555' }}>{col.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}