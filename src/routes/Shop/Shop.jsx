import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview";
import Category from "../Category/Category";
import { fetchCategoriesAsync } from "../../store/categories/category.action";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
