import React from 'react';
import q3 from '../../../../assets/images/q3.png';
import q4 from '../../../../assets/images/q4.png';
import q5 from '../../../../assets/images/q5.png';
import q6 from '../../../../assets/images/q6.png';
import q7 from '../../../../assets/images/q7.png';
import q8 from '../../../../assets/images/q8.png';

export default function TrustSection() {
    const logos = [q3, q4, q5, q6, q7, q8];

    return (
        <section style={{ padding: '100px 24px', textAlign: 'center', background: '#fff' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '40px', marginBottom: '40px' }}>Trusted by thousands of neurodivergent minds</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', opacity: 0.6 }}>
                    {logos.map((logo, i) => (
                        <div key={i} style={{ height: '80px', background: '#eee', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                            <img
                                src={logo}
                                alt={`Logo ${i + 3}`}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'contain',
                                    padding: '10px'
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}