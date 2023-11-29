import React, { useState} from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items, onItemFormSubmit }) {  
  const [searchedItem, setSearchedItem]= useState("")
  const [selectedCategory, setSelectedCategory] = useState("All");

function handleSearchChange(e) {
  const newSearchedItem=e.target.value;  
  setSearchedItem(newSearchedItem);    
}

  function handleCategoryChange(event) {    
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") { return true     
    } 
      return item.category === selectedCategory;
    }).filter((item)=>{
      if (searchedItem === "") { return true }
      else {
        return (item.name.toLowerCase().includes(searchedItem.toLocaleLowerCase()))
      };
    });    

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter search={searchedItem}  onSearchChange={handleSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
