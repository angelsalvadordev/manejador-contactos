import React from 'react'
import Intro from './components/Intro';
import Searcher from './components/Searcher';
import ContactsGroup from './components/ContactsGroup';
import ContactsProvider from "./context/ContactsProvider"

// Styles
import "./styles/custom/css/main.css"

const App = () => {
    return (
        <ContactsProvider>
            <div className="container pt-4">
                <Intro />
                <Searcher />
                <ContactsGroup />
            </div>
        </ContactsProvider>
    )
}

export default App
