<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const filterName = ref("");
const filterStatus = ref("todos");

const filteredItems = computed(() => {
  let filtered = props.items;

  if (filterName.value !== "") {
    filtered = filtered.filter((item) =>
      item.name.toLowerCase().includes(filterName.value.toLowerCase())
    );
  }

  if (filterStatus.value !== "todos") {
    filtered = filtered.filter(
      (item) => item.statusService === filterStatus.value
    );
  }

  return filtered;
});
</script>

<template>
  <div class="container-fluid">
    <div
      class="d-flex flex-column align-items-center justify-content-center border rounded mb-4 mx-auto p-3 shadow"
      style="max-width: 500px"
    >
      <h3 class="fw-bold">Filtrar dados</h3>

      <div class="row text-center fw-bold">
        <label class="col">
          Por nome

          <input
            type="text"
            v-model="filterName"
            placeholder="Digite um nome"
            class="form-control mx-auto"
            style="width: 200px"
          />
        </label>

        <label class="col">
          Por status
          <select
            v-model="filterStatus"
            class="form-select mx-auto"
            style="width: 200px"
          >
            <option value="todos">Todos</option>
            <option value="Concluded">Concluído</option>
            <option value="in progress">Em progresso</option>
          </select>
        </label>
      </div>
    </div>

    <div class="table-responsive-md mx-3">
      <table
        class="table table-light table-striped table-hover table-sm align-middle text-center"
      >
        <thead class="align-middle">
          <tr>
            <th scope="col">Ordem de Serviço</th>
            <th scope="col">Nome</th>
            <th scope="col">Matrícula</th>
            <th scope="col">Serviço</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr v-for="(item, index) in filteredItems" :key="index">
            <td class="fw-bold">{{ item.ordemServiceNumber }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.registration }}</td>
            <td>{{ item.service }}</td>
            <td
              :class="
                item.statusService === 'Concluded'
                  ? 'text-primary'
                  : 'text-danger'
              "
            >
              {{ item.statusService }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
