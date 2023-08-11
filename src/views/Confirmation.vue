<template>
  <Nav />
  <div class="flex flex-col max-w-full min-h-screen md:flex-row">
    <SideBar />
    <div class="flex flex-col w-full md:w-9/12">
      <!-- Main Content -->
      <div
        class="flex flex-col items-center justify-center h-screen bg-gray-100 upload-confirmation"
      >
        <div class="p-8 bg-white rounded-lg shadow-xl">
          <div class="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-16 h-16 mx-auto text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h1 class="mb-2 text-2xl font-bold text-center">
            Pet Travel Documents to {{ countryDetails.name }} Uploaded
            Successfully!
          </h1>
          <p class="text-center">
            Your document has been successfully uploaded and is now being
            processed.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios"; // If you're using axios, ensure it's imported
import store from "../store";
import Nav from "../components/layout/Nav.vue";
import Dropzone from "../components/ui/Dropzone.vue";
import SideBar from "../components/layout/SideBar.vue";
import { CoAirplaneMode } from "oh-vue-icons/icons";

const route = useRoute();
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
      `http://localhost:3000/requirements/${id}`
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
