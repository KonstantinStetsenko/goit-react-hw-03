import { useState } from "react";
import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Formik } from "formik";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { nanoid } from "nanoid";
function App() {
  const arrCantacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [inputValue, setInputValue] = useState("");
  const [names, setNames] = useState(() => {
  try {
    const savedNames = JSON.parse(window.localStorage.getItem("saved-list"));
    // Убедимся, что это массив объектов с полем `name`
    if (Array.isArray(savedNames) && savedNames.every(item => item.name && item.number)) {
      return savedNames;
    } else {
      return arrCantacts;
    }
  } catch (error) {
    console.error("Error parsing localStorage data:", error);
    return arrCantacts;
  }
});


  const addName = (newName) => {
  if (!newName || !newName.name || !newName.number) {
    console.error("Invalid contact data:", newName);
    return;
  }
  setNames((prevNames) => [...prevNames, { ...newName, id: nanoid() }]);
};

  useEffect(() => {
    window.localStorage.setItem("saved-list", JSON.stringify(names));
    console.log(`Clicks changed - ${names}`);
  }, [names]);

  const deleteName = (nameId) => {
    console.log(nameId);
    setNames((prvNames) => {
      return prvNames.filter((card) => card.id !== nameId);
    });
  };
  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };
 const filteredContacts = names.filter((contact) =>
  contact && contact.name && contact.name.toLowerCase().includes(inputValue.toLowerCase())
);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addName} />
      <SearchBox value={inputValue} onChange={handleChange} />
      <ContactList users={filteredContacts} onDelete={deleteName} />
    </div>
  );
}

export default App;
