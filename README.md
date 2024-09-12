# React JS

<details>
<summary>About React JS</summary>

## About React Js
- ReactJS is a JavaScript library for building user interfaces
- ReactJS is declarative, efficient, and flexible
- It is fast and component-based
- It was initially developed and maintained by Facebook
- React breaks web elements down into reusable components making it easy to mange complex web interfaces.
- React's Virtaul DOM is a JavaScript representation of the actual DOM. When updates are made React compares the current DOM to the virtual DOM and only updates the differences between the two.

## Components
- Components are the foundation upon which you build user interfaces(UI)
- It is the Building blocks of user interface
- In a React app, every piece of UI is a component
- A React component is a JavaScript function that you can sprinkle with markup except:
    - Their names always begin with a capital letter.
    - They return JSX markup
- Each component exists in the same space but works independently
- Splits UI into independent and reusable pieces
- All of the components are being merged in a parent component (the final UI)
- Acceptsinput called props (optional) and returns react element
- Reusable having their own structure and methods


#### 4 ways to define components
- similar in look, different in data
- container component
- No common pattern, but breakdown for working purpose
- Stand-alone component

#### How to Build a Component?
- Export the component
- Define the function
    ```jsx
    export default function Profile() {

    }
    ```
- Add markup
    ```jsx
    retrun (
        <img
            src="https://image.jpg"
            alt="image"
        />
    )
    ```
- Whole component:
    ```jsx
    export default function Profile() {
        retrun (
            <img
                src="https://image.jpg"
                alt="image"
            />
        )
    }
    ```
    without parentheses, any code on the lines after return will be ignored!

#### Advantages of Components
- Code reusability
- Rast development
- Design consistency
- Maintainability (update just one component & get result in all spaces realted to this component)
</details>

# Start React with Vite

+ npm create vite@latest project-name -- --template react
+ for proceed press (y)
After that
+ using cd enter the project folder
+ then --> npm install (Create node_modules folder)
+ for run --> npm run dev or npx vite
+ for build --> npm run build or npx vite build (create dist folder)


# Application Running Process:
+ After run project: npx vite --> from main.jsx 

### Folder Structure
+ node_modules
+ public
+ src
    + assets
        + css
        + images
    + pages
    + component


## VS code extension
+ npm intellisense
+ ESLint
+ Auto import- ES6, JSX, TSX.
+ Auto Tag
+ Auto Rename tag
+ Path intelliense
+ Postman
+ Prettier - code formater
+ Snipped
+ Tailwind CSS IntelliSense
+ Vscode react refactor
+ vscode-icons