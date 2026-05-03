import './Contact.css';

const Contact = () => {
  return (
    <section className="page-container container">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-wrapper">
        <div className="glass-card contact-card">
          <h3 className="contact-heading">Let's Connect</h3>
          <p className="contact-description">
            I'm currently open to new opportunities, internships, and collaborative projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <a href="mailto:noahcoder11@gmail.com" className="contact-value">noahcoder11@gmail.com</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Phone:</span>
              <a href="tel:+18052924169" className="contact-value">(805) 292-4169</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Location:</span>
              <span className="contact-value">Ojai, CA 93023</span>
            </div>
          </div>
          
          <div className="contact-action">
            <a href="mailto:noahcoder11@gmail.com" className="btn btn-primary">Say Hello</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
