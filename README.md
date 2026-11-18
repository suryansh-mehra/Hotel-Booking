# Bookify
 
Bookify is a responsive hotel booking web app where users can explore featured destinations, browse rooms, view room details with an image gallery, and manage their bookings. Authentication is handled with Clerk.
 
**Live Demo:** [https://your-bookify-link.vercel.app](https://bookify-psi-ten.vercel.app/)
 
## Features
 
- Home page with a hero search section, featured destinations, exclusive offers, guest testimonials and a newsletter section
- All Rooms page with a filter panel (room type, price range, sort options)
- Room Details page with a clickable image gallery, amenities, price per night and a check-availability form
- My Bookings page listing a user's past and upcoming reservations
- Hotel registration popup form
- User sign-in and sign-up with Clerk
- Navbar that changes style on scroll, with a mobile menu
- Fully responsive layout built with Tailwind CSS
## Tech Stack
 
- React.js
- Vite
- Tailwind CSS
- React Router
- Clerk (authentication)
- Deployed on Vercel
## Getting Started
 
### 1. Clone the repository
 
```bash
git clone https://github.com/suryansh-mehra/Hotel-Booking.git
cd Hotel-Booking
```
 
### 2. Install dependencies
 
```bash
npm install
```
 
### 3. Add environment variables
 
Create a `.env` file in the root folder and add your Clerk publishable key:
 
```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```
 
You can get this key from the [Clerk dashboard](https://clerk.com).
 
### 4. Run the app
 
```bash
npm run dev
```
 
The app will start at `http://localhost:5173`.
 
### 5. Build for production
 
```bash
npm run build
```
 
## Project Structure
 
```
src/
├── assets/        # Images, icons and dummy data
├── components/    # Reusable components (Navbar, Footer, HotelCard, StarRating, ...)
└── pages/         # Page components (Home, AllRooms, RoomDetails, MyBookings, ...)
```
 
## Deployment
 
The project is deployed on Vercel. A `vercel.json` file is included so that routes like `/rooms` and `/my-bookings` keep working on page refresh.
 
## Note
 
The app currently runs on dummy data, so there is no backend or database connected yet. Features like booking and filtering are UI-only for now.
 
## Author
 
**Suryansh Mehra**
GitHub: [@suryansh-mehra](https://github.com/suryansh-mehra)
 
