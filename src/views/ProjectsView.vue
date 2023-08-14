<template>
  <div>
      <section class="projectsNav">
        <router-link to="/projects/work">Work projects</router-link>
        <router-link to="/projects/hobby">Hobby projects</router-link>
      </section>
  </div>
  <router-view></router-view>
  <loadingComponent v-if="isLoading"/>
</template>

<script>
import loadingComponent from "@/components/loadingComponent";

export default {
  name: "ProjectsView",
  components: {  loadingComponent },
  data () {
    return {
      hobby: false,
      work: true,
      isLoading: true,
    }
  },
  methods: {

  },
  mounted() {
    this.isLoading = false
  }
}
</script>

<style scoped>
.projectsNav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 4rem;
}
.projectsNav a {
  font-weight: 500;
  color: #98A589;
  text-decoration: none;
  text-transform: uppercase;
  border-bottom: #98A589 solid 1px;
  padding: .5rem 4rem;
  cursor: pointer;
}

.projectsNav a.router-link-exact-active {
  border-bottom: #98A589 solid 2px;
}
</style>