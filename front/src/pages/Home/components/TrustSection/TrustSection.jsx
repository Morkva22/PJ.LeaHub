export default function TrustSection() {
    return (
        <section style={{ padding: '100px 24px', textAlign: 'center', background: '#fff' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '40px', marginBottom: '40px' }}>Trusted by thousands of neurodivergent minds</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', opacity: 0.6 }}>
                    {[1,2,3,4,5,6].map(i => (
                        <div key={i} style={{ height: '80px', background: '#eee', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            Logo {i}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}