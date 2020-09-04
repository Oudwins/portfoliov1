<template>
  <!-- Modal -->
  <div class="modal" @click="modalClose" ref="modal_outline">
    <div class="modal__content">
      <div class="modal__head">
        <span class="modal_close clearfix" ref="modal_close">&times;</span>
      </div>
      <div class="modal__body">
        <div class="modal__left">
          <img
            :src="require(`~/assets/img/${content.imgResponsive}`)"
            :alt="content.name + ' image'"
          />
        </div>
        <div class="modal__right">
          <div class="content-head">
            <h5>PROYECTO</h5>
            <h3 class="name">{{ content.name}}</h3>
          </div>
          <app-skills :skills="content.skills"></app-skills>
          <div class="modal__inf">
            <h5>INFORMACIÓN</h5>
            <p class="modal__description" v-html="content.lgDescription"></p>
          </div>
          <div class="modal__footer">
            <a
              :href="content.demo"
              class="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >Demo</a>
            <a
              :href="content.github"
              class="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >Codigo</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Skills from "./Skills.vue";
export default {
  props: ["content"],
  components: {
    appSkills: Skills,
  },
  methods: {
    modalClose(event) {
      if (
        event.target === this.$refs.modal_outline ||
        event.target === this.$refs.modal_close
      ) {
        this.$emit("close-modal");
      }
    },
  },
};
</script>

<style lang="scss">
.modal {
  z-index: 11;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: $overlay;
}
.modal__content {
  background: $white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: $boxShadow, $boxShadow;
  min-width: 90vw;
  max-width: 95vw;
  max-height: 90vh;
}
.modal_close {
  margin-right: $spacer;
  color: $greyText;
  float: right;
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
}
.modal_close:hover {
  color: $black;
}
.modal__left {
  display: none;
}
.modal__right {
  padding: $spacer;
  height: 100%;
  position: relative;
}
.content-head {
  h5 {
    margin-bottom: $spacer0;
  }
  margin-bottom: $spacer2;
}

.modal__inf {
  margin: $spacer3 0;
}
.modal__description {
  max-height: 40vh;
  overflow-y: auto;
  text-align: justify;
  margin-bottom: $spacer0;
}
.modal__footer {
  display: flex;
  flex-direction: column;
  .btn {
    margin: $spacer0;
    align-self: center;
  }
}

@media all and (min-width: 1200px) {
  .modal__body {
    display: flex;
  }
  .modal__left {
    display: block;
    flex: 1;
    height: 90vh;
    position: relative;

    img {
      max-height: 100%;
      max-width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .modal__right {
    flex: 1;
    padding: 2rem 1.5rem;
  }
  .modal__footer {
    display: flex;
    flex-direction: row;
  }
}

@media all and (max-width: 450px) and (max-height: 800px) {
  .modal__right {
    padding: $spacer0;
  }
  .content-head {
    margin-bottom: $spacer;
  }
  .modal__inf {
    margin: $spacer0 0;
  }
  .modal__description {
    max-height: 25vh;
  }
}
</style>
