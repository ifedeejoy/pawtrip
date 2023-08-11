<template>
  <div class="py-4 border-b border-gray-300 navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a href="/">Search</a></li>
          <li><a href="/">Discover</a></li>
          <li><a href="/">Bookings</a></li>
          <li><a href="/">Pet</a></li>
          <li><a href="/">Settings</a></li>
          <!-- <li>
            <a>Parent</a>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li> -->
        </ul>
      </div>
      <a href="/" class="text-lg normal-case btn btn-ghost">
        <img :src="logoSrc" class="h-16 py-2" alt="Pawtrip Logo" />
      </a>
    </div>
    <div class="hidden navbar-end lg:flex">
      <ul class="px-1 menu menu-horizontal">
        <li tabindex="0">
          <details>
            <summary class="text-lg font-extrabold">＄</summary>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li tabindex="0">
          <details>
            <summary class="text-lg">Eng</summary>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li tabindex="0">
          <details>
            <summary class="text-lg">John Doe</summary>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import Logo from "../../assets/pawtrip.png";
const logoSrc = Logo;
</script>

<style scoped></style>
