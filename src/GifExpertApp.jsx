import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";


//Api: cj21dKr7ZMqCkrZKTLfqOdeNEgOx1Tpd
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {

    if ( categories.includes(newCategory)) return;

    //categories.push(newCategory);
    setCategories([newCategory, ...categories]);
    //setCategories( cat => [...cat, 'Valorant'] );
  };

  return (
    <>
      {/*titulo */}
      <h1>GifExpertApp</h1>

      {/* Input*/}
      <AddCategory
        //setCategories = { setCategories }
        onNewCategory={(value) => onAddCategory(value)}
        
      />

      {/*<button onClick={onAddCategory} >Agregar</button>*/}

      {/* Listado de gif*/}


        {
        categories.map((category) => (

           <GifGrid key={ category} category={category}/>
          ))
          
        }


      {/* Gif item*/}


    </>
  );
};
