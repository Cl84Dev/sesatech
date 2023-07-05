<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Pagination from "../components/Pagination.vue";
import ServicesTable from "../components/ServicesTable.vue";

const router = useRouter();

const token = ref(null);
const data = ref([]);
const pagination = ref("");

const fetchData = (page) => {
  pagination.value = page;
  axios
    .get(`http://localhost:8000/dashboard/${page}`, {
      headers: {
        Authorization: "Bearer " + token.value,
      },
    })
    .then((res) => (data.value = res.data[`page${page}`]))
    .catch((err) => console.log(err));
};

const prevPage = () => {
  let page = Number(pagination.value);
  if (page !== 1) {
    page--;
    pagination.value = String(page);
    fetchData(pagination.value);
  }
};

const nextPage = () => {
  let page = Number(pagination.value);
  if (page !== 3) {
    page++;
    pagination.value = String(page);
    fetchData(pagination.value);
  }
};

onMounted(() => {
  if (!localStorage.getItem("accessToken")) {
    router.push("/login");
  }

  token.value = localStorage.getItem("accessToken");
  pagination.value = "1";

  fetchData(pagination.value);
});
</script>

<template>
  <h1 class="fw-bold my-3">Dashboard</h1>

  <Pagination
    :pagination="pagination"
    :fetchData="fetchData"
    :prevPage="prevPage"
    :nextPage="nextPage"
  />

  <ServicesTable :items="data" v-if="data" />

  <Pagination
    :pagination="pagination"
    :fetchData="fetchData"
    :prevPage="prevPage"
    :nextPage="nextPage"
  />
</template>
