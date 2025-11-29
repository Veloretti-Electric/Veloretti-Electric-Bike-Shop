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
        .footer {
    background: var(--heavy-metal);
    color: var(--nero);
}

.footer-background {
    background-color: #404243;
    background-size: cover;
    background-position: center;
    padding: 40px 42px;
}

.footer-custom-wrapper {
    display: flex;
    gap: 60px;
    align-items: flex-start;
    max-width: 1440px;
    margin: 0 auto;
    flex-wrap: wrap;
}

.footer-custom-text {
    max-width: 720px;
}

.footer-custom-text p {
    font-family: 'Nuckle', 'Inter', sans-serif;
    font-weight: 400;
    font-size: 0.7rem;
    line-height: 1.5;
    color: var(--nero);
    margin: 0;
}

.button-wrap {
    display: flex;
    align-items: center;
}

.btn-footer {
    padding: 14.6px 30px 14.4px;
    height: 50px;
    background: var(--nero);
    border: 1px solid var(--black);
    border-radius: 60px;
    font-family: 'Nuckle', 'Inter', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.486;
    text-align: center;
    color: var(--black);
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.3s ease;
}

.btn-footer:hover {
    background: var(--heavy-metal);
    color: var(--nero);
    border-color: var(--heavy-metal);
}

.footer-container {
    display: flex;
    backgroud-color:#141615
    padding: 40px 42px 0;
    max-width: 1440px;
    margin: 0 auto;
    flex-wrap: wrap;
}

.footer-menus {
    display: flex;
    padding: 26px 42px 60px 42px;
    flex: 1;
    gap: 80px;
    flex-wrap: wrap;
}

.footer-menu-item {
    display: flex;
    flex-direction: column;
}

.widget-title {
    font-family: 'Nuckle', 'Inter', sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.5;
    color: var(--gallery);
    margin-bottom: 14px;
}

.footer-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0;
}

.footer-list li {
    margin-bottom: 14px;
}

.footer-list a {
    font-family: 'Nuckle', 'Inter', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.5;
    color: var(--nero-60);
}

.footer-email-subscription {
    flex: 0 0 400px;
    min-width: 300px;
    padding: 26px 21px 121.8px;
}

.subscription-text-container {
    margin-bottom: 10px;
}

.subscription-title {
    font-family: 'Nuckle', 'Inter', sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.5;
    color: var(--nero);
    margin-bottom: 20px;
}

.subscription-description {
    font-family: 'Nuckle', 'Inter', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.5;
    color: var(--nero);
    margin-bottom: 20px;
}

.subscription-form-container {
    display: flex;
    border: 1px solid var(--nero);
    border-radius: 80px;
    padding: 1px;
    margin-bottom: 30px;
    overflow: hidden;
}

.subscription-input {
    flex: 1;
    padding: 20.5px 2px 16.5px;
    border: none;
    border-radius: 80px;
    background: transparent;
    color: var(--nero);
    font-family: 'Nuckle', 'Inter', sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.2;
    text-align: center;
}

.subscription-input::placeholder {
    color: var(--nero);
}

.subscription-button {
    padding: 14.59px 30px 14.41px;
    min-width: 120px;
    height: 50px;
    background: var(--nero);
    border: none;
    border-left: 1px solid var(--nero);
    border-radius: 0 80px 80px 0;
    font-family: 'Nuckle', 'Inter', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.486;
    text-align: center;
    color: var(--black);
    cursor: pointer;
    transition: all 0.3s ease;
    flex-shrink: 0;
}

.subscription-button:hover {
    background: var(--gallery);
}

.subscription-privacy {
    padding: 30px 0 0;
}

.footer-checkbox {
    display: flex;
    gap: 10px;
    padding: 0 25px;
    align-items: flex-start;
}

.footer-checkbox input[type="checkbox"] {
    width: 25px;
    height: 20px;
    padding: 20px;
    margin-top: 2px;
}

.footer-checkbox label {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    color: var(--nero);
    padding-left: 5px;
}

.social-icons {
    display: flex;
    gap: 23px;
    padding-top: 8.5px;
    align-items: flex-end;
}

.social-icons a {
    display: flex;
    align-items: center;
}

.social-icons img {
    width: auto;
    height: auto;
    max-width: 24px;
    max-height: 24px;
}
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
                        <a href="#"><img src="../../Images/instagram.png" alt="Instagram"></a>
                        <a href="#"><img src="../../Images/linkedin.png" alt="LinkedIn"></a>
                        <a href="#"><img src="../../Images/Youtube.png" alt="YouTube"></a>
                        <a href="#"><img src="../../Images/tik-tok.png" alt="TikTok"></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
           
            `;
    }

    
}


customElements.define('custom-footer', CustomFooter);