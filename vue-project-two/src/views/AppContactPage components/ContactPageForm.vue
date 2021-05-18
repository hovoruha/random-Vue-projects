<template>
  <form id="contactForm" action="#">
    <base-container class="bg-wh">
      <base-item class="txt-grn1 txt-sdw"
        ><h1>Or better yet, send me a message...</h1></base-item
      >
      <base-item>
        <base-input
          type="email"
          placeholder="enter your email address here..."
          v-model="formOutput.email"
        />
      </base-item>
      <base-item>
        <base-input
          type="text"
          placeholder="enter the topic subject here..."
          v-model="formOutput.subject"
        />
      </base-item>
      <base-item>
        <base-textarea
          v-model="formOutput.message"
          placeholder="your message here..."
        />
      </base-item>
      <base-item>
        <!-- <base-input
          type="submit"
          value="SEND MESSAGE"
          @click.prevent="submitMessage"
        /> -->
        <base-submit value="SEND MESSAGE" @click.prevent="submitMessage" />
      </base-item>
    </base-container>
  </form>
</template>

<script>
import BaseContainer from "../../components/base components/BaseContainer.vue";
import BaseItem from "../../components/base components/BaseItem.vue";
import BaseInput from "../../components/base components/BaseInput.vue";
import BaseTextarea from "../../components/base components/BaseTextarea.vue";
import BaseSubmit from "../../components/base components/BaseSubmit.vue";

export default {
  name: "ContactPageForm",

  components: {
    BaseContainer,
    BaseItem,
    BaseInput,
    BaseTextarea,
    BaseSubmit,
  },

  data() {
    return {
      formOutput: {
        email: "",
        subject: "",
        message: "",
      },
    };
  },

  methods: {
    submitMessage() {
      console.log(this.formOutput);
    },
  },
};
</script>

<style scoped>
#contactForm h1 {
  display: none;
}

.base-container {
  background-color: transparent;
}

/* media queries... */
@media only screen and (min-width: 737px) {
  #contactForm h1 {
    display: block;
    text-align: center;
    margin-bottom: 30px;
  }
}

@media only screen and (min-width: 1025px) {
  .base-container {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
  }
}
</style>
