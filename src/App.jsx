import React from 'react'
import AccordionContainer from './components/AccordionContainer';

const App = () => {
    const accordionData = [
        {
            title: "What is React?",
            content: "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components."
        },
        {
            title: "What is JSX?",
            content: "JSX is a syntax extension for JavaScript that looks similar to HTML. It is used with React to describe the UI structure."
        },
        {
            title: "What are props in React?",
            content: "Props (short for properties) are used to pass data from parent components to child components in React."
        },
        {
            title: "What is state in React?",
            content: "State is a built-in object that allows components to store and manage dynamic data. State can change over time, triggering UI updates."
        },
        {
            title: "What is the Virtual DOM?",
            content: "The Virtual DOM is a lightweight copy of the actual DOM. React uses it to improve performance by updating only the parts of the DOM that have changed."
        }
    ];

    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center space-y-2'>
                <h1 className='text-3xl font-bold'>React Accordion</h1>
            <div className=' p-8 '>
                <AccordionContainer data={accordionData} />
            </div>
        </div>
    )
}

export default App