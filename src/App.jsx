import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Search from "./components/Search.jsx";
import { useState } from "react";

function App() {
  const [description, setdescription] = useState("");
  const [count, setCount] = useState(null);
  const [Items, setItems] = useState([]);
  const handleEve = (e) => {
    e.preventDefault();
    if (!description) return;
    const ListData = {
      Id: Date.now(),
      Items: count || 0,
      Description: description,
      packed: false,
    };
    setdescription("");
    setItems((e) => [...e, ListData]);
  };
  const clearList = () => {
    setItems([]);
  };
  return (
    <>
      <div className=" w-full bg-gradient-to-br from-neutral-950 via-black to-neutral-900 text-gray-200 font-sans">
        <Header />
        <main className="max-w-6xl min-h-screen mx-auto px-6 py-10 space-y-10">
          <Search
            Count={count}
            itemsCount={(e) => setCount(e)}
            Description={description}
            setDescription={(e) => setdescription(e)}
            handleForm={handleEve}
            clearItems={clearList}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
            {Items.map(({ Id, Items, Description, packed }) => (
              <div
                key={Id}
                className={`flex 
                  ${packed ? "bg-gray-400 " : "bg-white text-black"} 
                   w-3/4 h-24 overflow-hidden  shadow-lg max-w-96 rounded-xl`}
              >
                <svg width="16" height="96" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M 8 0 
               Q 4 4.8, 8 9.6 
               T 8 19.2 
               Q 4 24, 8 28.8 
               T 8 38.4 
               Q 4 43.2, 8 48 
               T 8 57.6 
               Q 4 62.4, 8 67.2 
               T 8 76.8 
               Q 4 81.6, 8 86.4 
               T 8 96 
               L 0 96 
               L 0 0 
               Z"
                    fill="tan"
                    stroke="tan"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
                <div className="mx-2.5 overflow-hidden w-full">
                  <p
                    className={`mt-1.5 ${
                      packed ? "line-through text-white" : "text-black"
                    } text-xl font-bold text-black leading-8 mr-3 overflow-hidden text-ellipsis whitespace-nowrap`}
                  >
                    {Description}
                  </p>
                  <p
                    className={`overflow-hidden
                      ${packed ? "line-through text-white" : "text-black"}
                      leading-5 break-all  max-h-10`}
                  >
                    Items: {Items}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <label className="group flex items-center cursor-pointer">
                    <input
                      key={Id}
                      className="hidden peer"
                      type="checkbox"
                      checked={packed}
                      onChange={() =>
                        setItems((e) =>
                          e.map((e) =>
                            e.Id === Id ? { ...e, packed: !e.packed } : e
                          )
                        )
                      }
                    />

                    <span className="relative w-8 h-8 flex justify-center items-center bg-gray-100 border-2 border-gray-400 rounded-md shadow-md transition-all duration-500 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-hover:scale-105">
                      <span className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 opacity-0 peer-checked:opacity-100 rounded-md transition-all duration-500 peer-checked:animate-pulse"></span>

                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="hidden w-5 h-5 text-white peer-checked:block transition-transform duration-500 transform scale-50 peer-checked:scale-100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </span>

                    <span className="ml-3 text-gray-700 group-hover:text-blue-500   font-medium transition-colors duration-300"></span>
                  </label>
                </div>
                <button
                  onClick={() =>
                    setItems((e) => e.filter((item) => item.Id !== Id))
                  }
                  className="w-16 cursor-pointer focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="peru"
                    fill="none"
                    className="w-7 h-7"
                  >
                    <path
                      d="M6 18L18 6M6 6l12 12"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </main>
        <Footer Items={Items} />
      </div>
    </>
  );
}

export default App;
