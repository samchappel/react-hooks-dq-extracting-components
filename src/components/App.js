import React from "react";
import { contacts } from "../data";
import ContactPanel from "./ContactPanel"
import MessagePanel from "./MessagePanel"

console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
      <ContactPanel name=""/>
      <MessagePanel />
      
    </div>
  );
}

export default App;
