import React, { useEffect, useState } from 'react';
import Header from './Header';
import Card from './Card';
import Footer from './Footer';
function Home() {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=ChQolAFgE3rgVkhe0GlR6A4PoqiFaqCC');
                const json = await response.json();
                setItems(json.results.books.title); 
                setFilteredItems(json.results.books); 
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        if (searchTerm.trim() !== "") {
            const itemSearch = items.filter(
                (item) => item.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredItems(itemSearch);
        } else {
            setFilteredItems(items); // Reset to all items if the search term is empty
        }
    };

    return (
        <div>
            <Header />
            <div className="container-card mt-20 w-[90%] m-auto">
                <div className="search flex justify-center ">
                    <input
                        type="text"
                        placeholder='Search'
                        className='mb-20 w-96 p-2 rounded-full'
                        value={searchTerm}
                        onChange={handleChange}
                        style={{ border: '1px solid black' }}
                    />
                    <button
                        className='btn bg-gray-800 rounded-full text-white'
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
                {filteredItems.map(item => (
                    <Card key={item.rank} title={item.title} author={item.author} /> // Pass necessary props
                ))}
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
