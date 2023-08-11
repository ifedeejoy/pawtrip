<template>
  <Nav />
  <div class="flex flex-col h-screen max-w-full md:flex-row">
    <SideBar />
    <div class="flex flex-col w-full md:w-9/12">
      <!-- Main Content -->
      <div class="flex flex-col py-10 p-7">
        <!-- filter & title -->
        <div class="flex flex-col">
          <h1 class="text-2xl text-blue-900">
            Upload required documents for pet travel to
            {{ countryDetails.name }} ({{ countryDetails.code }})
          </h1>
          <div class="text-sm breadcrumbs">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a>Countries</a></li>
              <li>
                <a :href="'/requirements/' + countryId">{{
                  countryDetails.name
                }}</a>
              </li>
              <li>Documents</li>
            </ul>
          </div>
          <div class="flex flex-col justify-center mt-12">
            <div v-for="(zone, idx) in dropzones" :key="idx">
              <div class="flex items-center justify-center w-full my-6">
                <h1 class="w-1/4 mr-8 text-xl font-bold text-blue-950">
                  {{ zone.title }}
                </h1>
                <div class="w-3/4">
                  <Dropzone
                    @file-uploaded="handleFileUpload"
                    @file-canceled="handleFileCancel"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="flex self-end justify-end">
            <button @click="submitFiles" class="mx-4 btn btn-info">
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios"; // If you're using axios, ensure it's imported
import store from "../store";
import Nav from "../components/layout/Nav.vue";
import Dropzone from "../components/ui/Dropzone.vue";
import SideBar from "../components/layout/SideBar.vue";
import { CoAirplaneMode } from "oh-vue-icons/icons";

const route = useRoute();
const router = useRouter();
const dropzones = ref([
  { title: "USDA Health Certificate" },
  { title: "Rabies Vaccination" },
  { title: "Titre Test Results" },
]);
const files = ref([]); // Array to store uploaded files
const countryId = ref(route.params.country); // Get the country ID from the route
const countryDetails = ref({}); // Store country details

onMounted(async () => {
  fetchCountryRequirements(countryId.value);
});

const fetchCountryRequirements = async (id) => {
  try {
    const response = await axios.get(
      `https://pawtrip-service.onrender.com/requirements/${id}`
    );
    countryDetails.value = response.data.countryCode;
  } catch (error) {
    console.error("Failed to fetch requirements:", error);
  }
};

const handleFileUpload = ({ file, index }) => {
  files.value[index] = file;
};

const handleFileCancel = () => {
  // Handle file cancellation if needed
};

const submitFiles = async () => {
  console.log("====================================");
  console.log(files.value);
  console.log("====================================");
  router.push("/confirmation/" + countryId.value);

  //   for (let file of files.value) {
  //     if (file) {
  //       // Assuming you have a function to handle Cloudinary upload called `uploadToCloudinary`
  //       //   await uploadToCloudinary(file);
  //       console.log("====================================");
  //       console.log(file);
  //       console.log("====================================");
  //     } else {
  //       console.log("====================================");
  //       console.log("nothing happen");
  //       console.log("====================================");
  //     }
  //   }
};

const uploadToCloudinary = async (file) => {
  // Use Cloudinary SDK or API to upload the file.
};
</script>

<style scoped></style>
