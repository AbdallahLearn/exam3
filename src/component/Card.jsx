import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Card() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=ChQolAFgE3rgVkhe0GlR6A4PoqiFaqCC")
            .then(response => response.json())
            .then(data => {
                setItems(data.results.books);
                console.log(data.results.books);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
        <div className="container m-auto grid lg:grid-cols-3 gap-20 justify-center md:grid-cols-2 max-sm:grid-cols-1">
        {items.map((item, index) => (
                <div key={index} className="card bg-base-100 w-96 shadow-xl max-sm:w-80">
                    <figure>
                        <img
                            src={item.book_image}
                            alt={item.title}
                            className="w-60 h-[40vh]"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <p>Author: {item.author}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/details/${item.rank}`} className="btn bg-blue-400 text-white">Details</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
       
        </>
    );
}

export default Card;
