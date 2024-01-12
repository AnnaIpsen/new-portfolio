<template>
  <div class="skills">
    <section>
      <p class="cv_heading">{{name}}</p>
      <p v-if="comment" class="comment"> {{comment}}</p>
    </section>
    <div class="skillDiv">
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
  width: 100%;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
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
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    color: #98A589;
    margin: 0;
  }
  .comment {margin: 0 0 4px 0;}
}


</style>