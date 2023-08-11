<template>
  <Nav />
  <div class="flex flex-col h-screen max-w-full md:flex-row">
    <side-bar />
    <div class="flex flex-col w-9/12">
      <!-- Main Content -->
      <div class="flex flex-col py-10 p-7">
        <!-- filter & title -->
        <div class="flex items-center justify-between">
          <h1 class="text-2xl text-blue-900">Discover Destinations</h1>
          <div class="flex justify-around">
            <!-- ... (filters unchanged) ... -->
          </div>
        </div>
        <!-- cards -->
        <div class="grid grid-cols-1 gap-4 my-10 md:grid-cols-3">
          <card
            v-for="country in countries"
            :key="country.code"
            :image="country.flag_image_url"
            :alt="'Country flag for ' + country.name"
            :title="country.name"
            :badge="country.code"
            :link="'/requirements/' + country._id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Nav from "../components/layout/Nav.vue";
import Card from "../components/ui/Card.vue";
import SideBar from "../components/layout/SideBar.vue";

const countries = ref([]);

const fetchCountries = async () => {
  try {
    const response = await axios.get("http://localhost:3000/countries");
    countries.value = response.data;
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
};

onMounted(fetchCountries);
</script>

<style scoped></style>
