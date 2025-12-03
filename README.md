Veloretti Electric Bike Shop 
Complete Project Description & Workflows 
�
� Project Overview 
Project Name: Veloretti Electric Bike Shop 
Type: Static Marketing Website with E-commerce Functionality 
Status: Active Development (Frontend Complete, Backend Pending) 
Technology: HTML5, CSS3, Vanilla JavaScript, Web Components 
Repository: C:\Veloretti-Electric-Bike-Shop 
What is Veloretti? 
Veloretti is a premium electric bicycle brand offering a comprehensive digital platform that serves two primary markets: 
1. B2C (Business-to-Consumer): Individual customers purchasing electric bikes, city bikes, and kids bikes for personal use 
2. B2B (Business-to-Business): Companies setting up employee bike leasing programs 
The website showcases award-winning electric bicycle designs, facilitates online purchasing, and enables employer bike plan 
registrations. 
�
� Business Goals 
Primary Objectives 
 Drive Online Sales: Increase e-commerce conversions for bike purchases 
 Generate B2B Leads: Capture employer inquiries for bike leasing programs 
 Brand Positioning: Establish Veloretti as a premium, sustainable mobility brand 
 Customer Education: Inform users about benefits of electric bikes and leasing options 
Target Markets 
 Geographic: Netherlands, Belgium, Germany (primary), expanding to other EU markets 
 Demographic: Urban professionals, ages 25-55, environmentally conscious 
 Corporate: Companies with 10-500+ employees seeking employee wellness programs 
�
� Project Structure 
Veloretti-Electric-Bike-Shop/ 
│ 
├── Index.html                      
├── shared.css                      
# Homepage (main landing page) 
# Global styles (typography, colors, utilities) 
├── shared.js                       
├── PRD.md                          
├── README.md                       
│ 
├── components/                     
# Global scripts (animations, interactions) 
# Original Product Requirements Document 
# Project documentation 
# Reusable web components 
│   ├── custom-page-header.js      # Site header (nav, logo, cart icon) 
│   └── custom-footer.js           
│ 
├── Pages/                          
# Site footer (links, social, newsletter) 
# Individual site pages 
│   ├── Home/ 
# Homepage-specific styles 
│   │   ├── Home.css               
│   │   └── Home.js                
│   │ 
│   ├── Products/ 
│   │   ├── Products.html          
│   │   ├── Products.css           
│   │   └── Products.js            
│   │ 
│   ├── Cart/ 
│   │   ├── Cart.html              
│   │   └── Cart.css               
│   │ 
│   ├── Product-Example/ 
# Homepage-specific scripts 
# Product catalog page 
# Product page styles 
# Product filtering/interaction 
# Shopping cart page 
# Cart page styles 
│   │   ├── Product-Example.html   # Product detail template 
│   │   └── Product-Example.css    # Product detail styles 
│   │ 
│   ├── Electric/ 
│   │   ├── Electric.html          
│   │   └── Electric.css 
│   │ 
│   ├── Kids/ 
│   │   ├── Kids.html              
│   │   ├── Kids.css 
│   │   └── Kids.js 
│   │ 
│   ├── Cities/ 
│   │   ├── Cities.html            
│   │   └── Cities.css 
│   │ 
│   ├── AboutUs/ 
│   │   ├── AboutUs.html           
│   │   └── AboutUs.css 
│   │ 
│   └── Profile/ 
│       
│       
├── Profile.html           
└── Profile.css 
# Electric bikes landing page 
# Kids bikes page 
# Store locations page 
# About page 
# User profile (future feature) 
│ 
└── Images/                         
# Image assets (100+ files) 
├── Product images (bikes) 
├── Marketing images 
├── Videos (.mp4) 
├── Icons (.svg) 
└── Logos and badges 
�
� Key Pages & Features 
1. Homepage (Index.html) 
Purpose: Main landing page showcasing employee bike plans and featured products 
Sections: 
 Hero Section: Value proposition and main CTA 
 Bike Plans for Employees:  
o Benefits overview (cost-free for employers, outside WKR) 
o Visual showcase with product imagery 
 Free of Charge Section: Detailed employer benefits explanation 
 How It Works: 4-step process for company registration  
1. 
2. 
3. 
4. 
Register your company 
Determine the requirements 
Ride your bike! 
Administration 
 Featured Bikes: Carousel showcasing Electric Ace Two and Ivy Two  
o Color selection options 
o Price display (€69.07 NET/MONTH) 
o Image carousels 
 Contact Form: Lead generation for employer inquiries  
o Fields: Name, Email, Phone, Company Name, Company Size, # of Bikes, Message 
 FAQ Section: Accordion-style Q&A about bike plans 
Key Features: 
 Responsive design (mobile-first) 
 Animated scroll effects (Intersection Observer) 
 Custom web components (header/footer) 
 SEO optimized (meta tags, Open Graph, Twitter Cards) 
2. Products Page (Pages/Products/Products.html) 
Purpose: Comprehensive product catalog 
Sections: 
 Hero Banner: Campaign imagery and messaging 
 Electric Bikes Grid:  
o Electric Ace Two (2 frame options) 
o Electric Ivy Two (2 frame options) 
o Features: Image carousels, color pickers, "Buy Now" CTAs 
 Explore Categories:  
o City Bikes (from €399) 
o Kids' Bikes (from €199) 
o Accessories 
 Commute Section: Marketing copy about making commuting enjoyable 
 Store Location Map: Visual map showing Veloretti locations 
 Leasing Information: Split section promoting B2B bike leasing 
 Press Testimonials: Reviews from The Verge, Bright, Vogue 
 Awards: Red Dot Design Award showcase 
 Service Information: "Ride Carefree" section about maintenance plans 
Key Features: 
 Product filtering and categorization 
 Interactive color selection 
 Responsive product grid 
 Lazy-loaded images for performance 
 Social proof (testimonials, awards) 
3. Shopping Cart (Pages/Cart/Cart.html) 
Purpose: Review and manage cart before checkout 
Sections: 
 Cart Items List:  
o Product image, name, price 
o Remove item functionality 
o Quantity adjustment (future) 
 Insurance Upsell:  
o Optional bike insurance add-on 
 Order Summary:  
o Subtotal calculation 
o Shipping costs (calculated at checkout) 
o Total price display 
 Secure Checkout Button:  
o Padlock icon for trust signal 
o "Secure checkout" messaging 
 Payment Methods Display:  
o Accepted cards: Mastercard, Visa, Klarna, PayPal 
o "100% secure checkout" badge 
 Delivery Information Link 
 Complete Your Order:  
o Accessories upsell section 
o Recommended products: locks, carriers, baskets, helmets 
Key Features: 
 Real-time price calculation 
 Responsive two-column layout 
 Trust signals (payment icons, security messaging) 
 Upselling opportunities 
4. Product Detail Page (Pages/Product-Example/Product-Example.html) 
Purpose: Detailed product information (template exists) 
Planned Features: 
 High-resolution image gallery 
 360° product view (future) 
 Technical specifications 
 Color and size selection 
 Stock availability 
 Add to cart functionality 
 Customer reviews section 
 Related products 
5. Supporting Pages 
Cities Page: Store locations and service areas 
Electric Page: Dedicated electric bike category landing 
Kids Page: Kids bike collection showcase 
About Us: Brand story, mission, values 
Profile: User account management (requires authentication) 
�
� Core User Workflows 
Workflow 1: Customer Purchase Journey 
1. User lands on homepage or products page 
↓ 
2. Browse bikes by category (Electric, City, Kids) 
↓ 
3. Click on product card to view details 
↓ 
4. View product images in carousel 
↓ 
5. Select color variant 
↓ 
6. Click "Buy Now" button 
↓ 
7. Product added to cart 
↓ 
8. Review cart contents 
↓ 
9. Optional: Add insurance 
   ↓ 
10. Optional: Add recommended accessories 
    ↓ 
11. Click "Secure Checkout" 
    ↓ 
12. Enter shipping information 
    ↓ 
13. Select payment method 
    ↓ 
14. Complete payment 
    ↓ 
15. Receive order confirmation 
Current Status: Steps 1-10 implemented (frontend). Steps 11-15 require backend. 
Workflow 2: Employer Bike Plan Registration 
1. Employer lands on homepage 
   ↓ 
2. Read "Bike Plans for Employees" section 
   ↓ 
3. Learn about benefits: 
   - Cost-free for employer 
   - Outside of WKR (Dutch tax benefit) 
   - Employee wellness program 
   ↓ 
4. View "How It Works" (4-step process) 
   ↓ 
5. Scroll to "Get in touch" section 
   ↓ 
6. Fill out contact form: 
   - Company name 
   - Contact information 
   - Company size 
   - Number of bikes needed 
   - Additional message 
   ↓ 
7. Submit inquiry 
   ↓ 
8. Form validation (client-side) 
   ↓ 
9. [Backend Required] Form submission to server 
   ↓ 
10. [Backend Required] Leasing partner receives inquiry 
    ↓ 
11. [Backend Required] Credit check performed (within 24 hours) 
    ↓ 
12. [Backend Required] Approval decision 
    ↓ 
    ├─ Approved → Grant access to digital platform 
    │  ↓ 
    │  13. Employer sets requirements for employees 
    │      ↓ 
    │  14. Share registration link with employees 
    │      ↓ 
    │  15. Employees register and choose bikes 
    │      ↓ 
    │  16. Bikes delivered to employee homes 
    │      ↓ 
    │  17. Employer manages via digital platform 
    │ 
    └─ Rejected → Send rejection notification 
Current Status: Steps 1-8 implemented (frontend). Steps 9-17 require backend and leasing partner integration. 
Workflow 3: FAQ Exploration 
1. User scrolls to FAQ section on homepage 
   ↓ 
2. View FAQ questions (accordion format) 
   ↓ 
3. Click on question to expand answer 
   ↓ 
4. Read detailed answer 
   ↓ 
5. Click again to collapse 
   ↓ 
6. Browse other questions 
Current Status: Fully implemented 
Workflow 4: Product Browsing & Filtering 
1. User visits Products page 
   ↓ 
2. View hero banner (campaign messaging) 
   ↓ 
3. Browse Electric Bikes section 
↓ 
4. Use color picker to change bike color 
↓ 
5. Click carousel arrows to view multiple product angles 
↓ 
6. Scroll to "Explore our bikes" categories 
↓ 
7. Choose category: City Bikes, Kids Bikes, or Accessories 
↓ 
8. Click "Buy Now" or "Shop Now" 
↓ 
9. Navigate to respective product page 
Current Status: Mostly implemented. Advanced filtering (price, features) not yet added. 
�
� Technical Implementation 
Frontend Technologies 
HTML5: 
 Semantic markup for SEO 
 Accessibility considerations (ARIA labels) 
 Structured data preparation 
CSS3: 
 Custom properties (CSS variables) 
 Flexbox and Grid layouts 
 Responsive design (mobile-first) 
 Smooth animations and transitions 
 Modular CSS per page 
JavaScript (Vanilla ES6+): 
 No frameworks or libraries (pure JS) 
 Intersection Observer for scroll animations 
 Form validation 
 Dynamic interactions (carousels, accordions, color pickers) 
 Module imports (defer loading) 
Web Components: 
 Custom Elements API 
 Shadow DOM for encapsulation 
 Reusable header and footer components 
Current Features 
✅ Implemented: 
 Responsive layouts (all devices) 
 Image optimization (WEBP, lazy loading) 
 SEO meta tags (per page) 
 Open Graph & Twitter Cards 
 Contact form (frontend validation) 
 Product carousels 
 Color selection UI 
 Accordion FAQ 
 Animated scroll effects 
 Shopping cart UI 
�
� Partial: 
 Product filtering (basic structure exists) 
 Cart management (no persistence) 
 Form submission (no backend) 
�
� Not Implemented (Backend Required): 
 Form submission processing 
 Payment gateway integration 
 User authentication 
 Order management 
 Inventory tracking 
 Email notifications 
 CRM integration 
 Analytics tracking setup 
Performance Optimizations 
1. Image Lazy Loading: loading="lazy" attribute 
2. Deferred JavaScript: defer attribute on script tags 
3. WEBP Format: Modern image format for smaller file sizes 
4. CSS Optimization: Modular CSS, only load what's needed 
5. Intersection Observer: Efficient scroll animations 
SEO Implementation 
On Every Page: 
 Unique meta title and description 
 Canonical URL tags 
 Robots meta tags 
 Open Graph tags (Facebook) 
 Twitter Card tags 
 Proper heading hierarchy (H1, H2, H3) 
 Alt text on images 
 Semantic HTML structure 