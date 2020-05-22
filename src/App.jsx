import React from "react";

// Components
import Intro from "./components/Intro";
import CounterContacts from "./components/CounterContacts";
import Searcher from "./components/Searcher";
import ContactsGroup from "./components/ContactsGroup";
import ContactsProvider from "./context/ContactsProvider";
import AddContact from "./components/AddContact";

// Styles
import "./styles/custom/scss/styles.scss";

const App = () => {
  return (
    // Envolviendo todo el componente para estado global
    <ContactsProvider>
      <div className="container pt-4">
        <Intro />
        <CounterContacts />
        <div className="row no-gutters mb-1 justify-content-between">
          <Searcher />
          <AddContact />
        </div>
        <ContactsGroup />
      </div>
    </ContactsProvider>
  );
};

export default App;
