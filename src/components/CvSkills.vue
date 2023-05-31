<template>
  <div class="skills">
    <section>
      <p class="cv_heading">{{name}}</p>
      <p v-if="comment" class="comment"> {{comment}}</p>
    </section>
    <div class="cv_heading skillDiv">
      <div v-for="index in 5" :key="index" :class="getDivClass(index)"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillsComponent",
  props: {
    name: String,
    levels: Number,
    comment: String
  },
  methods: {
    getDivClass(index) {
      if (index <= this.levels) {
        return 'colored-div';
      } else {
        return 'uncolored-div';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.skills {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: .5rem;
  .skillDiv {
    display: flex;
    flex-direction: row;
    gap: .2rem;
    div {
      height: 1rem;
      width: .5rem;
      border-radius: 2px;
    }
    .uncolored-div {background-color: rgba(125, 136, 113, 0.5);}
    .colored-div {background-color: #98A589;}
  }
  .cv_heading {
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    color: #2E2E2E;
    margin-bottom: 4px;
  }
  .comment {margin: 0 0 4px 0;}
}


</style>