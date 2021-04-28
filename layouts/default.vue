<template>
  <!-- <Nuxt /> -->

  <main class="container flex h-screen py-10 space-x-8 lg:py-20">
    <div class="relative flex w-full h-full p-12 bg-gray-100 rounded-20">
      <!-- Sidebar -->
      <button class="absolute top-3 left-3" @click="sidebarOpen = !sidebarOpen">
        <svg
          class="w-6 h-6 transition-colors duration-300 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          :class="
            sidebarOpen
              ? 'text-blue-500 hover:text-blue-600'
              : 'text-coolGray-400 hover:text-coolGray-500'
          "
        >
          <path
            d="M18 3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0
          00-3-3zM6 5h12a1 1 0 011 1v2H5V6a1 1 0 011-1zM5 18v-8h6v9H6a1 1 0
          01-1-1zm13 1h-5v-9h6v8a1 1 0 01-1 1z"
          />
        </svg>
      </button>

      <div
        class="grid grid-flow-row-dense gap-8 overflow-y-auto auto-rows-products"
        :class="cartOpen ? 'lg:grid-cols-2' : 'lg:grid-cols-3'"
      >
        <ProductCard
          v-for="product in products"
          :key="product.name"
          :product="product"
        />
      </div>

      <!-- close shopping cart -->
      <button
        v-show="!cartOpen"
        class="absolute top-0 right-0 p-3 transition-colors duration-300 bg-blue-100 rounded-bl-20 rounded-tr-20 group hover:bg-blue-200"
        @click="cartOpen = true"
      >
        <svg
          class="w-6 h-6 text-blue-500 transition-colors duration-300 fill-current group-hover:text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M21.08 7a2 2 0 00-1.7-1H6.58L6 3.74A1 1 0 005 3H3a1 1 0 000 2h1.24L7 15.26A1 1 0 008 16h9a1 1 0 00.89-.55l3.28-6.56A2 2 0 0021.08 7z"
          />
          <circle cx="7.5" cy="19.5" r="1.5" />
          <circle cx="17.5" cy="19.5" r="1.5" />
        </svg>
      </button>
    </div>

    <transition
      enter-active-class="transition-all duration-150 "
      leave-active-class="transition-all duration-150"
      enter-class="transform max-w-0 translate-x-96"
      leave-to-class="transform max-w-0 translate-x-96"
      leave-class="max-w-xs"
      enter-to-class="max-w-xs"
    >
      <div v-show="cartOpen" :class="{ 'max-w-sm w-full': cartOpen }">
        <div
          class="relative flex items-center justify-center w-full h-full bg-gray-100 rounded-20"
        >
          <!-- Cart close button -->
          <button class="absolute top-3 right-3" @click="cartOpen = false">
            <svg
              class="w-6 h-6 transition-colors duration-300 fill-current text-coolGray-400 hover:text-coolGray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13.41 12l4.3-4.29a1 1 0 10-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 00-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 000 1.42 1 1 0 001.42 0l4.29-4.3 4.29 4.3a1 1 0 001.42 0 1 1 0 000-1.42z"
              />
            </svg>
          </button>

          <!-- Empty cart body -->
          <!-- <div
            class="flex flex-col items-center p-8 space-y-5 text-xl text-center"
            :class="{ 'transition-opacity duration-75 opacity-0': !cartOpen }"
          >
            <svg
              class="w-8 h-8 fill-current text-trueGray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.12 6.71l-2.83-2.83A3 3 0 0015.17 3H8.83a3 3 0 00-2.12.88L3.88 6.71A3 3 0 003 8.83V18a3 3 0 003 3h12a3 3 0 003-3V8.83a3 3 0 00-.88-2.12zm-12-1.42A1.05 1.05 0 018.83 5h6.34a1.05 1.05 0 01.71.29L17.59 7H6.41zM18 19H6a1 1 0 01-1-1V9h14v9a1 1 0 01-1 1z"
              />
              <path
                d="M15 11a1 1 0 00-1 1 2 2 0 01-4 0 1 1 0 00-2 0 4 4 0 008 0 1 1 0 00-1-1z"
              />
            </svg>

            <span class="font-bold text-trueGray-700">Your Cart is Empty</span>

            <span class="text-trueGray-400"
              >Looks like you haven’t added anything to your cart yet
            </span>
          </div> -->

          <div
            class="flex flex-col justify-between w-full h-full space-y-4 pb-14"
          >
            <div class="flex flex-col space-y-2.5 px-8 pt-8">
              <div class="flex flex-row items-center space-x-3">
                <svg
                  class="w-8 h-8 fill-current text-coolGray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20.12 6.71l-2.83-2.83A3 3 0 0015.17 3H8.83a3 3 0 00-2.12.88L3.88 6.71A3 3 0 003 8.83V18a3 3 0 003 3h12a3 3 0 003-3V8.83a3 3 0 00-.88-2.12zm-12-1.42A1.05 1.05 0 018.83 5h6.34a1.05 1.05 0 01.71.29L17.59 7H6.41zM18 19H6a1 1 0 01-1-1V9h14v9a1 1 0 01-1 1z"
                  />
                  <path
                    d="M15 11a1 1 0 00-1 1 2 2 0 01-4 0 1 1 0 00-2 0 4 4 0 008 0 1 1 0 00-1-1z"
                  />
                </svg>
                <h3 class="text-xl font-bold leading-none">Your Cart</h3>
              </div>
              <div class="w-1/2 h-0.5 rounded-md bg-trueGray-200"></div>
            </div>

            <ul class="flex-auto px-5 mx-3 space-y-4 overflow-y-auto">
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </ul>

            <div class="px-8 pb-3">
              <dl
                class="flex flex-row items-center justify-between font-bold text-trueGray-700"
              >
                <dt class="text-2xl leading-none"><b>Total:</b></dt>
                <dd class="text-4xl leading-none"><b>858 €</b></dd>
              </dl>
            </div>
          </div>

          <div class="absolute bottom-0 right-0 w-1/2 pl-4">
            <button
              class="flex flex-row items-center justify-between w-full p-4 transition-colors duration-300 bg-emerald-200 hover:bg-emerald-300 rounded-br-20 rounded-tl-20 text-emerald-400 hover:text-emerald-500"
            >
              <span class="text-lg font-medium leading-none">Checkout</span>

              <svg
                class="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M10.46 18a2.23 2.23 0 01-.91-.2 1.76 1.76 0 01-1.05-1.59V7.79A1.76 1.76 0 019.55 6.2a2.1 2.1 0 012.21.26l5.1 4.21a1.7 1.7 0 010 2.66l-5.1 4.21a2.06 2.06 0 01-1.3.46z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </transition>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import products from '~/static/products.json'

export default Vue.extend({
  asyncData () {
    return { products }
  },
  data() {
    return {
      cartOpen: true,
      sidebarOpen: false,
      products: [
          {
    "name": "Xiaomi Mi Smart Band 5 Black",
    "type": "big",
    "price": 55,
    "short_description": "Go Smart, live more. And more super amazing text about how amazing those smart watches are so you can buy them."
  },
  {
    "name": "Apple Watch Series 6",
    "type": "regular",
    "price": 429,
    "short_description": "On your wrist. Anytime. Anywhere."
  },
  {
    "name": "Samsung Galaxy Watch 3",
    "type": "regular",
    "price": 429,
    "short_description": "Smart watch. Smart life."
  },
  {
    "name": "Xiaomi Mi Robot Vacuum-Mop Pro",
    "type": "regular",
    "price": 300,
    "short_description": "A smart and efficient home helper"
  },
  {
    "name": "Apple iPhone 11 Pro Max",
    "type": "big",
    "price": 1189,
    "short_description": "And then there was Pro."
  },
  {
    "name": "Apple Watch Series 6",
    "type": "regular",
    "price": 459,
    "short_description": "The future of health is on your wrist."
  }
      ]
    }
  },
  head: {
    bodyAttrs: {
      class: 'h-screen font-sans antialiased',
    },
  },
})
</script>
