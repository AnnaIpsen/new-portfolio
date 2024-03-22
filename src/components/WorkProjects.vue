<template>
  <div class="work">
    <section class="headings">
      <h1>Work projects</h1>
    </section>
    <section class="projects">
      <project-card
          data-aos="fade-up"
          data-aos-duration="1500"
          v-for="(project, index) in projectsArray"
          :key="index"
          :projectName = "project.name"
          :tags="project.tags"
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

<style scoped lang="scss">
.work {
  display: flex;
  flex-direction: column;
  gap: 5rem;
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
@media only screen and (max-width: 844px) {
  .work {
    gap: 3rem;
    .headings{
      text-align: center;
    }
  }
}
@media only screen and (orientation: landscape) and (max-width: 844px) {
  .projects {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
</style>