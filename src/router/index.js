import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView'
import ProjectsView from "../views/ProjectsView";
import CvView from "@/views/CvView";
import WorkProjects from "@/components/WorkProjects";
import HobbyProjects from "@/components/HobbyProjects";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/projects',
    name: 'Projects',
    redirect:'/projects/work',
    component: ProjectsView,
    children: [{
      path: '/projects/work',
      component: WorkProjects
      },
      {
        path: '/projects//hobby',
        component: HobbyProjects
      }]
  },
  {
    path: '/cv',
    name: 'CV',
    component: CvView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

