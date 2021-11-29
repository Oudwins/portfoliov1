<template>
  <!-- 2 col layout, with image on side  -->
  <div class="about">
    <div class="left vertical-align">
      <img src="~assets/img/about/image.png" alt="Personal Photo" />
    </div>
    <div class="right vertical-align">
      <h2>Sobre Mí</h2>
      <p>
        Mi primer encuentro con el mundo del desarrollo web fue en Bachillerato.
        Tuve un profesor magnífico con quien aprendí las bases de HTML, CSS,
        Javascript y Visual Basic. Más tarde, comenzé mi carrera profesional
        estudiando LEINN (Grado en Liderazgo Emprendimiento e Innovación) de la
        Universidad de Mondragon en Madrid. Una formación similar a ADE
        (Administración y Dirección de Empresas) pero con un enfoque más
        práctico. Durante el primer año trabaje con Wordpress (sin tener aún
        conocimientos de programación) y desde entonces he pasado mucho tiempo
        mejorando mis habilidades.
      </p>
      <br />
      <p>
        Más tarde, entré a formar parte de Demium Startups, una incubadora
        pre-idea y pre-equipo, donde trabajé y aprendí muchisimo y conocí a
        profesionales increíbles. Descubrí la importancia de ser tenaz.
        Continuamente me enfrentaba a problemas que no sabía solucionar. Hubiera
        sido muy fácil tirar la toalla pero es en esos momentos, en los que no
        ves salida alguna, cuando más aprendes y creces. Además, tuve que
        adaptarme a un entorno de alta velocidad, pues la rapidez es una de las
        ventajas clave que tiene una startup frente a sus competidores más
        establecidos.
      </p>
      <br />
      <p>
        Decidí dar el paso y probar un mundo por el que me sentía atraido desde
        hacia años, el desarrollo web. Tenía la intención de matricularme en
        Ingenieria Informática, pero faltaban meses para la temporada y decidí
        comenzar por mi cuenta. Empecé haciendo varios cursos online de HTML,
        CSS y Javascript, así como una formación de introducción a la
        programación ofrecida por Harvard.
      </p>
      <br />
      <p>
        Siempre he disfrutado mucho de aprender por mi cuenta. Es un reto
        personal de dedicación y distiplina tan grande como gratificante. Pero
        nunca me había puesto un objetivo de ese calibre y mentiría si dijera
        que ha sido fácil. Sin embargo, no me arrepiento en lo más mínimo, cada
        nueva tecnología que aprendo, cada proyecto que realizo me refirma en
        que estoy donde debería estar, que voy por buen camino. Por eso
        continuamente busco oportunidades para seguir desarrollandome en este
        ámbito.
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
