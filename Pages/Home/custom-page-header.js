/**
 * Custom Element: <custom-page-header>
 * * This component encapsulates the header's structure (HTML),
 * styles (CSS), and any necessary client-side behavior into a single file.
 */
class CustomPageHeader extends HTMLElement {
    constructor() {
        super();
        
        // Create a Shadow Root to encapsulate the component's styles and markup.
        // This ensures the header CSS doesn't bleed out and the main page CSS
        // doesn't affect the header, creating a truly isolated component.
        this.attachShadow({ mode: 'open' }); 

        // Define the combined CSS and HTML template using a template literal.
        this.shadowRoot.innerHTML = `
            <style>
                /* START: Header CSS (Encapsulated inside the Shadow DOM) */
                :host {
                    /* Allows the custom element to behave like a block/flex container */
                    display: block; 
                }
                
                /* NOTE: Since this is inside Shadow DOM, we are using the original classes */
                .header {
                    background: var(--nero, #fff); /* Added fallback for var() */
                    width: 100vw;
                }
                
                .nav-container {
                    max-width: 1440px;
                    margin: 0 auto;
                    padding: 0 42px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 49px;
                    width: 100%;
                }
                
                .nav {
                    display: flex;
                    width: 100%;
                    align-items: center;
                    justify-content: center;
                }
                
                .nav ul li {
                    margin: 1vh 1vw;
                }
                
                .nav a img {
                    margin-left: 1vh;
                }
                
                .logo-img {
                    height: 11.63px;
                    width: auto;
                }
                
                .nav-list {
                    display: flex;
                    align-items: center; 
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                
                .nav-item {
                    display: flex;
                    align-items: center;
                    padding: 18.5px 7.9px 15.5px;
                }
                
                .nav-button, .nav-link {
                    font-family: 'Nuckle', 'Inter', sans-serif;
                    font-weight: 600;
                    font-size: 12px;
                    line-height: 1.25;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    color: var(--heavy-metal, #141615); /* Added fallback */
                    background: none;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 4.63px;
                    text-decoration: none;
                }
                
                .nav-button::after {
                    content: '';
                    width: 10.79px;
                    height: 5.39px;
                    /* NOTE: Background image URL is retained, but check path context */
                    background-image: url("data:image/svg+xml,%3Csvg width='11' height='6' viewBox='0 0 11 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5.5 5L10 1' stroke='%23141615' stroke-width='2'/%3E%3C/svg%3E");
                    background-size: contain;
                    background-repeat: no-repeat;
                }
                
                .nav-controls {
                    display: flex;
                    align-items: center;
                    margin-right: 50px;
                }
                
                .control-btn {
                    padding: 20px;
                    background: none;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    color: var(--heavy-metal, #141615); /* Added fallback */
                }
                
                .language-btn .label {
                    font-family: 'Nuckle', 'Inter', sans-serif;
                    font-weight: 600;
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                /* END: Header CSS */
            </style>

            <header class="header">
                <nav class="nav">
                    <div class="nav-container">

                        <a href="/" class="logo-img">
                            <img src="../../Images/Logo.png" alt="Veloretti Logo">
                        </a>
                        <ul class="nav-list">
                            <li class="nav-item">
                                <button class="nav-button">Electric</button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-button">City</button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-button">Kids</button>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Accessories</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Stores</a>
                            </li>
                            <li class="nav-item">
                                <button class="nav-button">Leasing</button>
                            </li>
                        </ul>

                    </div>
                    <div class="nav-controls">
                        <button class="control-btn language-btn">
                             <img src="../../Images/en.png" alt="page language">
                        </button>
                        <button class="control-btn account-btn">
                             <img src="../../Images/person-account.png" alt="Account settings">
                        </button>
                        <button class="control-btn cart-btn">
                             <img src="../../Images/purshase.png" alt="Shopping cart">
                        </button>
                    </div>
                </nav>
            </header>
            `;
    }

    // You can add more lifecycle methods here if the component needs behavior
    // like event listeners or data fetching.
    // Example: connectedCallback() { /* logic here */ }
}

// Register the custom element tag with the browser
customElements.define('custom-page-header', CustomPageHeader);