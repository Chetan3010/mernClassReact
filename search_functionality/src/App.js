import './App.css';
import Search from './Components/Search';
import CardList from './Components/CardList';

// import productsData from './products.json'
import { useEffect, useState } from 'react';
import Pagination from './Components/Pagination';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const itemsPerPage = 5;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    if (value === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.title.toLowerCase().includes(value.toLowerCase()));
      setFilteredProducts(filtered);
    }
  };

  const handlePageChange = (type) => {
    if (type === 'prev' && currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    } else if (type === 'next' && currentPage < totalPages()) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const totalPages = () => {
    return Math.ceil(filteredProducts.length / itemsPerPage);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className='no-sc'>
        <Search handleSearch={handleSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CardList products={currentItems} />
        <Pagination currentPage={currentPage} totalPages={totalPages()} handlePageChange={handlePageChange} />
      </div>
    </>
  );
}

export default App;
