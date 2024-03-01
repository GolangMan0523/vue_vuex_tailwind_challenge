<template>
  <div
    class="bg-fixed bg-cover bg-top w-screen h-screen"
    style="background-image: url('/img/background.png')"
  >
    <div
      class="flex flex-col w-full items-center p-10 pt-5 h-full relattive overflow-auto"
    >
      <div
        class="flex flex-row justify-end py-5 px-10 fixed top-0 w-1/2 h-16 z-10"
      >
        <div
          class="rounded-full w-10 h-10 flex justify-center items-center bg-white cursor-pointer"
        >
          <i class="fas fa-angle-up"></i>
        </div>
      </div>

      <Avatar />

      <List />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import Avatar from "./sub_comps/Avatar.vue";
import List from "./sub_comps/List.vue";
const { mapState, mapActions } = createNamespacedHelpers("counter");

export default {
  components: { Avatar, List },
  computed: {
    ...mapState(["count"]),
  },
  methods: {
    ...mapActions(["increment", "decrement"]),
  },
};
</script>

<style>
.block-text {
  @apply bg-gray-300 inline-block px-2 font-light rounded my-1;
}
</style>