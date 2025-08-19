# PeerPathway Tutors

## Overview
PeerPathway Tutors is a platform designed to connect students with qualified tutors. This project aims to build a Minimum Viable Product (MVP) using Next.js, TypeScript, and Tailwind CSS.

## Features
- **Home Page**: A welcoming hero section with a tagline and call-to-action buttons.
- **Tutors Index**: A page displaying a list of available tutors with subject chips and individual tutor cards.
- **Tutor Detail Page**: Detailed profiles of tutors with an embedded scheduling feature.
- **Payments Page**: Information on pricing and payment options integrated with Stripe.
- **Contact Form**: A form for inquiries that submits data to an API endpoint.
- **Become a Tutor**: An application form for potential tutors to apply.
- **Policies**: Static pages for terms of service, privacy policy, consent, and refund policy.

## Getting Started
1. Clone the repository:
   ```
   git clone https://github.com/TrenchDawg/ppt.git
   ```
2. Navigate to the project directory:
   ```
   cd ppt
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Set up environment variables in `.env.local`:
   ```
   NEXT_PUBLIC_STRIPE_SINGLE=your_single_payment_key
   NEXT_PUBLIC_STRIPE_FIVEPACK=your_five_pack_key
   NEXT_PUBLIC_STRIPE_TENPACK=your_ten_pack_key
   NEXT_PUBLIC_OPS_EMAIL=your_ops_email@example.com
   ```
5. Run the development server:
   ```
   npm run dev
   ```

## Build
To build the project for production, run:
```
npm run build
```

## License
This project is licensed under the MIT License. See the LICENSE file for details.