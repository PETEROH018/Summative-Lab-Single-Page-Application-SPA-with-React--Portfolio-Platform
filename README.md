## About the project
This is a single page application that displays a list of programming projects done over time. 
There is a search panel that dynamically updates the project list to show only those projects that have a title that matches the user's input.
There is also a form that allows that allows a user to add new projects by adding a title and a description.

## Project UI
# Input Form
![alt text](<Screenshot from 2026-05-02 21-55-07.png>)
# Projects Landing Page
![alt text](<Screenshot from 2026-05-02 21-55-38.png>)
## Styling
Tailwind css was used to style this project
I had to first install the tailwind core package and vite plugin by running this command: npm install tailwindcss @tailwindcss/vite
I then had to add the following lines to the vite.cofig.js file :

import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})

I then imported tailwindcss to the src/index.css file using the following line:
@import "tailwindcss";
