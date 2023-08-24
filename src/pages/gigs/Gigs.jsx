import React, { useRef, useState } from "react";
import "./UpdatedGigs.scss"; // Updated stylesheet name
import { gigs } from "../../data";
import UpdatedGigCard from "../../components/updatedGigCard/UpdatedGigCard"; // Updated component name

function UpdatedGigs() {
  // Updated component name
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = () => {
    console.log(minRef.current.value);
    console.log(maxRef.current.value);
  };

  return (
    <div className="updated-gigs">
      <div className="updated-container">
        <span className="updated-breadcrumbs">
          <Link to="/messages">Messages</Link> &gt; John Doe &gt;
        </span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Liverr's AI artists
        </p>
        <div className="updated-menu">
          <div className="updated-left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="updated-right">
            <span className="updated-sortBy">Sort by</span>
            <span className="updated-sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="updated-rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="updated-cards">
          {gigs.map((gig) => (
            <UpdatedGigCard key={gig.id} item={gig} /> // Updated component name
          ))}
        </div>
      </div>
    </div>
  );
}

export default UpdatedGigs;
