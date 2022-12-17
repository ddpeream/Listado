import React from "react";
import { useState } from "react";

function useLocalStorag(itemName, objectItem) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState(objectItem);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        console.log("ITEM", localStorage.getItem(itemName));
        const localStorageTodos = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageTodos) {
          console.log("localStorage-uno", localStorageTodos);
          localStorage.setItem(itemName, JSON.stringify(objectItem));
          parsedItem = objectItem;
        } else {
          parsedItem = JSON.parse(localStorageTodos);
          console.log(
            "localStorage-dos",
            localStorageTodos,
            parsedItem,
            localStorage
          );
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
      console.log(
        "STRINGIFY",
        stringgifiedTodos,
        itemName,
        localStorage,
        localStorage.setItem(itemName, stringgifiedTodos)
      );
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
