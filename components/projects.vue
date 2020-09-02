<template>
  <!-- Project Item -->
  <section class="projects" id="projects">
    <div class="inner">
      <h2>Proyectos</h2>
      <div class="projects-content">
        <app-project
          v-for=" project in projects"
          :key="project.name"
          :project="project"
          @click.native="showModal(project)"
        ></app-project>
      </div>
      <app-modal v-show="modal" :content="modalProject" @close-modal="modal = false"></app-modal>
    </div>
  </section>
  <!-- Project Item End -->
</template>

<script>
import Project from "./minicomponents/project.vue";
import Modal from "./modal.vue";
export default {
  data() {
    return {
      modal: false,
      modalProject: this.projects[0],
    };
  },
  props: ["projects"],
  components: {
    appProject: Project,
    appModal: Modal,
  },
  methods: {
    showModal(project) {
      this.modalProject = project;
      this.modal = true;
    },
  },
};
</script>

<style lang="scss">
.projects {
  background: $greyBg;
}

.projects-content {
  margin: $spacer3 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
