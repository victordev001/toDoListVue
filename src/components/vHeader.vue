<template>
    <div class="w-full h-30 flex flex-col gap-4 justify-between items-center">
        <h1 class="text-4xl">Tarefas</h1>
        <div class="flex flex-row bg-gray-100 w-full h-20 items-center justify-center gap-4">
            <input v-model="novaTarefa" class="rounded w-1/6 max-lg:w-1/2 h-8 ring-1 ring-gray-400 outline-none focus:bg-white bg-gray-100 text-center" placeholder="Adicione uma tarefa" type="text" name="" id="">
            <button @click="adicionarNovaTarefa(novaTarefa)" class="bg-blue-400 text-white rounded h-8 px-2 py-1 hover:bg-blue-500 duration-300 cursor-pointer">Adicionar</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTarefasStore } from '../store/tarefas';

const tarefasStore = useTarefasStore();

const novaTarefa = ref('');
function adicionarNovaTarefa(tarefa){
    if (novaTarefa.value === ""){
        return
    } 
    tarefasStore.adicionarTarefa({id: Date.now(), tarefa, editando:false, excluir: false, concluido: false})
    novaTarefa.value = ''
}
</script>