<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { logged } from "../../src/store";
import { useRouter } from "vue-router";

const form = ref(null);

const router = useRouter();

const name = ref("");
const password = ref("");
const showError = ref(false);

const closeError = () => {
  showError.value = false;
};

const submitForm = (event) => {
  if (form.value.checkValidity()) {
    event.preventDefault();

    const requestBody = {
      name: name.value,
      password: password.value,
    };

    axios
      .post("http://localhost:8000/login", requestBody)
      .then((res) => {
        localStorage.setItem("accessToken", res.data.accessToken);
        logged.value = true;
        router.push("/dashboard");
      })
      .catch((err) => {
        name.value = "";
        password.value = "";
        showError.value = true;
        form.value.classList.remove("was-validated");
        console.log(err);
      });
  } else {
    event.preventDefault();
    form.value.classList.add("was-validated");
  }
};

onMounted(() => {
  if (localStorage.getItem("accessToken")) {
    logged.value = true;
    router.push("/dashboard");
  }
});
</script>

<template>
  <div class="d-flex flex-column align-items-center my-5">
    <h2 class="fw-bold my-3">Faça o login</h2>
    <form
      class="d-flex flex-column gap-3 needs-validation"
      ref="form"
      novalidate
      @submit="submitForm"
    >
      <label for="name" class="form-label"
        >Nome:
        <input
          type="text"
          id="name"
          class="form-control"
          v-model="name"
          required
        />
        <div class="invalid-feedback">Digite um nome válido</div>
      </label>
      <label for="password" class="form-label"
        >Senha:
        <input
          type="text"
          id="password"
          class="form-control"
          required
          v-model="password"
        />
        <div class="invalid-feedback">Digite uma senha válida</div>
      </label>
      <input type="submit" value="Entrar" class="btn btn-primary my-3" />
    </form>
  </div>
  <div
    v-if="showError"
    class="d-flex flex-row gap-2 border border-danger rounded p-3"
  >
    <div class="text-danger fw-bold">
      Usuário não encontrado. Tente novamente.
    </div>
    <button
      type="button"
      class="btn-close"
      aria-label="Close"
      @click="closeError"
    ></button>
  </div>
</template>
