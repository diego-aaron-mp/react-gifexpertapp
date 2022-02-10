import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

// GifExpertApp
export const GifExpertApp = () => {

  // const  categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  // Hook UseState
  // const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
  const [categories, setCategories] = useState(['One Punch']);

  // const handleAdd = () => {
  //   // setCategories([...categories, 'Avatar']);
  //   setCategories(cats => [...cats, 'Avatar']);
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      {/* Le mandamos la referencia a setCategories */}
      <AddCategory setCategories={setCategories} />
      <hr />


      <ol>
        {
          // Es un ciclo
          categories.map(category => {
            // En la izquierda va el ID unico del elemento
            // return <li key={category}> {category} </li>
            return <GifGrid
              key={category}
              category={category}
            />
          })
        }
      </ol>

    </>
  );
}

export default GifExpertApp;

