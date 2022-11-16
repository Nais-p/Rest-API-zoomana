<template>
  <div class="modal" v-if="isActive" style="">
    <div>
      <div ref="content"></div>
      <div>
        <formu />
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import formu from "../../views/sellerView/form/newshop.vue";
export default {
  props: {},
  components: {
    formu,
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    open() {
      this.$emit("open");
      this.isActive = true;
    },

    close(e) {
      if (this.$refs.content.contains(e.target)) return;

      this.$emit("close");
      this.isActive = false;
    },
  },
};
</script>

<style scoped></style>
