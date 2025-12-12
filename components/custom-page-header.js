class CustomPageHeader extends HTMLElement {
    constructor()
{
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    position: relative;
                    z-index: 1000;
                }

                .header {
                    background: var(--nero, #fff);
                    width: 100%;
                    color: transparent;
                    position: relative;
                }

                :host([transparent]) .header {
                    background: transparent;
                    border-bottom: none;
                    color: white;
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
                    background: #fff;
                    position: relative;
                    z-index: 1002;
                }

                :host([transparent]) .nav-container {
                    background: transparent;
                }

                .logo-img img { height: 14px; width: auto; display: block; filter: none; }

                :host([transparent]) .logo-img img { filter: brightness(0) invert(1); }

                .nav-list { display: flex; align-items: center; list-style: none; padding: 0; margin: 0; gap: 15px; }
                .nav-item { display: flex; align-items: center; }

                .nav-button, .nav-link {
                    font-family: 'Nuckle', 'Inter', sans-serif;
                    font-weight: 600; font-size: 16px; line-height: 1.25; letter-spacing: 0.05em;
                    text-transform: uppercase; color: var(--heavy-metal, #141615);
                    background: none; border: none; cursor: pointer; display: flex; align-items: center;
                    gap: 5px; text-decoration: none; padding: 10px; white-space: nowrap;
                }

                :host([transparent]) .nav-button, :host([transparent]) .nav-link { color: #fff; }

                .nav-button::after { content: ''; width: 10px; height: 6px; background-size: contain; background-repeat: no-repeat; }

                .nav-controls { display: flex; align-items: center; gap: 15px; }

                .control-btn { position: relative; background: none; border: none; cursor: pointer; display: flex; align-items: center; width: 32px; height: 32px; }
                .control-btn img { height: 100%; width: 100%; object-fit: contain; filter: none; }
                :host([transparent]) .control-btn img { filter: brightness(0) invert(1); }

                .cart-badge { position: absolute; top: -4px; right: -4px; background-color: var(--heavy-metal, #141615); color: var(--nero, #fff); border-radius: 50%; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; font-family: 'Nuckle', 'Inter', sans-serif; font-size: 11px; font-weight: 600; line-height: 1; }

                .language-dropdown { position: relative; }

                .language-menu { position: absolute; top: calc(100% + 10px); right: 0; background-color: var(--nero, #fff); border: 1px solid rgba(0,0,0,0.1); border-radius: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); min-width: 180px; padding: 8px 0; display: none; z-index: 1003; opacity: 0; transform: translateY(-10px); transition: opacity 0.2s ease, transform 0.2s ease; }
                .language-menu.active { display: block; opacity: 1; transform: translateY(0); }
                .language-menu-item { display: flex; align-items: center; gap: 12px; padding: 12px 20px; font-family: 'Nuckle', 'Inter', sans-serif; font-size: 14px; font-weight: 400; color: var(--heavy-metal, #141615); text-decoration: none; cursor: pointer; transition: background-color 0.2s ease; }
                .language-menu-item:hover { background-color: var(--gallery, #F0F0F0); }
                .language-menu-item.active { background-color: var(--gallery, #F0F0F0); font-weight: 600; }
                .language-menu-item img { width: 20px; height: 20px; object-fit: contain; }

                .hamburger-btn { display: none; background: none; border: none; cursor: pointer; flex-direction: column; justify-content: space-around; width: 24px; height: 24px; padding: 0; margin-left: 15px; z-index: 1003; }
                .hamburger-line { width: 100%; height: 2px; background-color: var(--heavy-metal, #141615); transition: all 0.3s linear; }
                :host([transparent]) .hamburger-line { background-color: #fff; }

                @media screen and (max-width: 992px) {
                    .nav-container { padding: 0 20px; }
                    .hamburger-btn { display: flex; }

                    .nav-list {
                        display: none; position: absolute; top: 60px; left: 0; width: 100%;
                        background-color: #ffffff; flex-direction: column; align-items: flex-start; padding: 20px 0; border-bottom: 1px solid rgba(0,0,0,0.1); box-shadow: 0 10px 15px rgba(0,0,0,0.05); z-index: 1001;
                    }

                    :host([transparent]) .nav-list { background-color: rgba(0,0,0,0.85); border-bottom: 1px solid rgba(255,255,255,0.08); box-shadow: 0 10px 25px rgba(0,0,0,0.45); }
                    :host([transparent]) .nav-item { border-bottom-color: rgba(255,255,255,0.06); }
                    :host([transparent]) .nav-button, :host([transparent]) .nav-link { color: #ffffff; }

                    .nav-list.active { display: flex; }
                    .nav-item { width: 100%; border-bottom: 1px solid #f0f0f0; }
                    .nav-button, .nav-link { width: 100%; padding: 15px 30px; font-size: 16px; justify-content: space-between; }
                    .logo-img img { height: 12px; }
                    .nav-controls { gap: 5px; }
                }
            </style>

            <header class="header">
                <nav class="nav">
                    <div class="nav-container">
                        <a href="/" class="logo-img" href="../../Index.html">
                            <img src="../../Images/Logo.png" alt="Veloretti Logo" loading="eager">
                        </a>

                        <ul class="nav-list" id="main-nav">
                            <li class="nav-item"><a href="../../Pages/Electric/Electric.html" class="nav-link">Electric</a></li>
                            <li class="nav-item"><a href="../../Pages/Cities/Cities.html" class="nav-link">City</a></li>
                            <li class="nav-item"><a href="../../Pages/Kids/Kids.html" class="nav-link">kids</a></li>
                            <li class="nav-item"><a href="../../Pages/Products/Products.html" class="nav-link">Stores</a></li>
                        </ul>

                        <div class="nav-controls">
                            <div class="language-dropdown">
                                <button class="control-btn language-btn" id="language-trigger">
                                    <img src="../../Images/en.svg" alt="page language" loading="eager">
                                </button>
                                <div class="language-menu" id="language-menu">
                                    <a href="#" class="language-menu-item active" data-lang="en">
                                        <img src="../../Images/en.svg" alt="English" loading="eager">
                                        <span>English</span>
                                    </a>
                                    <a href="#" class="language-menu-item" data-lang="nl"><span>Nederlands</span></a>
                                    <a href="#" class="language-menu-item" data-lang="de"><span>Deutsch</span></a>
                                    <a href="#" class="language-menu-item" data-lang="fr"><span>Français</span></a>
                                </div>
                            </div>
                            <button class="control-btn account-btn" OnClick="window.location.href='../../Pages/Profile/Profile.html'"><img src="../../Images/person.svg" alt="Account settings" loading="eager"></button>
                            <button class="control-btn cart-btn" OnClick="window.location.href='../../Pages/Cart/Cart.html'"><img src="../../Images/purshase.svg" alt="Shopping cart" loading="eager"><span class="cart-badge">1</span></button>

                            <button class="hamburger-btn" id="mobile-menu-trigger"><span class="hamburger-line"></span><span class="hamburger-line"></span><span class="hamburger-line"></span></button>
                        </div>

                    </div>
                </nav>
            </header>
        `;
    }



    /* making the header interactive for mobile */
    connectedCallback()
    {
        const hamburger = this.shadowRoot.getElementById('mobile-menu-trigger');
        const navList = this.shadowRoot.getElementById('main-nav');
        const languageTrigger = this.shadowRoot.getElementById('language-trigger');
        const languageMenu = this.shadowRoot.getElementById('language-menu');



        hamburger.addEventListener('click', () =>
    {
            navList.classList.toggle('active');
        });



        // Language selection
        if (languageTrigger && languageMenu) {

            // Toggle menu on button click
            languageTrigger.addEventListener('click', (e) => {
                e.stopPropagation();
                languageMenu.classList.toggle('active');
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!this.shadowRoot.contains(e.target)) {
                    languageMenu.classList.remove('active');
                }
            }, true);



        }
    }
}

customElements.define('custom-page-header', CustomPageHeader);