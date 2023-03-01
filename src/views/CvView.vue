<template>
  <div class="cv">
    <section class="headings">
      <h1>CV</h1>
    </section>
    <section class="cvWrapper">
      <section class="row">
        <div class="education">
          <h2>Education</h2>
          <cv-component
              v-for="(education, index) in educations"
              :key="index"
              :name="education.name"
              :when="education.when"
              :where="education.where"
          />
        </div>
        <div class="work">
          <h2>Working History</h2>
          <cv-component
              v-for="(work, index) in works"
              :key="index"
              :name="work.name"
              :when="work.when"
              :where="work.where"
              :company="work.company"
          />
        </div>
        <div class="volunteering">
          <h2>Volunteering</h2>
          <cv-component
              v-for="(job, index) in volunteerings"
              :key="index"
              :name="job.name"
              :when="job.when"
              :where="job.where"
          />
        </div>
      </section>
      <section class="row">
        <img src="../assets/Anna-Ipsen-cv.jpg">
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


    </section>

  </div>
</template>

<script>
import cv from "../content/cv_content.json"
import CvComponent from "@/components/CvComponent";
export default {
  name: "CvView",
  components: {CvComponent},
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
  flex-wrap: wrap;
  gap: 4rem;
}

.cvWrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
.row {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
.education, .volunteering, .work {width: 25rem}
.tech, img {width: 25rem}
.headings {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.headings h1 {
  margin: .2rem 0;
}

.techWrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.techWrapper p {width: 8rem}

</style>