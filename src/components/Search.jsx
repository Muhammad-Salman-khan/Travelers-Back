const Search = ({
  Description,
  count,
  setDescription,
  handleForm,
  itemsCount,
  clearItems,
}) => {
  return (
    <>
      <div className="flex-col items-center justify-center text-center p-8 sm:p-10 gap-6 rounded-3xl w-full max-w-2xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/40">
        <form onSubmit={handleForm} className="space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-wide text-white drop-shadow-lg">
            🌍 What things do you need for your trip?
          </h3>

          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <select
              disabled={Description.length < 1}
              className={`w-fit p-3 rounded-xl transition duration-200 ease-in-out shadow-sm 
              ${
                Description.length < 1
                  ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              }`}
              value={count}
              onChange={(e) => itemsCount(Number(e.target.value))}
            >
              <option value={0}>0</option>
              {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>

            <input
              type="text"
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Search by name..."
              className="w-full pl-3 pr-4 py-3 font-semibold rounded-2xl border border-white/20 bg-white/10 text-white
              placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base shadow-md"
            />

            <button
              disabled={Description.length < 1}
              className={`px-5 py-3 rounded-xl font-semibold transition-all duration-200 
              ${
                Description.length <= 0
                  ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                  : "bg-emerald-500 text-white hover:bg-emerald-600"
              }`}
            >
              Add
            </button>
          </div>
        </form>
        <div className="text-center m-2">
          <button
            onClick={clearItems}
            disabled={Description.length < 0}
            className={`px-5 py-3 rounded-xl font-semibold transition-all duration-200 bg-red-500 text-white hover:bg-red-800
          `}
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
