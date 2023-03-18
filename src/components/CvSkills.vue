<template>
  <div class="skills">
    <section>
      <p class="cv_heading">{{name}}</p>
      <p v-if="comment" class="comment"> {{comment}}</p>
    </section>
    <div class="cv_heading skillDiv">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillsComponent",
  props: {
    name: String,
    level: Number,
    comment: String
  },
}
</script>

<style scoped>
.skills {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: .5rem;
}
.cv_heading {
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  color: #2E2E2E;
  margin-bottom: 4px;
}
.comment {margin: 0 0 4px 0;}

.skillDiv {
  display: flex;
  flex-direction: row;
  gap: .2rem;
}
.skillDiv div {
  background-color: rgba(125, 136, 113, 0.5);
  height: 1rem;
  width: .5rem;
  border-radius: 2px;
}

</style>