<template>
  <!-- Left-Sidebar Recent Chat start -->
  <div
    class="recent-default dynemic-sidebar"
    :class="activesidebar == 0 ? 'active' : ''"
  >
    <div class="recent">
      <div class="theme-title">
        <div class="media">
          <div>
            <h2>Recent</h2>
            <h4>Chat from your friends &#128536;</h4>
          </div>
          <div class="media-body">
            <a
              class="icon-btn  button-effect pull-right mobile-back"
              :class="
                toggleleftside == 'on'
                  ? 'btn-outline-light'
                  : 'btn-outline-primary'
              "
              ><i class="ti-angle-right" @click="mobilemenu()"></i></a
            ><a
              class="icon-btn button-effect pull-right mainnav"
              :class="
                toggleleftside == 'on'
                  ? 'btn-outline-light'
                  : 'btn-outline-primary'
              "
              @click="toggleSidebar()"
              ><i class="ti-layout-grid2"></i
            ></a>
          </div>
        </div>
      </div>
      <div class="recent-slider recent-chat ">
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, index) in recentchat"
              :key="index"
            >
              <div class="item">
                <div class="recent-box">
                  <div :class="item.activeclass"></div>
                  <div
                    :class="item.defaultclass"
                    :style="[
                      { 'background-image': 'url(' + item.image + ')' },
                      styleObject,
                    ]"
                  >
                    <h6>{{ item.user }}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="chat custom-scroll">
      <ul class="chat-cont-setting" :class="opeNewchat ? 'open' : ''">
        <li>
          <a
            href="javascript:void(0)"
            data-toggle="modal"
            data-target="#msgchatModal"
            @click="showNewChatModal()"
            ><span>new chat</span>
            <div class="icon-btn btn-outline-primary button-effect btn-sm">
              <feather
                type="message-square"
                size="15"
                height="15"
              ></feather></div
          ></a>
        </li>
        <li>
          <a
            href="javascript:void(0)"
            data-toggle="modal"
            data-target="#msgcallModal"
            @click="showNewCallModal()"
            ><span>new call</span>
            <div class="icon-btn btn-outline-success button-effect btn-sm">
              <feather type="phone" size="15" height="15"></feather></div
          ></a>
        </li>
        <li>
          <a
            href="javascript:void(0)"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            @click="showNewContactModal()"
            ><span>new Contact</span>
            <div class="icon-btn btn-outline-danger button-effect btn-sm">
              <feather type="users" size="15" height="15"></feather></div
          ></a>
        </li>
      </ul>
      <div class="theme-title">
        <div class="media">
          <div>
            <h2>Chat</h2>
            <h4>Start New Conversation</h4>
          </div>
          <div class="media-body text-right">
            <a
              class="icon-btn  btn-sm search contact-search"
              :class="
                toggleleftside == 'on'
                  ? 'btn-outline-light'
                  : 'btn-outline-primary'
              "
              href="javascript:void(0)"
              @click="toggleSearchbar()"
              ><feather type="search" size="15" height="15"></feather
            ></a>
            <form
              class="form-inline search-form"
              :class="openSearch ? 'open' : ''"
            >
              <div class="form-group">
                <input
                  class="form-control-plaintext"
                  type="search"
                  placeholder="Search.."
                />
                <div
                  class="icon-close close-search"
                  @click="openSearch = false"
                ></div>
              </div>
            </form>
            <a
              class="icon-btn btn-primary btn-fix chat-cont-toggle outside"
              :class="
                toggleleftside == 'on'
                  ? ''
                  : 'btn-outline-light btn-outline-primary'
              "
              @click="toggleNewChat()"
              href="javascript:void(0)"
              ><feather type="plus" size="15" height="15"></feather
            ></a>
          </div>
        </div>
      </div>
      <div class="theme-tab tab-sm chat-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" data-to="chat-content">
            <a
              class="nav-link button-effect"
              :class="activechat == 1 ? 'show active' : ''"
              @click="activateChat(1)"
              id="chat-tab"
              data-toggle="tab"
              href="javascript:void(0);"
              role="tab"
              aria-controls="chat"
              aria-selected="true"
              data-intro="Start chat"
              ><feather type="message-square"></feather>Chat</a
            >
          </li>
          <li class="nav-item" data-to="call-content">
            <a
              class="nav-link button-effect"
              :class="activechat == 2 ? 'show active' : ''"
              @click="activateChat(2)"
              id="call-tab"
              data-toggle="tab"
              href="javascript:void(0);"
              role="tab"
              aria-controls="call"
              aria-selected="false"
              ><feather type="phone"></feather>Call</a
            >
          </li>
          <li class="nav-item" data-to="contact-content">
            <a
              class="nav-link button-effect"
              :class="activechat == 3 ? 'show active' : ''"
              @click="activateChat(3)"
              id="contact-tab"
              data-toggle="tab"
              href="javascript:void(0);"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
              ><feather type="users"></feather>Contact</a
            >
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade"
            :class="activechat == 1 ? 'show active' : ''"
            id="chat"
            role="tabpanel"
            aria-labelledby="chat-tab"
          >
            <div class="theme-tab">
              <ul class="nav nav-tabs" id="myTab1" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link button-effect"
                    :class="activechatType == 1 ? 'active' : ''"
                    @click="activechatTab(1)"
                    id="direct-tab"
                    data-toggle="tab"
                    href="javascript:void(0);"
                    role="tab"
                    aria-controls="direct"
                    aria-selected="false"
                    data-to="chating"
                    >Direct</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link button-effect"
                    :class="activechatType == 2 ? 'active' : ''"
                    @click="activechatTab(2)"
                    id="group-tab"
                    data-toggle="tab"
                    href="javascript:void(0);"
                    role="tab"
                    aria-controls="group"
                    aria-selected="true"
                    data-to="group_chat"
                    >Group</a
                  >
                </li>
              </ul>
              <div class="tab-content" id="myTabContent1">
                <div
                  class="tab-pane fade"
                  :class="activechatType == 1 ? 'show active' : ''"
                  id="direct"
                  role="tabpanel"
                  aria-labelledby="direct-tab"
                >
                  <ul class="chat-main menu-trigger">
                    <DirectChatUsers />
                  </ul>
                </div>
                <GroupChatUsers />
              </div>
            </div>
          </div>
          <Calls />
          <Contacts />
        </div>
      </div>
    </div>
    <NewChat ref="newChatComponent" />
    <NewCall ref="newCallComponent" />
    <NewContact ref="newContactComponent" />
  </div>
  <!-- Left-Sidebar Recent Chat start -->
</template>

<script>
import { mapState } from "vuex";
import DirectChatUsers from "../chat/DirectChat/directchatuser.vue";
import GroupChatUsers from "../chat/GroupChat/groupchatuser.vue";
import Contacts from "../contacts/contacts.vue";
import Calls from "../calls/index.vue";
import NewChat from "../modals/newChat.vue";
import NewCall from "../modals/newCall.vue";
import NewContact from "../modals/newContact.vue";

export default {
  components: {
    DirectChatUsers,
    GroupChatUsers,
    Contacts,
    Calls,
    NewChat,
    NewCall,
    NewContact,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 1000,
        },
        breakpoints: {
          320: {
            slidesPerView: 2,
          },
          361: {
            slidesPerView: 3,
          },
          701: {
            slidesPerView: 5,
          },
          769: {
            slidesPerView: 7,
          },
          801: {
            slidesPerView: 2,
          },
          1367: {
            slidesPerView: 3,
          },
        },
      },
      recentchat: [
        {
          user: "John deo",
          image: require("@/assets/images/avtar/big/7.jpg"),
          activeclass: "dot-btn dot-danger grow",
          defaultclass: "recent-profile",
        },
        {
          user: "John",
          image: require("@/assets/images/avtar/big/8.jpg"),
          activeclass: "dot-btn dot-success grow",
          defaultclass: "recent-profile online",
        },
        {
          user: "Jony",
          image: require("@/assets/images/avtar/big/9.jpg"),
          activeclass: "dot-btn dot-warning grow",
          defaultclass: "recent-profile",
        },
      ],
      openSearch: false,
      opeNewchat: false,
      styleObject: {
        "background-size": "cover",
        "background-position": "center",
        display: "block",
      },
    };
  },
  computed: {
    ...mapState({
      activechatType: (state) => state.common.activechatType,
      activechat: (state) => state.common.activechat,
      toggleleftside: (state) => state.common.toggleleftside,
      activesidebar: (state) => state.common.activesidebar,
    }),
  },
  methods: {
    activechatTab(type) {
      this.$store.state.common.activechatType = type;
      this.$store.state.common.showprofilemenu = false;
      this.$store.state.common.showsticker = false;
      this.$store.state.common.showemogi = false;
      this.$store.state.common.showcontactcontent = false;
    },
    mobilemenu() {
        document.querySelector(".sidebar-toggle").classList.add("mobile-menu");
    },
    activateChat(type) {
      this.$store.state.common.activechat = type;
    },
    toggleSearchbar() {
      this.openSearch = !this.openSearch;
    },
    toggleSidebar() {
      if (this.$store.state.common.toggleleftside == "on") {
        this.$store.state.common.toggleleftside = "";
      } else {
        this.$store.state.common.toggleleftside = "on";
      }
    },
    toggleNewChat() {
      this.opeNewchat = !this.opeNewchat;
    },
    showNewChatModal() {
      this.$refs.newChatComponent.show();
    },
    showNewCallModal() {
      this.$refs.newCallComponent.show();
    },
    showNewContactModal() {
      this.opeNewchat = false;
      this.$refs.newContactComponent.show();
    },
  },
};
</script>
