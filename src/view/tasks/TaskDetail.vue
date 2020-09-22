<template>
  <b-list-group-item  v-if="isShow">
    <b-row>
      <b-col cols="10" :class="item.status ? 'text-danger': 'font-weight-bold text-info'">
        <del v-if="item.status">{{item.name}}</del>
        <span v-else>{{item.name}}</span>
      </b-col>
      <b-col cols="2">
        <b-icon
          icon="check2"
          scale="2"
          variant="success"
          class="mx-4"
          @click="makeDone"
          v-if="!item.status"
        ></b-icon>
        <b-icon icon="x-circle" scale="2" variant="danger" class="mx-4" @click="makeNotDone" v-else></b-icon>
        <b-icon icon="trash-fill" scale="2" variant="danger" @click="destroyTask"></b-icon>
      </b-col>
    </b-row>
  </b-list-group-item>
</template>

<script>
export default {
  name: "TaskDetail",
  props: ["item", "isShow"],
  data() {
    return {};
  },
  methods: {
    makeDone() {
      this.$emit("makeDone");
    },
    makeNotDone() {
      this.$emit("makeNotDone");
    },
    destroyTask() {
      this.$emit("destroyTask");
    }
  }
};
</script>