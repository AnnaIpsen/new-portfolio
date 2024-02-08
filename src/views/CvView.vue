<template>
  <loadingComponent v-if="isLoading"/>

  <div class="cv">
    <section class="headings">
      <h1>CV</h1>
    </section>
    <section class="cvWrapper">
      <img src="../assets/Anna-Ipsen-cv.jpg" id="cvImage">
      <section class="row">
        <div class="education">
          <h2>Education</h2>
          <cv-component
              v-for="(education, index) in educations"
              :key="index"
              :name="education.name"
              :company= "education.school"
              :when="education.when"
              :where="education.where"
              :subjects="education.subjects"
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
              :description="work.description"
          />
        </div>
        <div class="volunteering">
          <h2>Volunteering</h2>
          <cv-component
              v-for="(job, index) in volunteerings"
              :key="index"
              :name="job.name"
              :company= "job.school"
              :when="job.when"
              :where="job.where"
          />
        </div>
      </section>
      <section class="row">
          <img src="../assets/Anna-Ipsen-cv.jpg" >
        <div class="skillsDiv">
          <h2>Languages</h2>
          <skills-component
              v-for="(language, index) in languages"
              :key="index"
              :name="language.name"
              :levels="language.level"
              :comment="language.comment"
          />
        </div>

        <div class="skillsDiv">
          <h2>Skills</h2>
          <skills-component
              v-for="(skill, index) in skills"
              :key="index"
              :name="skill.name"
              :levels="skill.level"
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


    </section>

  </div>
</template>

<script>
import cv from "../content/cv_content.json"
import CvComponent from "@/components/CvComponent";
import SkillsComponent from '@/components/CvSkills'
import loadingComponent from "@/components/loadingComponent";

export default {
  name: "CvView",
  components: {CvComponent, SkillsComponent, loadingComponent},
  data () {
    return {
      educations: cv.education,
      works: cv.work,
      volunteerings: cv.volunteering,
      skills: cv.skills,
      languages: cv.language,
      techs: cv.tech,
      isLoading: true,
    }
  },
  mounted() {
    this.isLoading = false
  }
}
</script>

<style scoped lang="scss">
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
  max-width: 100%;
  #cvImage {display: none}
}
.row {
  display: flex;
  max-width: 40%;
  flex-direction: column;
  gap: 2rem;
}
.education, .volunteering, .work, .tech, .skillsDiv  {width: 100%;}
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
  justify-content: flex-start;
  column-gap: 8px;
}
.techWrapper p {width: 8rem}

img {border-radius: 20px;}

@media only screen and (max-width: 844px) {
  .cv {
    margin: 9rem 1rem;
    .cvWrapper {
      flex-direction: column;
      gap: 2rem;
      #cvImage {
        display: block;
        max-height: 35rem;
        object-fit: cover;
        object-position: 0 10%;
      }
      .row {
        max-width: 100%;
        img {display: none}
        .techWrapper{
          column-gap: 2rem;
          p {width: 10rem}
        }
      }
    }
  }
}

</style>