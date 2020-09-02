<template>
  <header class="header" :class="{'nav-light': scrollPosition > 600}">
    <nav class="navbar">
      <div class="container">
        <div class="brand">
          <img src="~assets/img/logo/logo-white.svg" alt="Logo de pagina" />
        </div>
        <div class="toggle" @click="navOpen = !navOpen">
          <span class="toggle-btn" :class="{open: navOpen}"></span>
        </div>
        <div class="menu" :class="{open: navOpen}">
          <ul class="menu-list" :class="{open: navOpen}">
            <li
              class="menu-item"
              :class="{open: navOpen}"
              v-for="link in navLinks"
              :key="link.name"
            >
              <a :href="link.url" @click="navOpen = false" class="menu-link">{{ link.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navOpen: false,
      navLinks: this.$store.state.menu,
      scrollPosition: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    goTo() {},
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.updateScroll);
  },
};
</script>

<style lang="scss">
.container {
  width: 100%;
  padding: 0 5%;
  margin: 0 auto;
}

// Header & Navbar Style
.header {
  position: fixed;
  z-index: 2;
  width: 100%;
  padding: 1rem;

  .navbar {
    .toggle {
      position: absolute;
      width: 2rem;
      height: 1.4rem;
      top: 2rem;
      right: 4rem;
      z-index: 2;
      cursor: pointer;
      @include transition-basic;

      &-btn {
        position: absolute;
        top: 0.5rem;
        right: 0;
        width: 1.6rem;
        height: 2px;
        background: $white;
        @include transition-basic;

        &::before {
          content: "";
          position: absolute;
          top: -0.5rem;
          width: 2rem;
          height: 2px;
          background: $white;
          @include transition-basic;
        }

        &::after {
          content: "";
          position: absolute;
          top: 0.5rem;
          width: 1.2rem;
          height: 2px;
          background: $white;
          @include transition-basic;
        }

        &.open {
          transform: rotate(720deg);
          background: transparent;

          &::before {
            transform: rotate(45deg) translate(5px, 8px);
            background: $blackText;
          }

          &::after {
            width: 2rem;
            transform: rotate(-45deg) translate(3px, -6px);
            background: $blackText;
          }
        }
      }
    }

    .menu {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      opacity: 1;
      visibility: hidden;

      &.open {
        visibility: visible;
      }

      &-list {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        height: 100vh;
        overflow: hidden;
        list-style: none;
        list-style-type: none;
        padding-right: 1rem;
        background: $white;
        transform: translateY(-100%);
        @include transition-basic;

        &.open {
          transform: translateY(0);
        }
      }

      &-item {
        transform: translateX(100vw);
        @include transition-basic;

        &.open {
          transform: translateX(0);
        }
      }

      &-link {
        display: inline-block;
        padding: 1rem 0;
        font-size: 1.5rem;
        font-weight: 400;
        line-height: inherit;
        color: $blackText;
        text-transform: uppercase;
        @include transition-basic;

        &:hover {
          color: $primary;
        }
      }

      @for $i from 1 through 5 {
        .menu-list {
          .menu-item:nth-child(#{$i}) {
            transition-delay: ($i * 0.1s) + 0.15s;
          }
        }
      }
    }

    .brand {
      img {
        height: 40px;
        width: 40px;
      }
    }
  }
}

.nav-light {
  background: black;
}
</style>
