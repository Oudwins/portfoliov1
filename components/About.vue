<template>
  <!-- 2 col layout, with image on side  -->
  <div class="about">
    <div class="left vertical-align">
      <img src="~assets/img/about/image.jpeg" alt="Personal Photo" />
    </div>
    <div class="right vertical-align">
      <h2>Sobre Mí</h2>
      <p>Mi primer encuentro con el mundo del desarrollo web fue en primero de bachillerato. Tuve un profesor magnífico con quien aprendí las bases de HTML, CSS, Javascript y Visual Basic. Sin embargo, desgraciadamente, en segundo cambiamos de profesor y acabe no disfrutando las clases de TIC. Más tarde, comenzé mi carrera profesional estudiando LEINN (Grado en Liderazgo Emprendimiento e Innovación) por Mondragon Universitat en Madrid. Un grado similar a ADE pero con un enfoque más práctico. A lo largo del año que pase ahí comenzé a trabajar con Wordpress (sin saber nada de código) y trás un año decidí ponerlo en pausa. Pero las habilidades que había desarrollado trabajando con Wordpress me las llevé. A lo largo desde entonces pase un tiempo mejorando mis habilidades de Wordpress mientras buscaba nuevo rumbo.</p>
      <br />
      <p>Fuí aceptado en Demium Startups, una incubadora pre-idea y pre-equipo donde aprendí mucho y conocí a personas increibles. Desgraciadamente tras unos meses muy duros no se consolidó ningún proyecto. En general fue una experiencia muy buena a la que no tengo intenciones de volver.</p>
      <br />
      <p>
        Hacia años que me interesaba el mundo del desarrollo web pero nunca había dado el paso. Hasta que un día me planteé probar durante unos meses. El resto ha sido historia, comenzé refrescando mis conocimientos de HTML y CSS, luego JS y finalmente aprendí Vue, Nuxt y SCSS.
        Me considero una persona fuerte, tenaz, comprometida que ama aprender. Estas cualidades que creo que me han permitido aprender todas las tecnologías que menciono por mi cuenta estudiando en internet sin necesidad de participar en un bootcamp o otro tipo de formación. Ahora tengo particular interés en aprender desarrollo backend con NodeJS o PHP pero actualmente no tengo ningún conocimiento en ese ámbito.
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.about {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: $spacer4;
  > div {
    flex: 1 1 50%;
  }
  h2 {
    margin: $spacer 0;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  p {
    font-size: 1.2rem;
  }
}

.right {
  text-align: justify;
  padding: 0 $spacer3;
}

@media all and (min-width: 1200px) {
  .about {
    flex-direction: row;
    padding: 0;
    margin: 0;
  }

  .right {
    @include flex_center;
    flex-direction: column;
  }
}

@media all and (max-width: 350px) {
  .about p {
    font-size: 0.8rem;
  }
}
</style>