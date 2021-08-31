import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [items, setItems]= useState([]);


  function additem(input){
    setItems((preValue) => {
      return [...preValue, input];
    });
  }

  function deletetext(id){
    setItems((preItem) =>{
      return preItem.filter((item, index) =>{
        return index !==id;
      });
    });

  }
  return (
    <div>
      <Header />
      <CreateArea add={additem} />

     
      {items.map((todoItem, index) => (
        <Note 
        key={index}
        id={index}
         title={todoItem.title} 
         content={todoItem.content} 
         checked= {deletetext}
        />

      ))}
      
      

      <Footer />
    </div>
  );
}

export default App;
