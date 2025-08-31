import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const sectionStyle = {
    padding: '6rem 0',
    background: 'linear-gradient(135deg, rgba(248, 250, 252, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%)'
  };

  const titleStyle = {
    marginBottom: '1rem',
    color: '#1F2937',
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '700',
    fontFamily: 'Inter, sans-serif',
    textAlign: 'center'
  };

  const subtitleStyle = {
    fontSize: '1.25rem',
    color: '#6B7280',
    marginBottom: '4rem',
    textAlign: 'center',
    fontFamily: 'Inter, sans-serif'
  };

  const contentStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    marginBottom: '2rem',
    padding: '2rem',
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '20px',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px rgba(59, 130, 246, 0.08)',
    transition: 'all 0.3s ease'
  };


  const contactInfoStyle = {
    flex: 1
  };

  const contactTitleStyle = {
    color: '#1F2937',
    marginBottom: '0.5rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    fontFamily: 'Inter, sans-serif'
  };

  const contactTextStyle = {
    color: '#6B7280',
    margin: '0',
    fontFamily: 'Inter, sans-serif'
  };

  const formWrapperStyle = {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    borderRadius: '24px',
    padding: '3rem',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px rgba(59, 130, 246, 0.1)'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  };

  const formGroupStyle = {
    display: 'flex',
    flexDirection: 'column'
  };

  const labelStyle = {
    marginBottom: '0.5rem',
    color: '#1F2937',
    fontWeight: '600',
    fontFamily: 'Inter, sans-serif'
  };

  const inputStyle = {
    padding: '1rem 1.5rem',
    border: '2px solid rgba(229, 231, 235, 1)',
    borderRadius: '12px',
    fontSize: '1rem',
    background: 'rgba(255, 255, 255, 0.9)',
    transition: 'all 0.3s ease',
    fontFamily: 'Inter, sans-serif'
  };

  const buttonStyle = {
    marginTop: '1rem',
    background: 'linear-gradient(135deg, #667eea 0%, #1E40AF 100%)',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: 'Inter, sans-serif',
    boxShadow: '0 8px 24px rgba(59, 130, 246, 0.3)'
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div className="container">
        <h2 style={titleStyle}>문의하기</h2>
        <p style={subtitleStyle}>제약·바이오 기업의 약물감시 업무 혁신을 위한 맞춤 솔루션을 상담받으세요</p>
        
        <div style={contentStyle}>
          <div>            
            <div style={{ marginTop: '2rem' }}>
              <div 
                style={contactItemStyle}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-4px)';
                  e.target.style.boxShadow = '0 16px 40px rgba(59, 130, 246, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 32px rgba(59, 130, 246, 0.08)';
                }}
              >
                <div style={contactInfoStyle}>
                  <h4 style={contactTitleStyle}>비즈니스 문의</h4>
                  <p style={contactTextStyle}>business@acuzenic.com</p>
                </div>
              </div>
              
              <div 
                style={contactItemStyle}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-4px)';
                  e.target.style.boxShadow = '0 16px 40px rgba(59, 130, 246, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 32px rgba(59, 130, 246, 0.08)';
                }}
              >
                <div style={contactInfoStyle}>
                  <h4 style={contactTitleStyle}>PV 솔루션 상담</h4>
                  <p style={contactTextStyle}>+82 2-1234-5678</p>
                </div>
              </div>
              
              <div 
                style={contactItemStyle}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-4px)';
                  e.target.style.boxShadow = '0 16px 40px rgba(59, 130, 246, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 32px rgba(59, 130, 246, 0.08)';
                }}
              >
                <div style={contactInfoStyle}>
                  <h4 style={contactTitleStyle}>본사</h4>
                  <p style={contactTextStyle}>서울시 강남구 테헤란로 123 AI타워 15층</p>
                </div>
              </div>
            </div>
          </div>

          <div style={formWrapperStyle}>
            <form onSubmit={handleSubmit} style={formStyle}>
              <div style={formGroupStyle}>
                <label htmlFor="name" style={labelStyle}>이름</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3B82F6';
                    e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(229, 231, 235, 1)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              
              <div style={formGroupStyle}>
                <label htmlFor="email" style={labelStyle}>이메일</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3B82F6';
                    e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(229, 231, 235, 1)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              
              <div style={formGroupStyle}>
                <label htmlFor="message" style={labelStyle}>메시지</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="PV 업무 현황 및 필요한 솔루션에 대해 구체적으로 설명해 주세요..."
                  style={{...inputStyle, resize: 'vertical'}}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3B82F6';
                    e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(229, 231, 235, 1)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                style={buttonStyle}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 12px 32px rgba(59, 130, 246, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.3)';
                  }
                }}
              >
                {isSubmitting ? '전송중...' : '전송하기'}
              </button>
              
              {submitStatus === 'success' && (
                <div style={{ 
                  padding: '1rem', 
                  borderRadius: '12px', 
                  textAlign: 'center', 
                  fontWeight: '600',
                  background: 'rgba(34, 197, 94, 0.1)',
                  color: '#059669',
                  border: '1px solid rgba(34, 197, 94, 0.2)',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  메시지가 성공적으로 전송되었습니다!
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div style={{ 
                  padding: '1rem', 
                  borderRadius: '12px', 
                  textAlign: 'center', 
                  fontWeight: '600',
                  background: 'rgba(239, 68, 68, 0.1)',
                  color: '#dc2626',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  전송 중 오류가 발생했습니다. 다시 시도해주세요.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;