import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  return (
    <section id="contact" className="section-padding" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title" className="section-title">{t('contact.title')}</h2>
        <p className="section-subtitle">{t('contact.subtitle')}</p>
        
        <div className="contact-grid">
          <div className="contact-info">
            <ContactInfoItem title={t('contact.biz_inquiry')} detail="business@acuzenic.com" />
            <ContactInfoItem title={t('contact.solution_consulting')} detail="+82 2-1234-5678" />
            <ContactInfoItem title={t('contact.headquarters')} detail={t('contact.address_detail')} />
          </div>

          <div className="form-wrapper">
            <form 
              onSubmit={handleSubmit} 
              className="contact-form"
              noValidate
              aria-labelledby="contact-form-title"
            >
              <div className="sr-only" id="contact-form-title">
                {t('contact.form.title', 'Contact Form')}
              </div>
              <div className="form-group">
                <label htmlFor="name" className="form-label">{t('contact.form.name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  aria-required="true"
                  aria-describedby="name-error"
                  aria-label={t('contact.form.name')}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">{t('contact.form.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  aria-required="true"
                  aria-describedby="email-error"
                  aria-label={t('contact.form.email')}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">{t('contact.form.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder={t('contact.form.placeholder')}
                  className="form-textarea"
                  aria-required="true"
                  aria-describedby="message-error"
                  aria-label={t('contact.form.message')}
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="submit-button"
                aria-describedby={submitStatus ? 'form-status' : undefined}
              >
                {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
              </button>
              
              {submitStatus === 'success' && (
                <div 
                  id="form-status"
                  className="form-status-message success"
                  role="status"
                  aria-live="polite"
                >
                  {t('contact.form.success')}
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div 
                  id="form-status"
                  className="form-status-message error"
                  role="alert"
                  aria-live="assertive"
                >
                  {t('contact.form.error')}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfoItem = ({ title, detail }) => (
  <div className="contact-item">
    <div className="contact-item-info">
      <h3 className="contact-item-title">{title}</h3>
      <p className="contact-item-text">{detail}</p>
    </div>
  </div>
);

ContactInfoItem.propTypes = {
  title: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
};

export default Contact;
