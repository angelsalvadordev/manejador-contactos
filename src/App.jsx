import React from 'react'

// Components
import Intro from './components/Intro';
import CounterContacts from './components/CounterContacts';
import Searcher from './components/Searcher';
import ContactsGroup from './components/ContactsGroup';
import ContactsProvider from "./context/ContactsProvider"

// Styles
import "./styles/custom/css/main.css"

const App = () => {
    return (
        // Envolviendo todo el componente para estado global
        <ContactsProvider>
            <div className="container pt-4">
                <Intro />
                <CounterContacts />
                <Searcher />
                <ContactsGroup />
            </div>
        </ContactsProvider>
    )
}

export default App
