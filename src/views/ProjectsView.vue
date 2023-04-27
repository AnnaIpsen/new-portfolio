<template>
  <div>
      <section class="projectsNav">
        <a @click="workProjectView" :class="{ active: work }">Work projects</a>
        <a @click="hobbyProjectView" :class="{ active: hobby }">Hobby projects</a>
      </section>
    <hobby-projects v-show="hobby"/>
    <work-projects v-show="work"/>
  </div>
  <loadingComponent v-if="isLoading"/>
</template>

<script>
import hobbyProjects from "@/components/HobbyProjects";
import workProjects from "@/components/WorkProjects";
import loadingComponent from "@/components/loadingComponent";

export default {
  name: "ProjectsView",
  components: { hobbyProjects, workProjects, loadingComponent },
  data () {
    return {
      hobby: false,
      work: true,
      isLoading: true,
    }
  },
  methods: {
    hobbyProjectView () {
      this.hobby = true
      this.work = false
    },
    workProjectView () {
      this.work = true
      this.hobby = false
    }
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

.projectsNav .active {
  border-bottom: #98A589 solid 2px;
}
</style>