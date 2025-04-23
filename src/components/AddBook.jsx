import React, { useState } from "react";
import StarRating from "./StarRating";


function AddBook({ setShowComponent }) {

    const [image, setImage] = useState(null);
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [desc, setDesc] = useState('');
    const [rating, setRating] = useState(0)

    const handleRating = (rate) => {
        setRating(rate)


      }

  return (
    <div className="relative">
       <button className="max-w-fit absolute right-5 " onClick={() => setShowComponent(false)}>❌</button>
      <div className="overflow-auto">

        <form className=" flex flex-col gap-y-4 p-6  bg-white shadow-md rounded-lg" action="">

            <div>
            <label htmlFor="name">Name of the book : </label>
            <input type="text" className="border-2 p-2 rounded-md focus:ring-2 focus:ring-blue-500" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
            <label htmlFor="author">Author : </label>
            <input type="text" className="border-2 p-2 rounded-md focus:ring-2 focus:ring-blue-500" id="author" value={author} onChange={(e) => setAuthor(e.target.value)}  />
            </div>
            <div>
            <label htmlFor="genre">Genre : </label>
            <input type="text" className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500" id="genre"  value={genre} onChange={(e) => setGenre(e.target.value)} />
            </div>
            <div>
            <label htmlFor="img">Cover Art : </label>
            <input type="file"  id="img"  value={image} onChange={(e) => setImage(e.target.value)} />
            </div>
            <div>
            <label htmlFor="desc">Description : </label>
            <input type="text" className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500" id="desc" value={desc} onChange={(e) => setDesc(e.target.desc)}  />
            </div>
            <div>
            <label htmlFor="rating">Rating: </label>
            <StarRating onChange={handleRating} />
            </div>

            <div className="flex justify-center">
                <button type="submit" className=" border rounded-md bg-slate-400">Submit</button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
