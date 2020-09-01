import projects from './modules/projects';
import * as skills from './modules/skills';
import socials from './modules/social';
import menu from './modules/menu';
import header from './modules/header';
export const state = () => ({
 projects,
 skills,
 socials,
 menu,
 header,
 modalProject: ''
});


/* export const mutations = () => {
 modalmutation: (state, project) => {
  state.modalProject = project;
 }
};
export const actions = () => {
 modalaction: (context, project) => {
  context.commit("modalmutation", project);
 }
};

export const getters = () => {
 modalProject: (state) => {
  return state.modalProject;
 }
}; */