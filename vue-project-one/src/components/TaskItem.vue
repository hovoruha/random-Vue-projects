<template>
  <div
    v-for="(item, i) in contents"
    :key="item"
    class="task-item item-primary"
    :class="item.complete ? 'item-valid' : ''"
  >
    <div class="task-item-header">
      <div class="task-item-header-title">{{ item.id }} - {{ item.title }}</div>
      <div class="task-item-header-menu">
        <span><i class="fas fa-comment-dots"></i></span>
        <span @click="$emit('complete-task', i)"
          ><i
            :class="
              item.complete ? 'far fa-times-circle' : 'far fa-check-circle'
            "
          ></i
        ></span>
        <span @click="$emit('remove-task', i)"
          ><i class="fas fa-trash-alt"></i
        ></span>
      </div>
    </div>
    <div class="task-item-details">
      <div class="task-item-details-author">
        <span>issued by: </span>{{ item.author }}
      </div>
      <div class="task-item-details-date"><span>on: </span>{{ item.date }}</div>
    </div>
    <div class="task-item-content">{{ item.content }}</div>
  </div>
</template>

<script>
export default {
  name: "TaskItem",

  props: {
    contents: Array,
  },

  data() {
    return {
      isComplete: false,
    };
  },

  emits: ["complete-task", "remove-task"],

  methods: {},
};
</script>
