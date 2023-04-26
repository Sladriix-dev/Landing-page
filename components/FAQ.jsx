import Link from 'next/link';

const FAQ = () => {
  return (
    <section id="TEAM" className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
        <h2
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="30"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white"
        >
          Questions fréquentes
        </h2>
        <div className="max-w-screen-md mx-auto">
          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400"
          >
            <h3 id="accordion-flush-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                data-accordion-target="#accordion-flush-body-1"
                aria-expanded="true"
                aria-controls="accordion-flush-body-1"
              >
                <span>Puis-je utiliser Landwind dans des projets open source ?</span>
                <svg
                  data-accordion-icon=""
                  className="w-6 h-6 rotate-180 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h3>
            <div
              id="accordion-flush-body-1"
              className=""
              aria-labelledby="accordion-flush-heading-1"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                Landwind est une bibliothèque open-source de composants interactifs
                  construit sur Tailwind CSS, y compris les boutons, les listes déroulantes,
                  modaux, barres de navigation, etc.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                    Consultez ce guide pour savoir comment{" "}
                  <Link
                    href="#"
                    className="text-purple-600 dark:text-purple-500 hover:underline"
                  >
                    commencer
                  </Link>{" "}
                  et commencez à développer des sites Web encore plus rapidement avec des composants sur
                  haut de Tailwind CSS.
                </p>
              </div>
            </div>
            <h3 id="accordion-flush-heading-2">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-2"
                aria-expanded="false"
                aria-controls="accordion-flush-body-2"
              >
                <span>Existe-t-il un fichier Figma disponible ?</span>
                <svg
                  data-accordion-icon=""
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h3>
            <div
              id="accordion-flush-body-2"
              className="hidden"
              aria-labelledby="accordion-flush-heading-2"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                Landwind est d'abord conceptualisé et conçu à l'aide du Figma
                  logiciel pour que tout ce que vous voyez dans la bibliothèque ait un design
                  équivalent dans notre fichier Figma.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Vérifiez{" "}
                  <Link
                    href="#"
                    className="text-purple-600 dark:text-purple-500 hover:underline"
                  >
                    le système de conception Figma
                  </Link>{" "}
                  basé sur les classes utilitaires de Tailwind CSS et des composants
                  de Landwind.
                </p>
              </div>
            </div>
            <h3 id="accordion-flush-heading-3">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-3"
                aria-expanded="false"
                aria-controls="accordion-flush-body-3"
              >
                <span>
                  Quelles sont les différences entre Landwind et Tailwind UI?
                </span>
                <svg
                  data-accordion-icon=""
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h3>
            <div
              id="accordion-flush-body-3"
              className="hidden"
              aria-labelledby="accordion-flush-heading-3"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                La principale différence est que les composants de base de
                  Landwind sont open source sous licence MIT, tandis que
                  Tailwind UI est un produit payant. Une autre différence est
                  que Landwind s'appuie sur composants plus petits et autonomes,
                  tandis que Tailwind UI offre sections de pages.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                Cependant, nous recommandons en fait d'utiliser à la fois
                  Landwind, Landwind Pro, et même Tailwind UI car il n'y a
                  aucune raison technique vous empêcher d'utiliser le meilleur
                  des deux mondes.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                    En savoir plus sur ces technologies:
                </p>
                <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                  <li>
                    <Link
                      href="#"
                      className="text-purple-600 dark:text-purple-500 hover:underline"
                    >
                      Landwind Pro
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-purple-600 dark:text-purple-500 hover:underline"
                    >
                      Tailwind UI
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <h3 id="accordion-flush-heading-4">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-4"
                aria-expanded="false"
                aria-controls="accordion-flush-body-4"
              >
                <span>Qu'en est-il de la prise en charge du navigateur ?</span>
                <svg
                  data-accordion-icon=""
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h3>
            <div
              id="accordion-flush-body-4"
              className="hidden"
              aria-labelledby="accordion-flush-heading-4"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  La principale différence est que les composants de base de
                  Landwind sont open source sous licence MIT, tandis que
                  Tailwind UI est un produit payant. Une autre différence est
                  que Landwind s'appuie sur composants plus petits et autonomes,
                  tandis que Tailwind UI offre sections de pages.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Cependant, nous recommandons en fait d'utiliser à la fois
                  Landwind, Landwind Pro, et même Tailwind UI car il n'y a
                  aucune raison technique vous empêcher d'utiliser le meilleur
                  des deux mondes.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  En savoir plus sur ces technologies:
                </p>
                <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                  <li>
                    <Link
                      href="#"
                      className="text-purple-600 dark:text-purple-500 hover:underline"
                    >
                      Landwind Pro
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-purple-600 dark:text-purple-500 hover:underline"
                    >
                      Tailwind UI
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;