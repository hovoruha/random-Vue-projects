<template>
  <div class="app-showcase-item" v-for="item in contents" :key="item">
    <div class="app-showcase-item-header">
      <div class="app-showcase-item-header-title">
        <div class="app-showcase-item-header-title-menu">
          <span><i class="far fa-check-circle"></i></span>
          <span><i class="fas fa-info-circle"></i></span>
          <span @click="$emit('remove')"
            ><i class="far fa-times-circle"></i
          ></span>
        </div>
        <div class="app-showcase-item-header-title-text">
          {{ item.title }}
        </div>
      </div>
      <div class="app-showcase-item-header-description">
        {{ item.description }}
      </div>
      <div class="app-showcase-item-header-author">
        <span>issued by :</span>
        {{ item.author }}
      </div>
      <div class="app-showcase-item-header-date">
        <span>on :</span>
        {{ item.date }}
      </div>
    </div>
    <div class="app-showcase-item-content">{{ item.content }}</div>
  </div>
</template>

<script>
export default {
  name: "showcaseItem",

  props: {
    contents: Array,
    date: String,
  },

  emits: ["remove"],

  data() {
    return {};
  },

  methods: {},
};
</script>
