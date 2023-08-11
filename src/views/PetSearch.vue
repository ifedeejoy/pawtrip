<template>
  <Nav />
  <div class="flex flex-col h-screen max-w-full md:flex-row">
    <side-bar />
    <div class="flex flex-col w-9/12">
      <!-- Main Content -->
      <div class="flex flex-col py-10 p-7">
        <!-- filter & title -->
        <div class="flex flex-col">
          <h1 class="text-2xl text-blue-900">Pet Details</h1>
          <div class="mt-12">
            <!-- notification banner -->
            <div
              class="bg-purple-200 border border-purple-500 alert alert-info"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="w-6 h-6 shrink-0 stroke-purple-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span
                >Please verify your
                <span class="underline">pet measurement</span> information and
                country import requirements.</span
              >
            </div>
            <!-- country requirements -->
            <div class="mt-6">
              <h1 class="text-xl text-blue-900">
                {{ countryDetails.name }} Country Requirements
              </h1>
              <p class="my-3 leading-relax">
                To ensure safe travels with your pets to
                {{ countryDetails.name }}, please ensure your pet has the
                required vaccinations and you understand the rules and
                regulations for entering the country with your pet. Our canine
                concierge will provide further step-by-step guidance when you
                book your travels.
              </p>

              <ul class="my-6">
                <li
                  v-for="requirement in processedRequirements"
                  :key="requirement.text"
                  class="my-3"
                >
                  <a class="flex">
                    <svg
                      v-if="requirement.isMet"
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 mr-4 stroke-purple-500 fill-purple-100 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <svg
                      v-else
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 mr-4 stroke-1 stroke-red-400 fill-red-100 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    {{ requirement.text }}
                  </a>
                </li>
                <li v-if="!speciesData && !Object.keys(speciesData).length">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 mr-4 stroke-1 stroke-red-400 fill-red-100 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li v-else-if="speciesData && Object.keys(speciesData).length">
                  <a class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 mr-4 stroke-purple-500 fill-purple-100 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    {{ capitalizeFirstLetter(selectedSpecies) }} specific
                    requirements:
                    <ul v-if="speciesData.vaccinations">
                      <li
                        v-for="(vaccination, index) in speciesData.value
                          .speciesData.vaccinations"
                        :key="index"
                      >
                        {{ vaccination }}
                      </li>
                    </ul>
                  </a>
                </li>
              </ul>
            </div>
            <!-- search filter -->
            <div class="flex flex-col w-full">
              <div class="w-full p-2 px-4 rounded-lg shadow">
                <div class="divider"></div>
                <h1 class="text-lg font-bold">Pet Search</h1>
                <div class="flex mt-8 mb-4">
                  <input
                    type="text"
                    placeholder="Pet Name"
                    class="w-full max-w-xs m-2 input input-bordered"
                  />
                  <select
                    class="w-full max-w-[10rem] select select-bordered m-2"
                    id="speciesSelect"
                    v-model="selectedSpecies"
                    @change="fetchSpeciesRequirements"
                  >
                    <option disabled selected>Species</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                  </select>
                  <select
                    class="w-full max-w-[10rem] select select-bordered m-2"
                  >
                    <option disabled selected>Breed</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                  <select
                    class="w-full max-w-[10rem] select select-bordered m-2"
                  >
                    <option disabled selected>Gender</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                  <select
                    class="w-full max-w-[10rem] select select-bordered m-2"
                  >
                    <option disabled selected>Age</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                </div>
                <div class="flex items-center">
                  <div class="w-full max-w-[10rem] form-control m-2">
                    <input
                      type="text"
                      placeholder="Type here"
                      class="w-full max-w-[10rem] input input-bordered"
                    />
                    <span class="text-base text-center">Length</span>
                  </div>
                  <div class="w-full max-w-[10rem] form-control m-2">
                    <input
                      type="text"
                      placeholder="Type here"
                      class="w-full max-w-[10rem] input input-bordered"
                    />
                    <span class="text-base text-center">Width</span>
                  </div>
                  <div class="w-full max-w-[10rem] form-control m-2">
                    <input
                      type="text"
                      placeholder="Type here"
                      class="w-full max-w-[10rem] input input-bordered"
                    />
                    <span class="text-base text-center">Height</span>
                  </div>
                  <div class="w-full max-w-[10rem] form-control m-2">
                    <input
                      type="text"
                      placeholder="Type here"
                      class="w-full max-w-[10rem] input input-bordered"
                    />
                    <span class="text-base text-center">Weight</span>
                  </div>
                  <div class="form-control">
                    <label class="cursor-pointer label">
                      <input
                        type="checkbox"
                        checked="checked"
                        class="checkbox"
                      />
                      <span class="ml-2 text-sm label-text"
                        >Service animal</span
                      >
                    </label>
                  </div>
                  <div class="form-control">
                    <label class="cursor-pointer label">
                      <input
                        type="checkbox"
                        checked="checked"
                        class="checkbox"
                      />
                      <span class="ml-2 text-sm label-text"
                        >Emotional support animal</span
                      >
                    </label>
                  </div>
                </div>
                <!-- consent -->
                <div class="my-3 form-control">
                  <label class="cursor-pointer label justify-normal">
                    <input
                      type="checkbox"
                      checked="checked"
                      class="checkbox checkbox-error"
                    />
                    <span class="ml-6 label-text"
                      >I confirm that I agree with airline name's pet policy
                      terms and conditions for traveling with my pet.</span
                    >
                  </label>
                </div>
              </div>
              <!-- submit -->
              <a href="/upload">
                <button
                  class="w-full my-4 text-white bg-red-700 btn btn-xs sm:btn-sm md:btn-md"
                >
                  Continue to Passengers
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Nav from "../components/layout/Nav.vue";
import Card from "../components/ui/Card.vue";
import Dropzone from "../components/ui/Dropzone.vue";
import SideBar from "../components/layout/SideBar.vue";
import { CoAirplaneMode } from "oh-vue-icons/icons";
import axios from "axios";

const route = useRoute();
const countryId = ref(route.params.country); // Get the country ID from the route
const countryDetails = ref({}); // Store country details
const requirements = ref([]); // Store requirements
const selectedSpecies = ref(null);
const speciesRequirements = ref({});
const selectedBreed = ref(null);
const speciesData = ref({});

onMounted(async () => {
  fetchCountryRequirements(countryId.value);
});

const fetchCountryRequirements = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/requirements/${id}`
    );
    countryDetails.value = response.data.countryCode;
    requirements.value = response.data;
  } catch (error) {
    console.error("Failed to fetch requirements:", error);
  }
};

const fetchSpeciesRequirements = async () => {
  try {
    const country = countryId.value;
    const species = selectedSpecies.value;
    const breed = selectedBreed.value;
    const response = await axios.get(
      `http://localhost:3000/requirement/${country}/${species}`
    );
    requirements.value = response.data;
    speciesData.value = response.data;

    console.log("====================================");
    console.log(speciesData.value.speciesData.vaccinations);
    console.log("====================================");
  } catch (error) {
    console.error("Failed to fetch species-specific requirements:", error);
  }
};

const processedRequirements = computed(() => {
  const requirementsList = [];

  Object.entries(requirements.value).forEach(([key, value]) => {
    if (
      key !== "_id" &&
      key !== "countryCode" &&
      key !== "species_requirements" &&
      key !== "__v"
    ) {
      if (typeof value === "boolean") {
        requirementsList.push({
          text: value
            ? `${capitalizeFirstLetter(key)} is required`
            : `${capitalizeFirstLetter(key)} is not required`,
          isMet: value,
        });
      } else if (typeof value === "string") {
        requirementsList.push({
          text: `${capitalizeFirstLetter(key)} Requirement: ${value}`,
          isMet: true,
        });
      }
    }
  });
  return requirementsList;
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
</script>

<style scoped></style>
