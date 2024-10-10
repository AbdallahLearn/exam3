import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

function Details() {
  const { id } = useParams();
  const [item, setItem] = useState(); 

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=ChQolAFgE3rgVkhe0GlR6A4PoqiFaqCC`)

      .then((response) => response.json())
      .then((data) => {
        const book = data.results.books.find((book) => book.rank === Number(id)); 
        setItem(book);
        console.log(book);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!item) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <Header />
      <div className="container m-auto mt-20">
        <div className="card card-side bg-base-100 shadow-xl" key={item.id}>
          <figure>
            <img src={item.book_image} alt={item.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>{item.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
