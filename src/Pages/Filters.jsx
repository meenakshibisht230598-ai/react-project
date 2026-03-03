const Filters = ({
  selectedCategory,
  setSelectedCategory,
  selectedRating,
  setSelectedRating,
  sortBy,
  setSortBy,
}) => {
  const categories = ["Cameras", "Lenses", "Lighting", "Bags"];
  const ratings = [
    { label: "4 Stars & above", value: 4 },
    { label: "3 Stars & above", value: 3 },
    { label: "2 Stars & above", value: 2 },
    { label: "1 Stars & above", value: 1 },
  ];
  const sortOptions = ["Price - Low to High", "Price - High to Low"];

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedRating(null);
    setSortBy("");
  };

  return (
    <div className="w-60 bg-white p-5 rounded-xl shadow-lg space-y-6 mt-7">
      <div className="flex justify-between items-center border-b pb-2">
        <h2 className="text-xl font-semibold text-blue-900">Filters</h2>
       <button onClick={clearFilters} className="text-sm text-blue-900">Clear</button>
      </div>

      <div>
        <h3 className="font-semibold text-lg text-blue-900 mb-2">Category</h3>
        <div className="space-y-2">
          {categories.map(cat => (
            <label
              key={cat}
              className={`flex items-center gap-3 cursor-pointer text-lg px-2 py-1 rounded ${
                selectedCategory === cat ? "bg-blue-100 text-blue-900 font-semibold" : "text-blue-900"
              }`}
            >
              <input
                type="radio"
                name="category"
                checked={selectedCategory === cat}
                onChange={() => setSelectedCategory(cat)}
                className="accent-blue-600"
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-lg text-blue-900 mb-2">Rating</h3>
        <div className="space-y-2">
          {ratings.map(r => (
            <label
              key={r.value}
              className={`flex items-center  gap-3 cursor-pointer text-lg px-2 py-1 rounded ${
                selectedRating === r.value ? "bg-blue-100 text-blue-900 font-semibold" : "text-blue-900"
              }`}
            >
              <input
                type="radio"
                name="rating"
                checked={selectedRating === r.value}
                onChange={() => setSelectedRating(r.value)}
                className="accent-blue-600"
              />
              {r.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold  text-lg text-blue-900 mb-2">Sort by</h3>
        <div className="space-y-2">
          {sortOptions.map(opt => (
            <label
              key={opt}
              className={`flex items-center gap-3 cursor-pointer text-lg px-2 py-1 rounded ${
                sortBy === opt ? "bg-blue-100 text-blue-900  font-semibold" : "text-blue-900"
              }`}
            >
              <input
                type="radio"
                name="sort"
                checked={sortBy === opt}
                onChange={() => setSortBy(opt)}
                className="accent-blue-600"
              />
              {opt}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Filters;
