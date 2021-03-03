<template>
  <ul class="flex-auto px-5 mx-3 space-y-4 overflow-y-auto">
    <CartItem
      v-for="cartItem in cartItems"
      :key="cartItem.name"
      :cart-item="cartItem"
    />
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CartItemList',
  props: {
    cartItems: {
      type: Array,
      required: false,
      default() {
        return []
      },
    },
  },
})
</script>
