export default function CtaSection() {
    return (
        <section style={{ padding: '120px 24px', textAlign: 'center', background: 'linear-gradient(135deg, #50C878, #FF6B6B)' }}>
            <h2 style={{ fontSize: '48px', color: 'white', marginBottom: '20px' }}>Ready to work differently?</h2>
            <p style={{ fontSize: '22px', color: 'white', marginBottom: '40px', opacity: 0.9 }}>
                Join thousands who manage projects without burning out
            </p>
            <a href="/signup" style={{ background: 'white', color: '#FF6B6B', padding: '16px 40px', borderRadius: '12px', fontSize: '18px', fontWeight: '600', textDecoration: 'none' }}>
                Start Free → No Credit Card Needed
            </a>
        </section>
    )
}