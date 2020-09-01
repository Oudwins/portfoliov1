<template>
  <div class="footer section">
    <div class="inner">
      <!-- TODO make smaller -->
      <app-socials class="f-socials"></app-socials>
      <div class="f-line" style="width: 50%;"></div>
      <div class="f-legal">
        <a href>Terminos de Uso</a>
        <a href>Política de Privacidad</a>
        <a href>Política de Cookies</a>
      </div>
      <div class="f-line" style="width: 30%;"></div>
      <p class="f-copywrite">{{ copyWrite }}</p>
    </div>
  </div>
</template>

<script>
import Socials from "./minicomponents/Socials";
export default {
  data() {
    return {
      socials: this.$store.state.socials,
      copyWrite: `©  ${new Date().getFullYear()} Tristan Mayo Freire, todos los derechos reservados`,
    };
  },
  components: {
    appSocials: Socials,
  },
};
</script>

<style lang="scss">
.footer {
  background: rgba($color: #000000, $alpha: 0.95);
  padding: $spacer2 0;
  text-align: center;
  p {
    font-size: 0.8rem;
    color: $greyText;
    margin: 0.5rem 0;
    width: 50%;
  }
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}

.f-socials {
  margin: 0.5rem 0;
}
.f-line {
  height: 1px;
  background: $greyBg;
  margin: 0 auto;
}

.f-legal {
  > a {
    text-decoration: none;
    color: $greyBg;
    margin: 0.5rem 0.5rem;
    display: block;
    transition: color, text-decoration 300ms ease-in-out;
  }
  > a:hover {
    text-decoration: underline;
    color: $white;
  }
}

@media all and (min-width: 768px) {
  .footer {
    p {
      width: 100%;
    }
  }

  .f-line {
    margin: 1rem auto;
  }

  .f-legal {
    > a {
      display: inline-block;
    }
  }
}
</style>
