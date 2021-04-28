<template>
  <div
    class="relative p-4 overflow-hidden bg-white rounded-20 group"
    :class="{ 'row-span-2': product.type === 'big' }"
  >
    <div class="flex flex-col h-full justify-items-start">
      <h3 class="text-2xl font-medium leading-none text-trueGray-700">
        {{ product.name }}
      </h3>

      <span class="mt-4 text-sm leading-none text-trueGray-400">
        {{ product.short_description }}
      </span>
      <span class="mt-auto text-2xl font-bold leading-none">
        {{ product.price }} €
      </span>
    </div>

    <button
      class="absolute transition-opacity duration-150 opacity-0 top-3 right-3 group-hover:opacity-100"
    >
      <svg
        class="w-6 h-6 transition-colors duration-300 fill-current text-coolGray-400 hover:text-coolGray-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M20 5a1 1 0 00-1-1h-5a1 1 0 000 2h2.57l-3.28 3.29a1 1 0 000 1.42 1 1 0 001.42 0L18 7.42V10a1 1 0 001 1 1 1 0 001-1zM10.71 13.29a1 1 0 00-1.42 0L6 16.57V14a1 1 0 00-1-1 1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 000-2H7.42l3.29-3.29a1 1 0 000-1.42z"
        />
      </svg>
    </button>

    <button
      class="absolute bottom-0 right-0 p-3 transition-colors duration-300 bg-emerald-200 rounded-br-20 rounded-tl-20 group hover:bg-emerald-300"
    >
      <svg
        class="w-6 h-6 transition-colors duration-300 fill-current text-emerald-400 group-hover:text-emerald-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z"
        />
        <path
          d="M15 11h-2V9a1 1 0 00-2 0v2H9a1 1 0 000 2h2v2a1 1 0 002 0v-2h2a1 1 0 000-2z"
        />
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
})
</script>
