<template>
  <div class="work">
    <section class="headings">
      <h1>Work projects</h1>
    </section>
  </div>
</template>

<script>
export default {
  name: "WorkProjects"
}
</script>

<style scoped>
.work {
  display: flex;
  flex-direction: column;
  gap: 4rem;
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
</style>