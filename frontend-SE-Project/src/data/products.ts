import { useState } from "react";
const [products, setProducts] = useState<any[]>([]);
const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

export const getProducts = async () => {

  const res = await fetch("/api/products");
  

  return res.json();

};

export const getProductById = async (id:string) => {


  const res = await fetch(`/api/products/${id}`);

  return res.json();

};