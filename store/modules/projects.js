import { lang, frontEnd } from "./skills";
export default [
  /*   {
    name: "Natours Travel",
    smDescription: "Empresa de Viajes Organizados",
    lgDescription: ` <p>UCocktail es un buscador de cockteleria 100% responsive, desarrollado y diseñado en su totalidad por mi. El buscador no usa ningún tipo de frontEnd sino que se nutre de CocktailDB, una api de recetas de bebidas. Además, se trata de una página de habla inglesa.</p><br/>
  <p>Se trata de una SPA (Single Page Application) desarrollada con multiples tecnologías: el framework Vue para las funcionalidades de SPA y la reactividad de la página y Bootstrap para los estilos genéricos, SCSS para customizaciones en estos estilos.</p><br/>
  <p>El buscador tiene diversas funcionalidades. Permite la busqueda por ingrediente o por nombre de bebida sin necesidad de cambiar ningún parámetro (puede probar a buscar "Lemon" y "Margarita"). En caso de obtener más de 8 resultados de la busqueda introducira paginación. Finalmente tiene un sistema de recomendaciones incorporado basado en los ingredientes de la bebida que se está visualizando.</p>`,
    skills: {  js: lang.skills.js, },
    github: "https://github.com/Oudwins/natours",
    demo: "https://natourtravel.herokuapp.com/",
    imgCover: "projects/cocktail.jpg",
    imgResponsive: "projects/cocktail_responsive.jpg"
  }, */
  {
    name: "UCocktail",
    smDescription: "Buscador de cockteleria",
    lgDescription: ` <p>UCocktail es un buscador de cockteleria 100% responsive, desarrollado y diseñado en su totalidad por mi. El buscador no usa ningún tipo de frontEnd sino que se nutre de CocktailDB, una api de recetas de bebidas. Además, se trata de una página de habla inglesa.</p><br/>
  <p>Se trata de una SPA (Single Page Application) desarrollada con multiples tecnologías: el framework Vue para las funcionalidades de SPA y la reactividad de la página y Bootstrap para los estilos genéricos, SCSS para customizaciones en estos estilos.</p><br/>
  <p>El buscador tiene diversas funcionalidades. Permite la busqueda por ingrediente o por nombre de bebida sin necesidad de cambiar ningún parámetro (puede probar a buscar "Lemon" y "Margarita"). En caso de obtener más de 8 resultados de la busqueda introducira paginación. Finalmente tiene un sistema de recomendaciones incorporado basado en los ingredientes de la bebida que se está visualizando.</p>`,
    skills: {
      html: lang.skills.html,
      scss: lang.skills.sass,
      bootstrap: frontEnd.skills.bootstrap,
      js: lang.skills.js,
      vue: frontEnd.skills.vue,
      api: { name: "CocktailDB", img: "skills/api-logo.svg" },
      /*  */ html: lang.skills.html,
      scss: lang.skills.sass,
      bootstrap: frontEnd.skills.bootstrap,
      js: lang.skills.js,
      vue: frontEnd.skills.vue,
      api: { name: "CocktailDB", img: "skills/api-logo.svg" }
    },
    github: "https://github.com/Oudwins/UCocktail",
    demo: "https://www.cocktail.tristanmayo.com/",
    imgCover: "projects/cocktail.jpg",
    imgResponsive: "projects/cocktail_responsive.jpg"
  },
  {
    name: "Let's Academia",
    smDescription: "Academia online de inglés",
    lgDescription: `<p>Let's Academia es una página de academia de inglés que realiza clases online. El desarrollo y el diseño fueron realizados enteramente por mi y es 100% responsive. Se trata de una web simple con sus correspondientes apartados para los cursos, preguntas frecuentes, formulario de contacto y un pop-up o modal para iniciar sesión a un frontEnd de usuario.</p><br/>
    <p>A nivel de tecnologías es una página estatica que usa Bootstrap como framework de CSS y tiene bastante customización realizada con CSS. La intención es transmitir visualmente la profesionalidad y simplicidad de la empresa. Así como la comodidad de estudiar inglés desde tu propia casa con el apoyo de clases dirigidas por profesionales.</p>`,
    skills: {
      html: lang.skills.html,
      css: lang.skills.css,
      js: lang.skills.js,
      bootstrap: frontEnd.skills.bootstrap
    },
    github: "https://github.com/Oudwins/lets-academia",
    demo: "https://www.lets.tristanmayo.com",
    imgCover: "projects/academia.JPG",
    imgResponsive: "projects/academia_responsive.jpg"
  },
  {
    name: "Zwary Restaurant",
    smDescription: "Restaurante alta gama",
    lgDescription: `<p>Zwary es una página web para un restaurante de alta gama. Está desarrollada y diseñada íntegramente por mi y es 100% responsive.</p><br/>
    <p>La web tiene un diseño único y especial pues era de vital importancia que representara la particularidad del restaurante a través de su diseño. En la página de inicio se ha creado una experiencia de usuario exclusiva ubicando en su centro un elemento visual importante. Mientras que en el resto de las páginas se refleja un estilo sencillo pero elegante que está perfectamente alineado con las intenciones del restaurante.
    </p>`,
    skills: {
      html: lang.skills.html,
      css: lang.skills.css,
      js: lang.skills.js,
      gsapLib: { name: "gsap lib" }
    },
    github: "https://github.com/Oudwins/zwary",
    demo: "https://www.zwary.tristanmayo.com",
    imgCover: "projects/restaurante.JPG",
    imgResponsive: "projects/restaurante_responsive.jpg"
  }
];
