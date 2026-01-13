Advanced Portfolio Website Documentation
**Project Overview**
The objective of this project is to design and develop an advanced, responsive portfolio website using modern CSS techniques. The project focuses on applying CSS Grid, Flexbox, CSS Variables, animations, and modular CSS architecture to create a scalable and maintainable user interface.
The portfolio showcases personal details, skills, projects, and a contact form with client-side validation. Special emphasis is placed on clean layout design, modular code structure, and user experience enhancements such as theme switching and animations.
**Setup Instructions**
Follow the steps below to run the project locally:
1.
Download or clone the project repository.
2.
Ensure the following folder structure is maintained:
index.html
css/
js/
3.
Open the project folder in VS Code.
4.
Use Live Server extension or open index.html directly in a browser.
5.
The website will load with light mode enabled by default.
6.
Click the Toggle Theme button to switch between light and dark modes.
No additional libraries or frameworks are required.
**Code Structure**
The project follows a modular file structure to improve readability and maintainability.
CSS Structure:
•
base.css – Global reset, typography, CSS variables
•
layout.css – CSS Grid and Flexbox layouts
•
components.css – Reusable UI components (buttons, cards, inputs)
•
animations.css – Transitions, hover effects, keyframe animations
•
themes.css – Light and dark theme styles
JavaScript Structure:
•
theme-switcher.js – Theme toggle logic and form validation
This separation of concerns ensures scalability and easier debugging.
**Visual Documentation**
The portfolio includes the following visible features:
•
Responsive header with navigation
•
Grid-based section layout
•
Skills displayed using flexbox pills
•
Project cards arranged using CSS Grid
•
Contact form with validation messages
•
Dark mode theme toggle
Screenshots are provided to demonstrate:
•
Light mode interface
•
Dark mode interface
•
Theme toggle functionality
Form validation errors and success messages
**Technical Details**
Advanced CSS Techniques Used
CSS Grid
Used for the main page layout and project section to create responsive, flexible layouts without media-query-heavy code.
Flexbox
Used for navigation alignment, skill tags, and form elements for consistent spacing and alignment.
CSS Variables (Custom Properties)
Defined in :root and overridden in .dark-mode to enable easy theme switching and consistent color usage.
CSS Animations and Transitions
Hover animations and entry animations enhance user experience without impacting performance.
BEM Methodology
Block–Element–Modifier naming convention ensures clarity and avoids style conflicts.
Performance Optimizations
•
Minimal DOM manipulation in JavaScript
•
CSS animations use transform and opacity for better GPU performance
•
Modular CSS reduces unused styles
•
No external libraries, reducing load time
•
LocalStorage used efficiently for theme persistence
**Testing Evidence**
Manual Test Cases
Table 0.1
Test Case
Expected Result
Status
Theme Toggle
Switches light/dark mode
Pass
Page Reload
Theme persists
Pass
Empty Form Submit
Error message shown
Pass
Invalid Email
Validation error
Pass
Valid Form Submit
Success message shown
Pass
Responsive Layout
Works on mobile & desktop
Pass
All test cases were executed manually and verified in modern browsers.
**Conclusion**
This project successfully demonstrates advanced CSS layout techniques, modular design principles, and interactive UI behavior. The implementation follows industry best practices, ensuring maintainability, scalability, and performance.
The portfolio is suitable for academic submission, interviews, and professional showcasing.