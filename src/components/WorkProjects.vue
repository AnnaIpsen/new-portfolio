<template>
  <div class="work">
    <section class="headings">
      <h1>Work projects</h1>
    </section>
    <section class="projects">
      <project-card
          data-aos="fade-up"
          v-for="(project, index) in projectsArray"
          :key="index"
          :projectName = "project.name"
          :projectDescription = "project.description"
          :img = "project.img"
          :gitHubUrl = "project.gitHub"
          :demoUrl = "project.demo"
          :reversePosition = "Boolean(index % 2)"
      ></project-card>
    </section>
  </div>
</template>

<script>
import projectCard from "@/components/ProjectCard";
import projects from "../content/projects.json";
import AOS from "aos"

export default {
  name: "WorkProjects",
  components: {projectCard},
  data() {
    return {
      projectsArray: projects.projects,
    }
  },
  mounted() {
    AOS.init()
  }

}
</script>

<style scoped>
.work {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
.headings {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.headings h1 {
  margin: .2rem 0;
}
</style>