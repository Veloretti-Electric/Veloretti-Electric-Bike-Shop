/**
 * Custom Element: <custom-footer>
 */
class CustomFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
        <style>
            /* --- DESKTOP STYLES (Original) --- */
            :host {
                display: block;
                width: 100%;
            }

            .footer {
                background: var(--heavy-metal, #141615);
                color: var(--nero, #fff);
                width: 100%;
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
                flex: 1; /* Allow text to take available space */
            }

            .footer-custom-text p {
                font-family: 'Nuckle', 'Inter', sans-serif;
                font-weight: 400;
                font-size: 0.9rem; /* Slightly larger for readability */
                line-height: 1.5;
                color: var(--nero, #fff);
                margin: 0;
            }

            .button-wrap {
                display: flex;
                align-items: center;
            }

            .btn-footer {
                padding: 14.6px 30px 14.4px;
                height: 50px;
                background: var(--nero, #fff);
                border: 1px solid var(--black, #000);
                border-radius: 60px;
                font-family: 'Nuckle', 'Inter', sans-serif;
                font-weight: 600;
                font-size: 14px;
                line-height: 1.486;
                text-align: center;
                color: var(--black, #000);
                cursor: pointer;
                white-space: nowrap;
                transition: all 0.3s ease;
            }

            .btn-footer:hover {
                background: var(--heavy-metal, #141615);
                color: var(--nero, #fff);
                border-color: var(--nero, #fff); /* Fixed border color on hover */
            }

            .footer-container {
                display: flex;
                background-color: #141615; /* Fixed typo */
                padding: 40px 42px 0;
                max-width: 1440px;
                margin: 0 auto;
                flex-wrap: wrap;
            }

            .footer-menus {
                display: flex;
                padding: 26px 42px 60px 0; /* Adjusted padding */
                flex: 1;
                gap: 80px;
                flex-wrap: wrap;
            }

            .footer-menu-item {
                display: flex;
                flex-direction: column;
                min-width: 120px; /* Ensures columns don't squash too much */
            }

            .widget-title {
                font-family: 'Nuckle', 'Inter', sans-serif;
                font-weight: 600;
                font-size: 20px;
                line-height: 1.5;
                color: var(--gallery, #eee);
                margin-bottom: 14px;
                margin-top: 0;
            }

            .footer-list {
                list-style: none;
                display: flex;
                flex-direction: column;
                gap: 0;
                padding: 0;
                margin: 0;
            }

            .footer-list li {
                margin-bottom: 14px;
            }

            .footer-list a {
                font-family: 'Nuckle', 'Inter', sans-serif;
                font-weight: 500;
                font-size: 14px;
                line-height: 1.5;
                color: var(--nero-60, #999);
                text-decoration: none;
                transition: color 0.3s;
            }
            
            .footer-list a:hover {
                color: #fff;
            }

            .footer-email-subscription {
                flex: 0 0 400px;
                min-width: 300px;
                padding: 26px 0 121.8px; /* Removed side padding to align right */
            }

            .subscription-text-container {
                margin-bottom: 10px;
            }

            .subscription-title {
                font-family: 'Nuckle', 'Inter', sans-serif;
                font-weight: 600;
                font-size: 20px;
                line-height: 1.5;
                color: var(--nero, #fff);
                margin-bottom: 10px;
                margin-top: 0;
            }

            .subscription-description {
                font-family: 'Nuckle', 'Inter', sans-serif;
                font-weight: 500;
                font-size: 14px;
                line-height: 1.5;
                color: var(--nero, #fff);
                margin-bottom: 20px;
                margin-top: 0;
            }

            .subscription-form-container {
                display: flex;
                border: 1px solid var(--nero, #fff);
                border-radius: 80px;
                padding: 2px;
                margin-bottom: 30px;
                overflow: hidden;
                background: transparent;
            }

            .subscription-input {
                flex: 1;
                padding: 15px 20px;
                border: none;
                background: transparent;
                color: var(--nero, #fff);
                font-family: 'Nuckle', 'Inter', sans-serif;
                font-weight: 500;
                font-size: 14px;
                outline: none;
            }

            .subscription-input::placeholder {
                color: var(--nero, #bbb);
            }

            .subscription-button {
                padding: 0 30px;
                height: 50px;
                background: var(--nero, #fff);
                border: none;
                border-radius: 50px; /* rounded button inside container */
                font-family: 'Nuckle', 'Inter', sans-serif;
                font-weight: 600;
                font-size: 14px;
                text-align: center;
                color: var(--black, #000);
                cursor: pointer;
                transition: all 0.3s ease;
                white-space: nowrap;
            }

            .subscription-button:hover {
                background: var(--gallery, #ddd);
            }

            .subscription-privacy {
                padding: 10px 0 0;
            }

            .footer-checkbox {
                display: flex;
                gap: 10px;
                padding: 0;
                align-items: flex-start;
            }

            .footer-checkbox input[type="checkbox"] {
                margin-top: 4px;
                accent-color: #fff;
            }

            .footer-checkbox label {
                font-family: 'Roboto', sans-serif;
                font-weight: 400;
                font-size: 12px;
                line-height: 1.5;
                color: var(--nero, #fff);
                cursor: pointer;
            }

            .social-icons {
                display: flex;
                gap: 20px;
                padding-top: 20px;
                align-items: center;
            }

            .social-icons img {
                width: 24px;
                height: 24px;
                filter: invert(1); /* Ensure icons are white if they are black pngs */
            }

            /* ============================
               RESPONSIVE MEDIA QUERY 
               ============================ */
            @media screen and (max-width: 992px) {
                /* Top Section (Test Ride) */
                .footer-custom-wrapper {
                    flex-direction: column;
                    gap: 30px;
                    padding: 20px;
                    text-align: center;
                }

                .footer-custom-text {
                    max-width: 100%;
                }

                .button-wrap {
                    width: 100%;
                    justify-content: center;
                }

                /* Main Footer Links */
                .footer-container {
                    flex-direction: column;
                    padding: 20px 20px 40px;
                }

                .footer-menus {
                    width: 100%;
                    padding: 0 0 40px 0;
                    gap: 40px;
                    justify-content: space-between; /* Spread columns nicely */
                }

                .footer-menu-item {
                    width: 45%; /* Two columns on tablet */
                    min-width: 140px;
                }

                /* Subscription Section */
                .footer-email-subscription {
                    flex: auto;
                    width: 100%;
                    padding: 0;
                    border-top: 1px solid rgba(255,255,255,0.1);
                    padding-top: 40px;
                }

                .join-the-ride-widget {
                    max-width: 100%;
                }

                .subscription-form-container {
                    width: 100%;
                    box-sizing: border-box;
                }
            }

            /* Extra Small Screens (Phones) */
            @media screen and (max-width: 480px) {
                .footer-menu-item {
                    width: 100%; /* Single column on phone */
                    align-items: center;
                    text-align: center;
                }
                
                .footer-list {
                    align-items: center;
                }

                .subscription-text-container, 
                .social-icons {
                    justify-content: center;
                    text-align: center;
                }
                
                .subscription-button {
                    padding: 0 20px; /* Smaller button padding */
                }
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
                        <form class="subscription-form" onsubmit="event.preventDefault()">
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
                            <a href="https://www.facebook.com/Veloretti/" target="_blank" rel="noopener"><img src="../../Images/facebook-svgrepo-com.svg" alt="Facebook" loading="lazy"></a>
                            <a href="https://www.instagram.com/veloretti/" target="_blank" rel="noopener"><img src="../../Images/instagram.png" alt="Instagram" loading="lazy"></a>
                            <a href="https://www.linkedin.com/company/veloretti/" target="_blank" rel="noopener"><img src="../../Images/linkedin.png" alt="LinkedIn" loading="lazy"></a>
                            <a href="https://www.youtube.com/user/Veloretti" target="_blank" rel="noopener"><img src="../../Images/Youtube.png" alt="YouTube" loading="lazy"></a>
                            <a href="https://www.tiktok.com/@veloretti" target="_blank" rel="noopener"><img src="../../Images/tik-tok.png" alt="TikTok" loading="lazy"></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);