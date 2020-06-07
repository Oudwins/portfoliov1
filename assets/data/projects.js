import { langSkills, frameworkSkills } from './skills';
const lang = langSkills.skills;
const frame = frameworkSkills.skills;

export default [
 {
  name: 'Tu Cocktail',
  smDescription: 'Descripcion corta',
  lgDescription: 'descripcion larga',
  skills: [lang.html, lang.css, frame.boostrap, lang.sass, lang.js, frame.vue],
  github: 'https://github.com/Oudwins/tuCocktail',
  // TODO
  demo: 'DEMOURL',
  // TODO
  imgCover: '~assets/img/tucocktail.jpg'
 },
 {
  name: "Let's Academia",
  smDescription: 'Descripcion corta',
  lgDescription: 'descripcion larga',
  skills: [lang.html, lang.css, lang.js, frame.boostrap],
  github: 'https://github.com/Oudwins/lets-academia',
  demo: 'https://suspicious-ramanujan-0fed5b.netlify.app/',
  // TODO
  imgCover: '~assets/img/lets.jpg'
 },
 {
  name: 'Zwary Restaurant',
  smDescription: 'Descripcion corta',
  lgDescription: 'descripcion larga',
  skills: [lang.html, lang.css, lang.js],
  github: 'https://github.com/Oudwins/zwary',
  demo: 'https://hardcore-meninsky-2d3612.netlify.app/',
  // TODO
  imgCover: '~assets/img/zwary.jpg'
 },
]



