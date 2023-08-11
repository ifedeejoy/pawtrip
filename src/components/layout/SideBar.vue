<template>
  <div
    class="flex flex-col justify-between w-3/12 h-full border-r border-gray-300"
  >
    <ul class="self-start w-full p-4 text-gray-500 bg-white menu">
      <!-- Sidebar content here -->
      <li class="w-full py-2">
        <a class="px-6 text-xl">
          <span class="pr-1"><v-icon scale="2" name="co-search" /></span>
          New Search
        </a>
      </li>
      <li class="w-full py-2">
        <a class="px-6 text-xl">
          <span class="pr-1"><v-icon scale="2" name="co-plus" /></span>
          Discover</a
        >
      </li>
      <li class="w-full py-2">
        <a class="px-6 text-xl">
          <span class="pr-1"><v-icon scale="2" name="co-airplane-mode" /></span>
          Bookings</a
        >
      </li>
      <li class="w-full py-2">
        <a class="px-6 text-xl">
          <span class="pr-1"><v-icon scale="2" name="co-paw" /></span>
          Pet</a
        >
      </li>
      <li class="w-full py-2">
        <a class="px-6 text-xl">
          <span class="pr-1"><v-icon scale="2" name="co-settings" /></span>
          Settings</a
        >
      </li>
    </ul>
    <div class="self-end p-4 w-96">
      <p class="p-4 px-6">
        Price includes taxes and may change depending on availability. Any
        additional fees can be reviewed before payment. The total price will be
        finalized once the purchase is complete.
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
