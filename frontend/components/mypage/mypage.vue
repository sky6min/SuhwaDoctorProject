<template>
  <section class="section-py-space faq-section">
      <ul class="page-decore">
        <li class="top"><img class="img-fluid inner2" src="../../assets/images/landing/footer/2.png" alt="footer-back-img"></li>
        <li class="bottom"><img class="img-fluid inner2" src="../../assets/images/landing/footer/2.png" alt="footer-back-img"></li>
      </ul>
      <Test />
      <div class="container d-flex">
        <!-- 프로필 -->
        <!-- <Profile class="left"/> -->
        <!-- 의사일 시 : 진료 가능 시간 -->
        <!-- <DoctorTime class="right"/> -->
      </div>
      <!-- 회원정보 수정버튼, 탈퇴버튼 -->
      <center>
        <b-button variant="primary mr-3">비밀번호 변경</b-button>
        <b-button variant="danger ml-3">회원탈퇴</b-button>
      </center>
  </section>
</template>

<script>
import Test from "./test.vue"
import Profile from "./profile.vue"
import DoctorTime from "./doctor_time.vue"

export default {
  components: {
    Test,
    Profile,
    DoctorTime,
  },
  data() {
      return {
        
      }
    },
    methods: {

    }
};
</script>

<style>
.left {
  width: 50%;
  float: left;
  box-sizing: border-box;
}
.right {
  width: 50%;
  float: right;
  box-sizing: border-box;
}
.card-header:first-child {
  border-radius: calc(1rem - 1px) calc(1rem - 1px) 0 0;
}
.card-header {
  position: relative;
  padding: 2rem 2rem;
  border-bottom: none;
  background-color: white;
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);
  z-index: 2;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: none;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  border-radius: 1rem;
}
.bg-gray-100 {
  background-color: #f8f9fa !important;
}
/* body{
  font-family: 'Poppins'!important;
} */
/* .text-primary {
  color: #4650dd !important;
} */
/* h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 {
 
  line-height: 1.2;
} */
.text-muted {
  color: #6c757d !important;
}
.lead {
  font-size: 1.125rem;
  font-weight: 300;
}
.text-sm {
  font-size: .7875rem !important;
}
/* h3, .h3 {
  font-size: 1.575rem;
} */
.page-holder {
  display: flex;
  overflow-x: hidden;
  width: 100%;
  min-height: calc(100vh - 72px);
 
  flex-wrap: wrap;
}
/* a {
  color: #4650dd!important;
  text-decoration: underline!important;
  cursor: pointer;
} */
.card-profile-img {
  position: relative;
  max-width: 8rem;
  margin-top: -6rem;
  margin-bottom: 1rem;
  border: 3px solid #fff;
  border-radius: 100%;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  z-index: 2;
}
img, svg {
  vertical-align: middle;
}
.avatar.avatar-lg {
  width: 5rem;
  height: 5rem;
  line-height: 5rem;
}
.avatar {
  display: inline-block;
  position: relative;
  width: 3rem;
  height: 3rem;
  text-align: center;
  border: #dee2e6;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  line-height: 3rem;
}
.form-control
{
  color: #343a40;
}
.page-heading {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 300;
}
.contentDiv
{
  padding-top: 4rem;
}
.card-profile .card-header {
  height: 9rem;
  background-position: center center;
  background-size: cover;
}
</style>

