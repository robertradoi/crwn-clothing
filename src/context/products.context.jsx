import { createContext, useEffect, useState } from "react";

import SHOP_DATA from "../shop-data.js";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products, setProducts };

  // Execute the Add Documents to Firebase
  useEffect(() => {
    addCollectionAndDocuments("categories", SHOP_DATA);
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
