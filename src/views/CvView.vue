<template>
  <div class="cv">
    <section class="headings">
      <h1>CV</h1>
    </section>
    <section class="cv">
      <img src="../assets/Anna-Ipsen-cv.jpg">
      <div class="education">
        <h2>Education</h2>
        <education-component
            v-for="(education, index) in educations"
            :key="index"
            :name="education.name"
            :when="education.when"
            :where="education.where"
        />
      </div>
      <div class="tech">
        <h2>Technologies</h2>
        <div class="techWrapper">
          <p
              v-for="(tech, index) in techs"
              :key ="index"
          >
            {{ tech }}
          </p>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import educationComponent from "@/components/EducationComponent";
import cv from "../content/cv_content.json"
export default {
  name: "CvView",
  components: {educationComponent},
  data () {
    return {
      educations: cv.education,
      works: cv.work,
      volunteerings: cv.volunteering,
      skills: cv.skills,
      languages: cv.language,
      techs: cv.tech,
    }
  }
}
</script>

<style scoped>
.cv {
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
img {
  width: 20rem;
}

.techWrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 25rem;
}
.techWrapper p {width: 8rem}

</style>