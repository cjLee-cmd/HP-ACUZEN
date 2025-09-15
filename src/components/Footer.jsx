import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { name: 'GitHub', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Instagram', url: '#' },
  ];

  return (
    <footer className="footer">
      <div className="footer-bg"></div>
      <div className="container">
        <div className="footer-content">
          <h2 className="sr-only">Footer Navigation and Information</h2>
          <div className="brand-section">
            <div className="logo">
              <div className="logo-icon">A</div>
              <span className="logo-text">{t('acuzenic')}</span>
            </div>
            <p className="brand-motto">{t('footer.brand_motto')}</p>
            <Newsletter />
          </div>

          <div className="links-grid">
            <LinkSection title={t('footer.links.pv_services')} links={[
              { href: '#services', label: t('footer.links.integration') },
              { href: '#services', label: t('footer.links.signal_detection') },
              { href: '#services', label: t('footer.links.automation') },
              { href: '#services', label: t('footer.links.compliance') },
            ]} />
            <LinkSection title={t('footer.links.platform')} links={[
              { href: '#about', label: t('footer.links.about') },
              { href: '#portfolio', label: t('footer.links.features') },
              { href: '#contact', label: t('footer.links.contact') },
              { href: '#', label: t('footer.links.partnership') },
            ]} />
            <div className="social-section">
              <h3 className="section-title">{t('footer.social_media')}</h3>
              <div className="social-links" role="list">
                {socialLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.url} 
                    className="social-link" 
                    aria-label={`Visit our ${link.name} page`}
                    role="listitem"
                  >
                    {link.name.charAt(0)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

const Newsletter = () => {
  const { t } = useTranslation();
  return (
    <div className="newsletter">
      <h3 className="newsletter-title" id="newsletter-title">{t('footer.newsletter.title')}</h3>
      <p className="newsletter-subtitle">{t('footer.newsletter.subtitle')}</p>
      <form 
        className="input-group"
        aria-labelledby="newsletter-title"
        role="form"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          {t('footer.newsletter.email_label', 'Email address for newsletter')}
        </label>
        <input 
          type="email" 
          id="newsletter-email"
          name="email"
          placeholder={t('footer.newsletter.placeholder')} 
          className="email-input"
          aria-required="true"
          aria-describedby="newsletter-title"
          aria-label={t('footer.newsletter.email_label', 'Email address for newsletter')}
        />
        <button 
          type="submit"
          className="subscribe-button"
          aria-describedby="newsletter-title"
        >
          {t('footer.newsletter.subscribe')}
        </button>
      </form>
    </div>
  );
};

const LinkSection = ({ title, links }) => (
  <div>
    <h3 className="section-title">{title}</h3>
    <ul className="link-list">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} className="footer-link">{link.label}</a>
        </li>
      ))}
    </ul>
  </div>
);

LinkSection.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
};

export default Footer;
