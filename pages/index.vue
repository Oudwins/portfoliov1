<template>
  <main>
    <!-- !Hero -->
    <section class="hero" id="hero">
      <div class="inner">
        <h1>Tristan Mayo</h1>
        <h3>Desarrollador Web Full-Stack</h3>
        <app-socials class="social-links"></app-socials>
      </div>
    </section>
    <!-- Skills -->
    <section class="skills" id="skills">
      <div class="inner">
        <h2>Competencias</h2>
        <div class="skills-box-cont">
          <div class="skills-box">
            <div class="skills-box-icon">
              <i class="fas fa-laptop-code"></i>
            </div>
            <div class="skills-box-content">
              <h3>Lenguajes</h3>
              <app-skills :skills="skills.lang.skills"></app-skills>
            </div>
          </div>
          <div class="skills-box">
            <div class="skills-box-icon">
              <i class="fas fa-pencil-ruler"></i>
            </div>
            <div class="skills-box-content">
              <h3>Front End</h3>
              <app-skills :skills="skills.frontEnd.skills"></app-skills>
            </div>
          </div>
          <div class="skills-box">
            <div class="skills-box-icon">
              <i class="fas fa-cogs"></i>
            </div>
            <div class="skills-box-content">
              <h3>Back End</h3>
              <app-skills :skills="skills.backEnd.skills"></app-skills>
            </div>
          </div>
          <div class="skills-box">
            <div class="skills-box-icon">
              <i class="fas fa-feather-alt"></i>
            </div>
            <div class="skills-box-content">
              <h3>Diseño/Otros</h3>
              <app-skills :skills="skills.design.skills"></app-skills>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Projects -->
    <app-projects :projects="projects" id="projects"></app-projects>
    <!-- About -->
    <app-about id="about"></app-about>
    <!-- Contact -->
    <app-contact id="contact"></app-contact>
  </main>
</template>

<script>
// ! component imports
import Skills from "../components/Skills.vue";
import Projects from "../components/projects.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import Socials from "../components/minicomponents/Socials";

export default {
  data() {
    return {
      skills: {
        lang: this.$store.state.skills.lang,
        frontEnd: this.$store.state.skills.frontEnd,
        backEnd: this.$store.state.skills.backEnd,
        design: this.$store.state.skills.design
      },
      projects: this.$store.state.projects
    };
  },
  head: {
    titleTemplate: "%s | Desarrollador Web | Front End"
  },
  components: {
    appSkills: Skills,
    appProjects: Projects,
    appSocials: Socials,
    appAbout: About,
    appContact: Contact
  }
};
</script>

<style lang="scss">
// ! HERO
.hero {
  background: linear-gradient($overlayHeavy, $overlayHeavy),
    url("~assets/img/header.jpg") center/cover fixed no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: $white;
  h1 {
    padding-bottom: $spacer0;
  }
}
.social-links {
  margin-top: $spacer;
}
.hero-social {
  margin: 0 $spacer0;

  i {
    font-size: 3rem;
    color: $greyBg;
    opacity: 0.7;
    transition: opacity 250ms ease-in-out;
    cursor: pointer;
  }
  i:hover {
    opacity: 1;
  }
}

// ! SKILLS
// TODO there is a problem here with overflow-x i put hidden in body to get around it.
.skills-box-cont {
  display: flex;
  flex-wrap: wrap;
  margin: $spacer3 0px;
  justify-content: space-between;
}
.skills-box {
  box-shadow: 1px 1px 10px $greyText;
  flex: 1 1 400px;
  padding: 30px;
  margin: 2rem 0.5rem 0 0.5rem;
}
.skills-box-icon {
  text-align: center;
  font-size: 3rem;
  color: $greyText;
}
</style>
