<template>
  <!--Landing Page start -->
  <client-only>
    <div class="theme-landing">
      <Header />
      <Slider />
      <!-- <AppDesign /> -->
      <ChitChat />
      <Collaboration />
      <TeamWork />
      <!-- <SecureApp /> -->

      <!-- 나중에 우리팀 팀원들 넣기 -->
      <!-- <section class="section-py-space light-bg">
        <div class="landing-title">
          <div>
            <h1>Team</h1>
          </div>
          <div class="sub-title">
            <div>
              <h4>Team</h4>
              <h2>Our Experts</h2>
            </div>
          </div>
        </div>
        <Testimonial />
      </section> -->

      <!-- <PricingPlan /> -->
      <!-- <SubscribeUpdate /> -->
      <Footer />
      <TapTop />
    </div>
  </client-only>
  <!--Landing Page end -->
</template>

<script>
import Header from "../common/header/header.vue";
import Logo from "../common/logo/logo.vue";
import Navbar from "../common/navbar/navbar.vue";
import Slider from "../landing-page/slider.vue";
import AppDesign from "../landing-page/app-design.vue";
import ChitChat from "../landing-page/chit-chat.vue";
import TeamWork from "../landing-page/team-work.vue";
import Collaboration from "../landing-page/collaboration.vue";
import Testimonial from "../landing-page/testimonial.vue";
import SecureApp from "../landing-page/secure-app.vue";
import PricingPlan from "../landing-page/pricing-plan.vue";
import SubscribeUpdate from "../landing-page/subscribe-update.vue";
import Footer from "../common/footer/footer.vue";
import TapTop from "../common/tap-to-top/taptop.vue";
import { mapState } from "vuex";

export default {
  components: {
    Header,
    Logo,
    Navbar,
    Slider,
    AppDesign,
    ChitChat,
    TeamWork,
    Collaboration,
    Testimonial,
    SecureApp,
    PricingPlan,
    SubscribeUpdate,
    Footer,
    TapTop,
  },
  mounted() {
    if (this.openviduSession) {
      if (this.openviduSession) {
        this.openviduSession.disconnect();
      }

      // var medias = null;
      // var rc = null;
      // navigator.mediaDevices.getUserMedia({ audio: true }).then((res) => {
      //   medias = res;
      //   rc = new MediaRecorder(res, { mimeType: "video/webm;codecs=vp9,opus" });
      //   rc.start();
      //   setTimeout(() => {
      //     console.log("end");
      //     medias = null; // the indicator will disapear.
      //     rc.stop();
      //     rc = null;
      //   }, 5000);
      // });

      // navigator.mediaDevices
      //   .getUserMedia({ video: true, audio: false })
      //   .then((mediaStream) => {
      //     mediaStream.getTracks().forEach(function (track) {
      //       if (track.readyState == "live") {
      //         console.log("[track] : " + track);
      //         track.stop();
      //       }
      //     });
      //   });
    }
  },
  computed: {
    ...mapState({
      openviduSession: (state) => state.openvidu.session,
    }),
  },
  head() {
    return {
      bodyAttrs: {
        class: "theme-landing-main",
      },
    };
  },
};
</script>
