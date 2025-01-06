# Password Generator

This is a simple password generator application built with React. It allows users to generate secure passwords with customizable options for length, inclusion of numbers, special characters, and uppercase letters.

## Features

- Generate passwords of varying lengths (6-100 characters)
- Option to include numbers, special characters, and uppercase letters
- Copy generated password to clipboard with a single click

## Installation
 =>BASH
 1.copy repo
    git clone https://github.com/Harsh-Y3/Learn-React/edit/main/passGenrator.git
 2.go to project file
    cd passGenrator
 3.install vite and other required files
    npm install
 4.Run vite Application
    npm run dev

## Updatation
  => if you want to change the background change it from index.html file
  => if you want to change/add any other ui element, feature, logic you can change it from the app.jsx file

# what you will learned from this project

## React:
### State Management with useState:

You learned how to manage state in a functional component using the useState hook. This allowed you to track the length of the password, whether numbers, special characters, and uppercase letters should be included, and the generated password itself.

### Memoization with useCallback:

Using the useCallback hook, you optimized the performance by memoizing the password generator function, ensuring it doesn’t get recreated on every render unless its dependencies change.

### Lifecycle Management with useEffect:

You utilized the useEffect hook to run the password generation function whenever the dependencies (length, numberAllow, charAllow, strUpper) change. This demonstrated how to manage side effects in a React component.

### Event Handling:

You handled various events, such as input range change, checkbox toggling, and button clicks, demonstrating how to interact with and update the component state based on user actions.

### Component Structure:

Structuring your component with JSX, including using conditional rendering and embedding styles/classes, helped you understand how to build and organize React components efficiently.

## Tailwind CSS:
### Utility-First Approach:

Tailwind CSS encourages a utility-first approach, where you apply predefined classes directly in your JSX to style components. This method is different from writing separate CSS files.

### Responsive Design:

You've seen how Tailwind classes can make responsive design straightforward. With classes like w-[30rem], h-[150px], and text-center, you can easily control the layout and appearance of your components.

### Custom Styling:

You learned how to apply custom styles using classes like bg-gradient-to-r, text-slate-900, and backdrop-blur-sm, which allowed you to create visually appealing effects without writing custom CSS.

### Flexbox and Grid:

Using Tailwind’s flexbox utilities like flex, items-center, and justify-center, you arranged elements efficiently, demonstrating how to use modern CSS layout techniques.

### Hover and Focus States:

Though not explicitly covered in your code, Tailwind provides utilities for handling hover, focus, and other states, allowing you to create interactive elements easily
