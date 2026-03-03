import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Filters from "./Filters";
import Productlist from "./Productlist";

const Productss = () => {
  const { categoryName } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(categoryName || "");
  const [selectedRating, setSelectedRating] = useState(null);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    if (categoryName) setSelectedCategory(categoryName);
  }, [categoryName]);

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 min-h-screen">
      <div className="w-full md:w-72">
        <Filters
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>

      <div className="flex-1">
        <Productlist
          selectedCategory={selectedCategory}
          selectedRating={selectedRating}
          sortBy={sortBy}
        />
      </div>
    </div>
  );
};

export default Productss;
