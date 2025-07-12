# Teacher Management UI

A modern, responsive teacher management dashboard built with [Next.js](https://nextjs.org), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com).

---

## Assignment Overview

This project was completed as a solo assignment for the **Teacher Management Interface Modernization Task**.  
The goal was to design and build a modern, user-friendly teacher management interface that improves upon the provided reference, focusing on clean UI/UX, responsiveness, and accessibility.

---

## Live Project

You can view the live project here:  
[https://teacher-management-ui-1p1n.vercel.app/](https://teacher-management-ui-1p1n.vercel.app/)

---

## Youtube Video

[https://www.youtube.com/watch?v=FdJMf2RbwRc](https://www.youtube.com/watch?v=FdJMf2RbwRc)

---

## Documentation

### Setup and Installation Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Rammiester/teacher-management-ui.git
   cd teacher-management-ui
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

### Feature Explanations

- **Dashboard:**  
  Overview of teachers, their schedules, and qualifications. Responsive grid layouts and summary cards.

- **Teachers Page:**  
  List of all teachers with their details and qualifications. Responsive cards for each teacher.

- **Schedules Page:**  
  Weekly schedule view for each teacher, displayed in a responsive grid.

- **Payments Page:**  
  Secure payment form with validation and success feedback. Optimized for mobile and desktop.

- **Add Teacher Modal:**  
  Modal form to add new teachers, with success toast and auto-close. Overlay uses a blurred, transparent background.

- **Sidebar Navigation:**  
  Persistent sidebar on desktop, collapsible hamburger menu on mobile. Responsive and accessible.

- **Tabs Component:**  
  Switch between Overview, Assignments, Attendance, and Notes. Fully responsive tab bar.

---

### Design Decisions and Rationale

- **Next.js App Router:**  
  Chosen for its modern routing, layouts, and server-side rendering capabilities.

- **TypeScript:**  
  Used throughout for type safety, maintainability, and a better development experience.

- **Tailwind CSS:**  
  Used for rapid, utility-first styling and easy responsive design.

- **Responsive Layout:**  
  All pages and components are designed mobile-first, with breakpoints for tablets and desktops.

- **Fixed Sidebar:**  
  Sidebar is always visible on desktop for quick navigation, and overlays content on mobile for space efficiency.

- **Component Reusability:**  
  UI elements like cards, tables, modals, and tabs are built as reusable components for maintainability.

- **Accessibility:**  
  Buttons and navigation are keyboard accessible and use appropriate ARIA labels.

- **Modern UI/UX:**  
  Focused on clean typography, spacing, and smooth transitions/micro-interactions for a polished user experience.

---

### Assumptions Made

- **Static Data:**  
  Teacher and schedule data are loaded from local JSON files for demonstration. In production, these would come from an API.

- **Authentication:**  
  Not implemented; assumed to be handled separately if needed.

- **Payments:**  
  The payment form is for UI demonstration only and does not process real transactions.

- **Design:**  
  The UI is inspired by modern dashboard patterns, prioritizing clarity and ease of use for school administrators.

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

## Deployment

The easiest way to deploy your Next.js app is with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## Author

This project was designed and developed by a single contributor as part of the Teacher Management Interface Modernization
