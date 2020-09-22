<template>
  <div class="my-3 p-3 bg-white rounded box-shadow">
    <h6 class="border-bottom border-gray pb-2 mb-0">Task Lists</h6>
    <div class="text-right">
      <small class="d-inline-block mx-4">
        <a href="#" @click="isShowAll = !isShowAll">Show not done</a>
      </small>
      <small class="d-inline-block mt-3">
        <a href="#" @click="resetTest">Reset</a>
      </small>
    </div>
    <b-list-group>
      <TaskDetail
        v-for="(item, index) in todoLists"
        :key="index"
        :item="item"
        :isShow="!item.status || isShowAll"
        @makeDone="makeDone(index)"
        @makeNotDone="makeNotDone(index)"
        @destroyTask="destroyTask(index)"
      ></TaskDetail>
    </b-list-group>
  </div>
</template>
<script>
import TaskDetail from "./TaskDetail";

export default {
  name: "TheLists",
  components: {
    TaskDetail
  },
  data() {
    return {
      isShowAll: true,
      todoLists: [
        { name: "Cras justo odio", status: false },
        { name: "Dapibus ac facilisis in", status: true },
        { name: "Morbi leo risus", status: true },
        { name: "Porta ac consectetur ac", status: true },
        { name: "Vestibulum at eros", status: false }
      ]
    };
  },
  methods: {
    async destroyTask(index) {
      try {
        await this.$dialog.confirm("Do you really want destroy this item?");
        this.todoLists.splice(index, 1);
      } catch {
        // user cancel confirm
      }
    },
    makeDone(index) {
      this.todoLists[index].status = true;
    },
    makeNotDone(index) {
      this.todoLists[index].status = false;
    },
    resetTest() {
      this.todoLists = [
        { name: "Cras justo odio", status: false },
        { name: "Dapibus ac facilisis in", status: true },
        { name: "Morbi leo risus", status: true },
        { name: "Porta ac consectetur ac", status: true },
        { name: "Vestibulum at eros", status: false }
      ];
    }
  }
};
</script>