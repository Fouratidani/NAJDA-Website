import '../assets/Footer.css';
const SocialsSection = () => {
  return (
    <section className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <h4 style={{marginLeft:'1.8rem'}}>Info</h4>
          <ul className="links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Compressions</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Collection</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 style={{marginLeft:'1.8rem'}}>Explore</h4>
          <ul className="links">
            <li><a href="#">Free Designs</a></li>
            <li><a href="#">Latest Designs</a></li>
            <li><a href="#">Themes</a></li>
            <li><a href="#">Popular Designs</a></li>
            <li><a href="#">Art Skills</a></li>
            <li><a href="#">New Uploads</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 style={{marginLeft:'1.8rem'}}>Legal</h4>
          <ul className="links">
            <li><a href="#">Customer Agreement</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">GDPR</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Media Kit</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>
            Subscribe to our newsletter for a weekly dose
            of news, updates, helpful tips, and exclusive offers.
          </p>
          <form action="#">
            <input type="email" placeholder="Your email" required />
            <button type="submit">SUBSCRIBE</button>
          </form>
          <div className="icons">
            <a href="#" className="text-white me-3"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white me-3"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white me-3"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="text-white"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialsSection;
