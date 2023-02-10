<template>
  <section class="card" :class = "{ reverse : reversePosition }">
    <section>
      <h2>{{ projectName }}</h2>
      <p> {{ projectDescription }}</p>
      <div class="buttons">
        <button @click="openUrl(this.gitHubUrl)">Code</button>
        <button v-if="demoUrl" @click="openUrl(this.demoUrl)">Demo</button>
      </div>
    </section>
    <img :src="resolvePath(img)">
  </section>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    projectName: String,
    projectDescription: String,
    gitHubUrl: String,
    demoUrl: String,
    img: String,
    reversePosition: Boolean
  },
  methods: {
    openUrl(url){
      window.open(url, '_blank');
    },
    resolvePath(file) {
      return require(`@/assets/work-project-images/${file}`)
    }
  }
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3rem;
  margin-bottom: 5rem;
}
.reverse {
  flex-direction: row-reverse !important;
}

.card section h2 {
  margin-top: 0;
}
.card img {
  width: 600px;
  height: 300px;
  object-fit: cover;
  border-radius: 20px;
}
.buttons {
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
}
.buttons button {
  padding: .5rem 2rem;
  background-color: #98A589;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  border: none;
  color: #FBF6EF;
  cursor: pointer;
}

</style>