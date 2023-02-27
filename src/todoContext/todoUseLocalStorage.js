import React from "react";
import { useState } from "react";

function useLocalStorag(itemName, objectItem) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState(objectItem);

  React.useEffect(() => {
    setTimeout(() => {
      try { 
        const localStorageTodos = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageTodos) { 
          localStorage.setItem(itemName, JSON.stringify(objectItem));
          parsedItem = objectItem;
        } else {
          parsedItem = JSON.parse(localStorageTodos); 
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 5000);
  });

  const saveItem = (newITem) => {
    try {
      const stringgifiedTodos = JSON.stringify(newITem);
      localStorage.setItem(itemName, stringgifiedTodos); 
      setItem(newITem);
    } catch (error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorag };
