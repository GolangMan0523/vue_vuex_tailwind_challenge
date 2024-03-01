<template>
  <div class="bg-fixed bg-top bg-cover w-screen h-screen" style="background-image: url('/img/background.png');">

    <div class="flex flex-col w-full items-center p-20 pt-10 h-full relative overflow-auto ">
      <div class="flex flex-row justify-end py-5 px-10 fixed top-0 w-1/2 h-16 z-10 ">
        <div class="rounded-full w-10 h-10 flex justify-center items-center bg-white">
          i
        </div>
      </div>

      <Avatar />

      <List />

    </div>

  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import List from "./sub/list";
import Avatar from "./sub/avatar";
const { mapState, mapActions } = createNamespacedHelpers("counter");

export default {
  components: {
    List,
    Avatar
  },
  computed: {
    ...mapState(["count"])
  },
  methods: {
    ...mapActions(["increment", "decrement"])
  }
};
</script>

<style>
.block-text {
  @apply bg-gray-300 inline-block px-2 font-light rounded my-1;
}
</style>