/**
 * Custom Element: <custom-page-header>
 * * This component encapsulates the header's structure (HTML),
 * styles (CSS), and any necessary client-side behavior into a single file.
 */
class CustomFooter extends HTMLElement {
    constructor() {
        super();
        
        // Create a Shadow Root to encapsulate the component's styles and markup.
        // This ensures the header CSS doesn't bleed out and the main page CSS
        // doesn't affect the header, creating a truly isolated component.
        this.attachShadow({ mode: 'open' }); 

        // Define the combined CSS and HTML template using a template literal.
        this.shadowRoot.innerHTML = `
         <!-- Footer -->

    
    <style>
        
    </style>
    <footer class="footer">
        <div class="footer-background">
            <div class="footer-custom-wrapper">
                <div class="footer-custom-text">
                    <p>Ready to take the Electric Ivy or Ace for a spin? Electric test rides are now available in Amsterdam, Amstelveen, Abcoude, Bussum, Den Haag, Nijmegen, Weesp, Wormerveer, Berlin, Hamburg and Munich. Schedule your test ride now and we'll see you there.</p>
                </div>
                <div class="button-wrap">
                    <button class="btn-footer">BOOK NOW</button>
                </div>
            </div>
        </div>
        <div class="footer-container">
            <div class="footer-menus">
                <div class="footer-menu-item">
                    <div class="explorer-widget">
                        <h3 class="widget-title">Explorer</h3>
                        <ul class="footer-list">
                            <li><a href="#">Electric bikes</a></li>
                            <li><a href="#">City bikes</a></li>
                            <li><a href="#">Kids' bikes</a></li>
                            <li><a href="#">Accessories</a></li>
                            <li><a href="#">Outlet</a></li>
                            <li><a href="#">Business</a></li>
                            <li><a href="#">Insurance Electric</a></li>
                            <li><a href="#">Size guide</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-menu-item">
                    <div class="about-widget">
                        <h3 class="widget-title">About</h3>
                        <ul class="footer-list">
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Journal</a></li>
                            <li><a href="#">Reviews</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Jobs</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-menu-item">
                    <div class="help-widget">
                        <h3 class="widget-title">Help</h3>
                        <ul class="footer-list">
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Delivery</a></li>
                            <li><a href="#">Assembly & manuals</a></li>
                            <li><a href="#">Payment options</a></li>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Terms & conditions</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-email-subscription">
                <div class="join-the-ride-widget">
                    <div class="subscription-text-container">
                        <h3 class="subscription-title">Join the ride.</h3>
                        <p class="subscription-description">Sign up for our newsletter.</p>
                    </div>
                    <form class="subscription-form">
                        <div class="subscription-form-container">
                            <input type="email" placeholder="Enter your email address here" class="subscription-input">
                            <button type="submit" class="subscription-button">Subscribe</button>
                        </div>
                        <div class="subscription-privacy">
                            <div class="footer-checkbox">
                                <input type="checkbox" id="privacy-check">
                                <label for="privacy-check">By signing up, I agree to the privacy policy of Veloretti.</label>
                            </div>
                        </div>
                    </form>
                    <div class="social-icons">
                        <a href="#"><img src="Images/instagram.png" alt="Instagram"></a>
                        <a href="#"><img src="Images/linkedin.png" alt="LinkedIn"></a>
                        <a href="#"><img src="Images/Youtube.png" alt="YouTube"></a>
                        <a href="#"><img src="Images/tik-tok.png" alt="TikTok"></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
           
            `;
    }

    
}


customElements.define('custom-footer', CustomPageHeader);