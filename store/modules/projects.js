import { lang, frameworks } from "./skills";
export default [
  {
    name: "UCocktail",
    smDescription: "Buscador de cockteleria",
    lgDescription: ` <p>UCocktail es un buscador de cockteleria 100% responsive, desarrollado y diseñado en su totalidad por Tristan Mayo.El buscador no usa ningún tipo de backend sino que se nutre de CocktailDB, una api de recetas de bebidas.Además, se trata de una página de habla inglesa.</p>
  <p>Se trata de una SPA (Single Page Application) desarrollada con multiples tecnologías: el framework Vue para las funcionalidades de SPA y la reactividad de la página y Bootstrap para los estilos genéricos, SCSS para customizaciones en estos estilos.</p>
  <p>El buscador tiene diversas funcionalidades. Permite la busqueda por ingrediente o por nombre de bebida sin necesidad de cambiar ningún parámetro (puede probar a buscar "Lemon" y "Margarita"). En caso de obtener más de 8 resultados de la busqueda introducira paginación. Finalmente tiene un sistema de recomendaciones incorporado basado en los ingredientes de la bebida que se está visualizando.</p>`,
    skills: { html: lang.skills.html, scss: lang.skills.sass, bootstrap: frameworks.skills.bootstrap, js: lang.skills.js, vue: frameworks.skills.vue, api: { name: 'CocktailDB', img: 'skills/api-logo.svg' } },
    github: "https://github.com/Oudwins/UCocktail",
    demo: "https://www.cocktail.tristanmayo.com/",
    imgCover: "projects/cocktail.jpg",
    imgResponsive: "projects/cocktail_responsive.jpg"
  },
  {
    name: "Let's Academia",
    smDescription: "Academia online de inglés",
    lgDescription: `<p>Let's Academia es una página de academia de inglés que realiza clases online. El desarrollo y el diseño fueron realizados enteramente por Tristan Mayo y es 100% responsive. Se trata de una web simple con su correspondientes apartados para los cursos, preguntas frecuentes, formulario de contacto y un pop-up o modal para iniciar sesión a un backend de usuario.</p>
    <p>A nivel de tecnologías es una página estatica que usa Bootstrap como framework de CSS y tiene bastante customización realizada con CSS. La intención es transmitir visualmente la profesionalidad y simplicidad de la empresa. Así como la comodidad de estudiar inglés desde tu propia casa con el apoyo de clases dirigidas por profesionales.</p>`,
    skills: { html: lang.skills.html, css: lang.skills.css, js: lang.skills.js, bootstrap: frameworks.skills.bootstrap },
    github: "https://github.com/Oudwins/lets-academia",
    demo: "https://www.lets.tristanmayo.com",
    imgCover: "projects/academia.JPG",
    imgResponsive: "projects/academia_responsive.jpg"
  },
  {
    name: "Zwary Restaurant",
    smDescription: "Restaurante alta gama",
    lgDescription: `<p>Zwary es una página web para un restaurante de alta gama. Está desarrollada y diseñada en su plenitud por Tristan Mayo y es 100% responsive.</p>
    <p>La web tiene un diseño único y especial pues era de vital importancia que representara la particularidad del restaurante a través de su diseño. En la página de inicio se ha creado una experiencia de usuario exclusiva localizando en su centro un elemento importante visual. Mientras que en el resto de las páginas se refleja un estilo sencillo pero elegante que está perfectamente alineado con las intenciones del restaurante.
    </p>`,
    skills: { html: lang.skills.html, css: lang.skills.css, js: lang.skills.js, gsapLib: { name: "gsap lib" } },
    github: "https://github.com/Oudwins/zwary",
    demo: "https://www.zwary.tristanmayo.com",
    imgCover: "projects/restaurante.JPG",
    imgResponsive: "projects/restaurante_responsive.jpg"
  }
]



