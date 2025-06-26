# Milestone Project 3 - Silas Cove

![Mockup of website](docs/images/space-scramble-mockup.webp)

# Table of Contents
1. [Project description](#project-description)
2. [User Experience (UX)](#user-experience-ux)
3. [Design choices](#design-choices)
4. [Wireframes](#wireframes)
5. [Features](#features)
6. [Testing](#testing)
7. [Fixed bugs](#fixed-bugs)
8. [Deployment](#deployment)
9. [Credits](#credits)
 
 ## Project description
 
This project was created for Unit 3: Back End Development and is centered around building a full-stack web application for **Silas Cove**, my family's beach bar. The aim was to design and develop a dynamic website that provides an engaging experience for visitors while also offering a functional table booking system for both lunch and dinner services.

The front-end is built with accessibility and visual appeal in mind, featuring a clean layout, and mobile responsiveness to ensure a smooth user experience across all devices. Users can view information about the business, contact the business, and make reservations through an integrated booking form.

On the back-end, a Python-based system captures and sends user booking data directly to a Google Sheet, allowing staff to view and manage reservations in real time. This connection demonstrates the practical use of back-end logic and data handling as taught in the course.

Although Silas Cove is a real business, the focus of this project is to apply what I’ve learned so far in web development, from designing an intuitive front end to implementing server-side processing that would supports a real-world use case.

 [Return to Table of Contents](#table-of-contents)

 ## User experience (UX)
 
 ### Project Goals
 1. **Ensure mobile-first, responsive design:** Build the site to be fully functional across all screen sizes, from mobile phones to tablets and desktops—so that guests can book or browse comfortably on any device.

 2. **Support accessibility and inclusivity:** Follow web accessibility guidelines to ensure all users, regardless of ability, can access and use the website with ease.
 
 3. **Develop a user-friendly booking experience:** Create a smooth, intuitive system that allows customers to easily reserve tables for lunch or dinner at Silas Cove, with clear form inputs and confirmation messages.
 
 4. **Integrate a functional back-end system:** Connect the front-end reservation form to a Google Sheets-powered back-end using Python, allowing real-time tracking of bookings for bar staff without the need for a database.
 
 5. **Encourage customer trust and ease-of-use:** Include clear feedback throughout the booking process (e.g., required fields, success messages) to reduce confusion and build user confidence when using the site.
 
 ### Silas Cove's goals
 
 1. **Deliver a welcoming and interactive user journey:** Create a website that allows users to reserve lunch or dinner tables at Silas Cove with real-time form submission and seamless backend data handling.
 
 2. **Facilitate smooth table reservations:** Create a website that allows users to reserve lunch or dinner tables at Silas Cove with real-time form submission and seamless backend data handling.
 
 3. **Prioritise user experience and accessibility:** Implement a mobile-first design that adapts to all screen sizes and follows accessibility best practices, so all users can comfortably navigate the site on any device.

 ### User stories
 | No. | User Story |
 |-----|------------|
 | 1 | As a **customer**, I want to easily book a lunch or dinner table online so that I can plan my visit to Silas Cove in advance. <br><br>**Task:** Develop a user-friendly  reservation form that collects all necessary booking details and stores them securely. |
 | 2 | As a **mobile user**, I want the website to be fully responsive so that I can make bookings and browse Silas Cove easily on any device. <br><br>**Task:** Implement responsive design to ensure smooth functionality on smartphones, tablets, and desktops. |
 | 3 | As a **first-time visitor**, I want clear and accessible information about Silas Cove’s location, menu, and opening hours so that I can decide when and where to visit. <br><br>**Task:** Create an informative contact page with business details and an interactive map. |
 | 4 | As a **returning customer**, I want to view, update, or cancel my existing bookings so that I have control over my reservations. <br><br>**Task:** Build a backend system to allow users to manage their bookings easily and securely. |
 | 5 | As a **user with accessibility needs**, I want the website to be easy to navigate and compatible with assistive technologies so that I can use the site comfortably. <br><br>**Task:** Ensure the website meets accessibility standards, including keyboard navigation and screen reader support. |

 [Return to Table of Contents](#table-of-contents)

 ## Design choices
 The Silas Cove website design is inspired by the inviting, laid-back atmosphere of a family-run beach bar. The aim is to create a warm, approachable look with clean typography and a coastal colour scheme that reflects the natural surroundings.
 
 ### Typography choices
 **Primary Font:** Poppins
 Poppins is used for headings and key elements. Its modern, geometric style offers a friendly and contemporary feel, helping to create a welcoming and easy-to-navigate interface.
 
 **Secondary Font:** Merriweather
 Merriweather is applied to body text for its classic style, which complements Poppins by adding a touch of elegance and improving readability in longer paragraphs.
 
 ### Colour palette
 The colour palette centres on a rich dark blue (#113859) representing the deep ocean, paired with a warm burnt orange (#f38b10) that evokes the sunset and adds vibrancy. White (#ffffff) is used as a highlight colour to ensure text and interface elements stand out clearly, creating a fresh and clean overall look.

[Return to Table of Contents](#table-of-contents)

## Wireframes
For Silas Cove, I used Balsamiq to create the wireframes shown below. These wireframes outline the planned layout of the website, serving as a blueprint to guide development and ensure the design prioritises the user experience.

### Home page design
![Index page wireframe](docs/images/index-wireframe.webp)

### About us page design
![Modal wireframe](docs/images/modal-wireframe.webp)

### Menu page design
![Modal wireframe](docs/images/modal-wireframe.webp)

### Bookings page design
![Modal wireframe](docs/images/modal-wireframe.webp)

### Bookings Success page design
![Modal wireframe](docs/images/modal-wireframe.webp)

### Contact Us page design
![Modal wireframe](docs/images/modal-wireframe.webp)

### Contact Us Success page design
![Modal wireframe](docs/images/modal-wireframe.webp)

### 404 page design
![Modal wireframe](docs/images/modal-wireframe.webp)


[Return to Table of Contents](#table-of-contents)

## Features
### Home page
The home page serves as the first point of interaction for users, designed to be engaging, visually appealing, and welcoming to showcase Silas Cove's coastal charm:

- Visually engaging design including Hero section: Features the compelling tagline "Relax. Sip. Savour." with imagery that immediately captures the restaurant's seaside location and atmosphere.
- Responsive layout: The page is optimized for desktop, tablet, and mobile users, ensuring visitors can access information seamlessly across all devices.
- Clear call-to-action: Encourages users to explore further sections of the site.
 ![Home page screenshot](docs/images/features-homepage.webp)

 ### Navigation Bar 
Clean, intuitive navigation system that provides seamless site exploration:

- Consistent design: Navigation remains uniform across all pages, maintaining Silas Cove's coastal branding and professional appearance.
- Responsive functionality: Menu adapts elegantly to different screen sizes, with mobile-friendly navigation options for smaller devices.
 ![Instructions screenshot](docs/images/features-instructions.webp)

### About page 
Comprehensive information about Silas Cove's story, values, and dedication to Cornwall's coastal culinary tradition:

- Restaurant story: Details about the establishment's commitment to sustainability, local sourcing, and creating memorable seaside dining experiences.
- Location highlights: Information about the restaurant's prime position with sweeping vistas of Cornwall's dramatic coastline and proximity to golden sands.
- Team values: Emphasis on friendly, down-to-earth service and the warm Cornish welcome that defines the Silas Cove experience.
 ![Instructions screenshot](docs/images/features-instructions.webp)

### Menu page 
The menu page presents "the flavour of Silas Cove" with visual menu displays:

- Welcoming introduction: Features the tagline "where the sea breeze inspires every bite and sip" to establish the coastal dining atmosphere and philosophy.
- Visual menu images: Two menu slides displayed as images showing the actual food and drink offerings, allowing visitors to see the restaurant's complete menu selection.
 ![Instructions screenshot](docs/images/features-instructions.webp)

 ### Bookings page 
The bookings page provides clear information about securing a table at Silas Cove with straightforward reservation guidelines:

- Service hours: Clearly displays lunch service (12pm — 3pm) and dinner service (5:30pm — 8pm) to help visitors plan their dining experience.
- Reservation policy: Provides practical booking guidance, recommending reservations at least 24 hours in advance for guaranteed seating.
- Group dining information: Special instructions for larger groups to contact the restaurant directly for appropriate arrangements.
 ![Instructions screenshot](docs/images/features-instructions.webp)

 ### Contact page 
The contact page features a warm, conversational approach that reflects Silas Cove's friendly personality and Cornish hospitality:

- Welcoming tone: Opens with inclusive messaging for visitors "planning a visit to the Cornish coast" and encourages various reasons for contact including menu questions or just saying hello.
- Multiple contact options: Mentions phone and email availability while maintaining the casual, friendly tone with "whichever suits you best."
- Reliability assurance: Emphasises consistent availability "rain or shine" and enthusiasm for customer communication.
 ![Instructions screenshot](docs/images/features-instructions.webp)

### 404 Error Page
The 404 error page provides a helpful, user-friendly experience when users navigate to an invalid page.

- **Error message:** A clear and simple message tells the user they have encountered a broken link or non-existent page and automatically return to the homepage.
 ![404 page screenshot](docs/images/features-404.webp)

[Return to Table of Contents](#table-of-contents)

 ## Testing

### User Stories Testing  
Each user story was carefully tested to ensure that the Space Scramble game and website meet the expectations of users. The following table summarizes the user stories, their testing outcomes, and the supporting evidence of successful implementation.

| No. | User Story | Pass/Fail | Evidence |
| --- | ---------- | --------- | -------- |
| 1 | As a **player**, I want a visually appealing game page so that I am excited to play the game. | Pass | The homepage is designed with a vibrant space theme that engages users right from the start. The design elements like cosmic backgrounds and dynamic UI components are visually striking and exciting to interact with. |
| 2 | As a **new user**, I want to understand how to play Space Scramble so that I can start playing right away. | Pass | Simple, easy-to-follow instructions are accessible at any point during the game, providing a clear explanation of the gameplay mechanics and how to interact with the game. |
| 3 | As a **mobile user**, I want the game to be fully responsive so that I can play on any device. | Pass | The game adapts seamlessly to all devices, ensuring that the layout and functionality are optimised for mobile, tablet, and desktop use without any issues. |
| 4 | As a **player**, I want sound effects so that the game feels more immersive. | Pass | Background audio was added, making the gameplay more immersive and interactive. |
| 5 | As a **mobile user**, I want the website to be fully responsive so that I can access it seamlessly on any device. | Pass | The website layout automatically adjusts to all screen sizes, ensuring a smooth and consistent experience on mobile, tablet, and desktop devices. The navigation remains user-friendly across all platforms. |
| 6 | As a **user** with accessibility needs, I want the game to be accessible so that I can play comfortably. | Pass | The game follows accessibility best practices, including high contrast, larger font sizes, and keyboard navigation. The site passes accessibility tests, ensuring users with visual or mobility impairments can comfortably engage with the game. |

### Testing Feedback  
The testing phase validated that the game and website are both functional and accessible for all users. 

Here is some additional feedback from the physical testing process by users:
- Enhancing audio options, such as volume control or different sound themes, to cater to more diverse user preferences.
- Add a score system to keep tabs of progress.
- Could add difficulty level button

### Validator testing
- **HTML**
    - Index page: No errors were returned when passing through the official W3C validator<br> https://validator.w3.org/nu/?doc=https%3A%2F%2Fnaomihunt25.github.io%2Fspace-scramble%2Findex.html
    - 404 page: No errors were returned when passing through the official W3C validator<br> https://validator.w3.org/nu/?doc=https%3A%2F%2Fnaomihunt25.github.io%2Fspace-scramble%2F404
- **CSS**
    - No issues were found after validating through the official Jigsaw validator<br> https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fnaomihunt25.github.io%2Fspace-scramble%2Fassets%2Fcss%2Fstyle.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en
- **JSHint**
 - Index page: No errors were returned when passing through the official JSHint validator<br> 
 ![JSHint result](docs/images/jshint-script.webp)

### Accessibility testing
I used Lighthouse within the Google DevTools to review the colours and fonts used. Additionally, Lighthouse provides insights into other key areas like Performance, SEO, and Best Practices. <br>
![lighthouse result](docs/images/lighthouse-index.webp)

### Manual testing
- I performed cross-browser testing to ensure the website operates smoothly on various browsers.
- The site was tested on different screen sizes to verify it adapts well, maintaining both its design and functionality across devices.
- The text and fonts were reviewed for clarity and readability to provide an optimal user experience. <br>

Below are some screenshots demonstrating how the site looks on different devices.

### Desktop
|Chrome 131|Safari 18.3|Firefox 133.0|
| ------------- | ------------- | ------------- |
|![chrome index page](docs/images/chrome-index.webp)|![safari index page](docs/images/safari-index.webp)|![firefox index page](docs/images/firefox-index.webp)|

### Mobile and tablet
|Mobile - Safari iOS 18.3|
| ------------- |
|![Safari ios mobile index page](docs/images/ios-mobile.webp)|


|Android mobile - Chrome 131|
| ------------- | 
|![Android mobile index page](docs/images/android-mobile.webp)|

|Tablet - Safari iOS 18.3|
| ------------- | 
|![Safari ios tablet index page](docs/images/tablet-index.webp)|

[Return to Table of Contents](#table-of-contents)

### Fixed bugs
#### Bug 1
Fixed button classes so script file could find them<br><br>
*Original code*:<br>
```html
<button type="new-word" class="btn custom-button-outline">New word
<button type="submit" class="btn custom-button-outline">Submit word
```
*New code*:<br>
```html
<button type="new-word" class="new-word btn custom-button-outline">New word
<button type="submit" class="submit btn custom-button-outline">Submit word
```
#### Bug 2
Moved scrambledWord above wordText to correct dependency order<br><br>
*Original code*:<br>
```js
let wordArray = randomObj.word.split("");
         wordText.innerText = wordArray.join("");
         hintText.innerText = randomObj.hint;
         scrambleWord(wordArray);
```
*New code*:<br>
```js
let wordArray = randomObj.word.split("");
         scrambleWord(wordArray);
         wordText.innerText = wordArray.join("");
         hintText.innerText = randomObj.hint;
```
#### Bug 3
Stopped any previously running timers<br><br>
*Original code*:<br>
```js
timeLeft = 20; 
timeText.innerText = timeLeft; 
```
*New code*:<br>
```js
clearInterval(timer); 
timeLeft = 20; 
timeText.innerText = timeLeft; 
```
[Return to Table of Contents](#table-of-contents)

### Deployment
**GitHub Pages**  
The website is hosted on GitHub Pages. To deploy it, follow these steps:
1. Create an account on [Gitpod](https://gitpod.io/).
2. Install the Gitpod browser extension.
3. Go to the *Settings* tab in the [naomihunt25/space-scramble repository](https://github.com/naomihunt25/space-scramble) on GitHub.
4. In the left sidebar, click *Pages* under the code and automation section.
5. Under *Branch*, select "main" and click *Save*.
6. After saving, the page will display a link under the deployment section in the [naomihunt25/space-scramble repository](https://github.com/naomihunt25/space-scramble). Click the *github-pages* link.
7. The Deployment page will show the live site URL. Click on the link to view the deployed website.

**Fork**  
To fork the repository:
1. On [Gitpod](https://gitpod.io/), go to the [naomihunt25/space-scramble repository](https://github.com/naomihunt25/space-scramble).
2. Click the *Fork* button at the top-right of the page.
3. Add a description for your fork.
4. Click *Create Fork* to finish the process.

**Clone**  
To clone the repository:
1. On the [naomihunt25/space-scramble repository](https://github.com/naomihunt25/space-scramble), click the *Code* button above the list of files.
2. Copy the repository URL.
3. Open your terminal and navigate to the directory where you want to clone the project.
4. Run `git clone` followed by the copied URL.
5. Press enter to clone the repository.

Live link - [Space Scramble](https://naomihunt25.github.io/space-scramble/)

[Return to Table of Contents](#table-of-contents)

### Credits
#### Content
- I used [Bootstrap](https://getbootstrap.com/) v5.3 to build essential components of the site, such as buttons and modals.
- TTo improve my understanding of HTML and CSS that I was unsure about before implementation, I used [W3Schools](https://www.w3schools.com/) for additional support.

### Colour palette
- I utilised [ColorSpace](https://mycolor.space/?hex=%233F0676&sub=1) to get inspiration for the colour palette for the site.

### Fonts
- I used [Fontjoy](https://fontjoy.com/) to find my primary and secondary font
- The primary and secondary font were sourced from [Google Fonts](https://fonts.google.com/)

### Media
#### Icons
- Mute and unmute icons were taken from [Font Awesome](https://fontawesome.com/)
- Personalised favicon were generated by [favicon.io](https://favicon.io/)

#### Images and Audio
- The background image was sourced from [Canva](https://www.Canva.com/)
- Background area was created by Nemeti_Tivdar and sources from [Pixabay](https://pixabay.com/music/supernatural-space-message-113176/)
- I created wireframes using the [Balsamiq](https://balsamiq.com/) software

 [Return to Table of Contents](#table-of-contents)