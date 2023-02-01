<template>
  <div>
    <section class="projectsNav">
      <router-link to="/projects/work">Projects</router-link>
      <router-link to="/projects/hobby">Hobby projects</router-link>
    </section>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "ProjectsView"
}
</script>

<style scoped>
.projectsNav {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.projectsNav a {
  font-weight: 500;
  color: #98A589;
  text-decoration: none;
  text-transform: uppercase;
  border-bottom: #98A589 solid 1px;
  padding: .5rem 4rem;
}

.projectsNav a.router-link-exact-active {
  border-bottom: #98A589 solid 2px;
}
</style>