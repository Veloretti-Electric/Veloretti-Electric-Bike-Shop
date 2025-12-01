/**
 * Custom Element: <custom-page-header>
 */
class CustomPageHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                /* START: Header CSS */
                :host {
                    display: block;
                    width: 100%;
                    position: relative;
                    z-index: 1000;
                }

                .header {
                    background: var(--nero, #fff);
                    width: 100%;
                    border-bottom: 1px solid rgba(0,0,0,0.1);
                    position: relative; /* Needed for absolute menu positioning */
                }

                .nav-container {
                    max-width: 1440px;
                    margin: 0 auto;
                    padding: 0 42px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 60px;
                    width: 100%;
                    box-sizing: border-box;
                    background: #fff; /* Ensure background is solid */
                    position: relative;
                    z-index: 1002; /* Higher than the dropdown menu */
                }

                /* LOGO */
                .logo-img img {
                    height: 14px;
                    width: auto;
                    display: block;
                }

                /* NAVIGATION LINKS (Desktop) */
                .nav-list {
                    display: flex;
                    align-items: center;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    gap: 15px;
                }

                .nav-item {
                    display: flex;
                    align-items: center;
                }

                .nav-button, .nav-link {
                    font-family: 'Nuckle', 'Inter', sans-serif;
                    font-weight: 600;
                    font-size: 12px;
                    line-height: 1.25;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    color: var(--heavy-metal, #141615);
                    background: none;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    text-decoration: none;
                    padding: 10px;
                    white-space: nowrap;
                }

                .nav-button::after {
                    content: '';
                    width: 10px;
                    height: 6px;
                    background-image: url("data:image/svg+xml,%3Csvg width='11' height='6' viewBox='0 0 11 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5.5 5L10 1' stroke='%23141615' stroke-width='2'/%3E%3C/svg%3E");
                    background-size: contain;
                    background-repeat: no-repeat;
                }

                /* ICONS */
                .nav-controls {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                
                .control-btn {
                    
                  
                    background-color:none;
                    background: none;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                }

                .control-btn img {
                    height: 100%;
                    width: 100%;
                  
                }

                /* HAMBURGER MENU ICON */
                .hamburger-btn {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                    flex-direction: column;
                    justify-content: space-around;
                    width: 24px;
                    height: 24px;
                    padding: 0;
                    margin-left: 15px;
                    z-index: 1003;
                }

                .hamburger-line {
                    width: 100%;
                    height: 2px;
                    background-color: var(--heavy-metal, #141615);
                    transition: all 0.3s linear;
                }

                /* ============================
                   RESPONSIVE MEDIA QUERY 
                   ============================ */
                @media screen and (max-width: 992px) {
                    .nav-container {
                        padding: 0 20px;
                    }

                    .hamburger-btn {
                        display: flex;
                    }

                    /* MOBILE MENU STYLING */
                    .nav-list {
                        display: none; /* Hidden by default */
                        position: absolute;
                        top: 60px; /* Push it below the header bar */
                        left: 0;
                        width: 100%;
                        background-color: #ffffff;
                        flex-direction: column; /* Stack items vertically */
                        align-items: flex-start;
                        padding: 20px 0;
                        border-bottom: 1px solid rgba(0,0,0,0.1);
                        box-shadow: 0 10px 15px rgba(0,0,0,0.05);
                        z-index: 1001;
                    }

                    /* CLASS TO SHOW MENU (Toggled by JS) */
                    .nav-list.active {
                        display: flex;
                    }

                    /* Style items in the mobile dropdown */
                    .nav-item {
                        width: 100%;
                        border-bottom: 1px solid #f0f0f0;
                    }

                    .nav-button, .nav-link {
                        width: 100%;
                        padding: 15px 30px; /* Big click area */
                        font-size: 14px;
                        justify-content: space-between; /* Move arrow to right */
                    }

                    .logo-img img { height: 12px; }
                    .language-btn { display: none; }
                    .nav-controls { gap: 5px; }
                }
            </style>

            <header class="header">
                <nav class="nav">
                    <div class="nav-container">

                        <a href="/" class="logo-img">
                            <img src="../../Images/Logo.png" alt="Veloretti Logo">
                        </a>

                        <ul class="nav-list" id="main-nav">
                            <li class="nav-item"><button class="nav-button">Electric</button></li>
                            <li class="nav-item"><button class="nav-button">City</button></li>
                            <li class="nav-item"><button class="nav-button">Kids</button></li>
                            <li class="nav-item"><a href="#" class="nav-link">Accessories</a></li>
                            <li class="nav-item"><a href="#" class="nav-link">Stores</a></li>
                            <li class="nav-item"><button class="nav-button">Leasing</button></li>
                        </ul>

                        <div class="nav-controls">
                            <button class="control-btn language-btn">
                                <img src="../../Images/en.svg" alt="page language">
                            </button>
                            <button class="control-btn account-btn">
                                <img src="../../Images/person.svg" alt="Account settings">
                            </button>
                            <button class="control-btn cart-btn">
                                <img src="../../Images/purshase.svg" alt="Shopping cart">
                            </button>

                            <button class="hamburger-btn" id="mobile-menu-trigger">
                                <span class="hamburger-line"></span>
                                <span class="hamburger-line"></span>
                                <span class="hamburger-line"></span>
                            </button>
                        </div>

                    </div>
                </nav>
            </header>
        `;
    }

    connectedCallback() {
        const hamburger = this.shadowRoot.getElementById('mobile-menu-trigger');
        const navList = this.shadowRoot.getElementById('main-nav');
        
        // Add click listener
        hamburger.addEventListener('click', () => {
            // Toggle the 'active' class on the list
            navList.classList.toggle('active');
        });
    }
}

customElements.define('custom-page-header', CustomPageHeader);