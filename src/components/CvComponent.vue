<template>
  <div class="wrapper">
    <div class="education">
      <section>
        <p class="cv_heading">{{name}}</p>
        <p v-if="company" class="company"> {{company}}</p>
        <p class="dateInterval">{{when}}</p>
      </section>
      <p class="cv_heading">{{where}}</p>
    </div>
    <section v-if="subjects" class="subjects">
      <p v-for="(subject, index) in subjects" :key="index">
        <span v-if="index >= 1">•</span>
        {{subject}}
      </p>
    </section>
    <section v-if="description" class="subjects">
      <p>
        {{description}}
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "EducationComponent",
  props: {
    name: String,
    where: String,
    when: String,
    company: String,
    subjects: Array,
    description: String
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  margin-bottom: 2rem;
  .education {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: .5rem;
    .cv_heading {
      font-size: 15px;
      font-family: 'Montserrat', sans-serif;
      color: #2E2E2E;
      margin-bottom: 4px;
    }
    .company {margin: 0 0 4px 0;}
    .dateInterval {margin: 0; font-style: italic}
  }

  .subjects {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 0 .5rem;
    p {
      margin: 0;
      span{
        margin-right: .5rem;
      }
    }

  }
}

</style>