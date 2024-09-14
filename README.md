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


## JSX
- JSX is a syntax extension for JavaScript
- JSX stands for JavaScript XML
- Lets you write HTML- like markup inside a JavaScript file.
- Under the hood it is transformed into regular JavaScript using compilers like Bable or TypeScript

#### Rules of JSX
- Return a single root element
    - To return multiple elements from a component, wrap them with a single parent tag.
- Close all the tags
- Must use camelCase
    - class --> className
    - onclick --> onClick
    - tabindex --> tabIndex



</details>

<details>
<summary>About Props</summary>

## What are Props?
- React components use props to communicate with each other.
- Every parent component can pass some information to its child components by giving them props.
- You can pass any JavaScript value through props, including objects, arrays and functions.
- Props are unidirectional
- Props are Immutablep

#### Set value into the component using props
```jsx
// Main Function
    function FunctionName() {
        return (
            <>
                ...
                ...
                <Device name="Laptop" price="45k"></Device>
                ....
            </>
        )
    }

// Component
    function Device(props){
        return (
            <h2>Device Name: {props.name} and Price: {props.price}
        )
    }
```
#### Specifying a Default value for a Prop
```jsx
    function Avatar({person, size}){
        //.....
    }
```

#### Different values of Props
```jsx
    // 1. String literals
    <MyComponent prop="My String value"/>
    // 2. Template literals with variables
    <MyComponent prop={'My String value ${myVariable}'}/>

    // 3. Number literals
    <MyComponent prop={42} />

    // 4.Boolean literals
    <MyComponent prop={fallse} />

    // 5. Plain Obj. literals
    <MyComponent prop={{property: 'Value'}} />

    // 6.Array literals
    <MyComponent prop={['Item_1','Item_2']} />

    // 7. JSX
    <MyComponent prop={<Message who="Joker" />}/>

    // 8. Variables having any kind of value
    <MyComponent prop={myVariable}/>
```

#### Forwarding Props with JSX Spread Syntax
Without spread syntax(it's a repetitive way)

```jsx
    function Profile({person, size, isSepia}){
        return(
            <div className="card">
                <Avatar
                    person={person}
                    size={size}
                    isSepia={isSepia}
                />
            </div>
        );
    }
```

With spread syntax
```jsx
function Profile(props){
    retrun (
        <div className="card">
            <Avatar {...props}/>
        </div>
    );
}

```

</details>

<details>
<summary>File Export & Import<summary>

If we want to access any file components or information we need to export and import file.
- At first create a new file and add `export default` at the begining of the function:
    ```jsx
    export default function Todo(){
        return(
                <li>Accessing File</li>
            )
        }
    ```
- Import the file into main `App.jsx` file to access the information:
    ```jsx
    import FileName from './FileName';
    ```

</details>

<details>
<summary>React Rendering</summary>

#### Conditional Rendering Option:1
```jsx
// Todo.jsx
export default function Todo({task, isDone}){
    if(isDone === true){
        return <li>Finished: {task}</li>
    }
    else{
        return <li>Work On: {task}</li>
    }
}
```
```jsx
// App.jsx
<Todo task="Core Concepts" isDone={true}></Todo>
<Todo task="Try JSX" isDone={false}></Todo>
```

</summary>


### Set value into the component using props
```jsx
// Main Function
    function FunctionName() {
        return (
            <>
                ...
                ...
                <Device name="Laptop" price="45k"></Device>
                ....
            </>
        )
    }

// Component
    function Device(props){
        return (
            <h2>Device Name: {props.name} and Price: {props.price}
        )
    }
```

### Set value into the component using destructing
```jsx
// Main Function
    function FunctionName() {
        return (
            <>
                ...
                ...
                <Device name="Laptop" price="45k"></Device>
                ....
            </>
        )
    }

// Component
    function Device({name, price}){
        return (
            <h2>Device Name: {name} and Price: {price}
        )
    }
```


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