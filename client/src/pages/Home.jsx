import { Table } from "../components/Table";
import axios from "axios";
import { useState, useEffect } from "react";
import "../styles/style.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    const getProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/products`);
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
    setLoading(false);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  if (products.length === 0) return <p>No records found</p>;

  return (
    <div className="container">
      <Table products={products} />
    </div>
  );
};

export default Home;
