<template>
  <li class="flex items-center justify-between p-4 bg-itemGray rounded-20">
    <div
      class="flex flex-col items-start justify-between space-y-4 text-trueGray-700"
    >
      <span class="text-base font-medium leading-5">
        Apple Watch Series 6
      </span>
      <span class="text-lg font-bold leading-5">429 €</span>
    </div>

    <button
      class="p-3 transition-colors duration-150 bg-gray-200 rounded-md group hover:bg-gray-100"
    >
      <svg
        class="w-6 h-6 transition-colors duration-150 fill-current text-coolGray-400 group-hover:text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M13.41 12l4.3-4.29a1 1 0 10-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 00-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 000 1.42 1 1 0 001.42 0l4.29-4.3 4.29 4.3a1 1 0 001.42 0 1 1 0 000-1.42z"
        />
      </svg>
    </button>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CartItem',
  // props: ['cartItem'],
})
</script>
