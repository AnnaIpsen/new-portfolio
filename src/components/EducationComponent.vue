<template>
  <div class="education">
    <section>
      <p class="cv_heading">{{name}}</p>
      <p class="dateInterval">{{when}}</p>
    </section>
    <p class="cv_heading">{{where}}</p>
  </div>
</template>

<script>
export default {
  name: "EducationComponent",
  props: {
    name: String,
    where: String,
    when: String
  }
}
</script>

<style scoped>
.education {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 25rem;
  margin-bottom: 1rem;
}
.cv_heading {
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  color: #2E2E2E;
  margin-bottom: 0;
}
.dateInterval {margin: 0; font-style: italic}

</style>