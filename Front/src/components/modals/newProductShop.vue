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
import formu from "../../views/sellerView/form/newproduct.vue";
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
  },
};
</script>

<style scoped></style>
