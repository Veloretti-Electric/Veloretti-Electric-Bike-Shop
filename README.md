# Veloretti Electric Bike Shop

Complete project description, features, and workflows for the Veloretti frontend.

## Project Overview

- **Project Name:** Veloretti Electric Bike Shop
- **Type:** Static marketing website with e-commerce functionality (frontend)
- **Status:** Active development — frontend implemented, backend pending
- **Technology:** HTML5, CSS3, Vanilla JavaScript, Web Components
- **URL** `https://veloretti-project.netlify.app/`

Veloretti is a premium electric bicycle brand. This repository contains a frontend website that serves two main markets:

- **B2C (Business-to-Consumer):** Individual customers purchasing electric, city, and kids bikes.
- **B2B (Business-to-Business):** Companies setting up employee bike leasing programs.

The site showcases product designs, supports online purchasing (frontend), and includes employer bike plan lead capture.

## Business Goals

- **Drive online sales:** Improve e-commerce conversions for bike purchases.
- **Generate B2B leads:** Capture employer inquiries for leasing programs.
- **Brand positioning:** Present Veloretti as a premium, sustainable mobility brand.
- **Customer education:** Explain benefits of electric bikes and leasing options.

**Target markets:** Netherlands, Belgium, Germany (primary), expanding across the EU. Demographic: urban professionals (25–55), environmentally conscious. Corporate: companies of 10–500+ employees.

## Project Structure

Repository layout (abridged):

```
Veloretti-Electric-Bike-Shop/
├── Index.html
├── shared.css
├── shared.js
├── PRD.md
├── README.md
├── components/
│   ├── custom-page-header.js
│   └── custom-footer.js
├── Pages/
│   ├── Home/
│   │   ├── Home.css
│   │   └── Home.js
│   ├── Products/
│   │   ├── Products.html
│   │   ├── Products.css
│   │   └── Products.js
│   ├── Cart/
│   │   ├── Cart.html
│   │   └── Cart.css
│   ├── Product-Example/
│   │   ├── Product-Example.html
│   │   └── Product-Example.css
│   ├── Electric/
│   │   ├── Electric.html
│   │   └── Electric.css
│   ├── Kids/
│   │   ├── Kids.html
│   │   ├── Kids.css
│   │   └── Kids.js
│   ├── Cities/
│   │   ├── Cities.html
│   │   └── Cities.css
│   ├── AboutUs/
│   │   ├── AboutUs.html
│   │   └── AboutUs.css
│   └── Profile/
│       ├── Profile.html
│       └── Profile.css
└── Images/
    ├── product images
    ├── marketing images
    └── icons, logos
```

## Key Pages & Features

### 1) Homepage (`Index.html`)
**Purpose:** Landing page promoting employee bike plans and featured products.

**Sections:**
- Hero section with CTA
- Bike plans for employees (benefits and visuals)
- Employer benefits / "Free of charge" explanation
- How it works (4-step process for company registration)
- Featured bikes carousel (e.g., Electric Ace Two, Ivy Two)
- Contact / lead form (name, email, phone, company, company size, # bikes, message)
- FAQ (accordion)

**Key features:** responsive design, animated scroll effects (Intersection Observer), custom web components (header/footer), SEO meta tags.

### 2) Products Page (`Pages/Products/Products.html`)
**Purpose:** Product catalog and product discovery.

**Sections & features:** hero banner, electric bikes grid (image carousels, color pickers, "Buy Now"), categories (City, Kids, Accessories), store map, leasing info, testimonials and awards, responsive grid, lazy-loaded images.

### 3) Shopping Cart (`Pages/Cart/Cart.html`)
**Purpose:** Review and manage cart before checkout.

**Sections & features:** cart items list (image, name, price, remove), order summary (subtotal, shipping, total), secure checkout button, payment method icons, upsells (insurance, accessories).

### 4) Product Detail (`Pages/Product-Example/Product-Example.html`)
**Purpose:** Detailed product page template.

**Planned:** high-res gallery, 360° view (future), specs, color/size selection, stock, add-to-cart, reviews, related products.

### Supporting Pages
- Cities: store locations and service areas
- Electric: category landing
- Kids: kids bike collection
- About Us: brand story, mission, values
- Profile: user account (future, requires backend/auth)

## Core User Workflows

### Workflow 1: Customer Purchase Journey
1. Land on homepage or products page
2. Browse by category (Electric, City, Kids)
3. Open product details
4. View images in carousel
5. Select color variant
6. Click "Buy Now" (adds product to cart)
7. Review cart
8. Optional: add insurance or accessories
9. Click "Secure Checkout" (backend required for full flow)

**Status:** Steps 1–8 implemented on frontend. Checkout/payment require backend integration.

### Workflow 2: Employer Bike Plan Registration
1. Employer reads bike plans on homepage
2. Views "How It Works"
3. Fills contact form with company details
4. Submits inquiry (frontend validated)
5. Backend required for submission processing, leasing partner workflow, credit checks, approval, and employee registration flow

**Status:** Frontend steps implemented; backend & partner integration required.

### Workflow 3: FAQ Interaction
- Expand/collapse accordion answers; fully implemented on frontend.

### Workflow 4: Product Browsing & Filtering
- Browse products, use color picker and image carousel; advanced filtering (price, attributes) is planned.

## Technical Implementation

### Frontend technologies
- **HTML5:** semantic markup, accessibility considerations, structured data prep
- **CSS3:** custom properties (variables), Flexbox & Grid, responsive/mobile-first, modular per-page styles
- **JavaScript (ES6+):** vanilla JS, Intersection Observer animations, form validation, carousels, accordions, module loading with `defer`
- **Web Components:** custom elements for header/footer, Shadow DOM encapsulation

### Current features
- **Implemented:** responsive layouts, image optimization (WEBP + lazy loading), SEO meta tags, Open Graph/Twitter cards, frontend contact form validation, product carousels, color selection UI, accordion FAQ, shopping cart UI.
- **Partial:** product filtering structure, cart management (no persistence), form submission (no backend sink).
- **Not implemented (backend required):** form processing, payment gateway, user auth, order management, inventory, email/CRM integration, analytics setup.

### Performance optimizations
- Lazy-load images (`loading="lazy"`)
- Defer JavaScript (`defer` attribute)
- Use WEBP images where possible
- Modular CSS and only load necessary styles
- Use Intersection Observer for efficient scroll effects

### SEO
Per-page: unique meta title/description, canonical URLs, robots meta, Open Graph and Twitter cards, correct heading hierarchy, alt text on images, semantic HTML.