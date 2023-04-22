const Header = () => {
  return (
    <header className="w-full fixed">
      <div className="bg-gray-900 py-2.5">
        <div className="flex items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a className="flex items-center cursor-pointer">
            <img className="h-6 sm:h-9 mr-3" src="/logo.svg" alt="logo" />
            <span className="text-white text-xl font-semibold">Landwind</span>
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href=""
              className="text-white hover:bg-gray-700 font-medium rounded-lg text-sm px-4 py-5 lg:px-5 lg:py-2.5 sm:mr-2"
            >
              Connexion
            </a>
            <a
              href=""
              className="text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 bg-purple-600 hover:bg-purple-700"
            >
              Télécharger{" "}
            </a>

            <button
              type="button"
              className="items-center p-2 ml-1 text-sm rounded-lg lg:hidden text-gray-400 hover:bg-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a className="py-2 pl-3 pr-4 bg-purple-700 lg:bg-transparent lg:text-purple-700 lg:p-0 text-white cursor-pointer">
                  Accueil
                </a>
              </li>
              <li>
                <a className="py-2 pl-3 pr-4 border-b lg:border-0 lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700 cursor-pointer">
                  Entreprises
                </a>
              </li>
              <li>
                <a className="py-2 pl-3 pr-4 border-b lg:border-0 lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700 cursor-pointer">
                  Marché
                </a>
              </li>
              <li>
                <a className="py-2 pl-3 pr-4 border-b lg:border-0 lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700 cursor-pointer">
                  Caractéristiques
                </a>
              </li>
              <li>
                <a className="py-2 pl-3 pr-4 border-b lg:border-0 lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700 cursor-pointer">
                  Equipes
                </a>
              </li>
              <li>
                <a className="py-2 pl-3 pr-4 border-b lg:border-0 lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700 cursor-pointer">
                  Contact
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </header>
  );
};


export default Header;