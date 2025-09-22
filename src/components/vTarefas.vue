<script setup>
import { useTarefasStore } from '../store/tarefas';
const tarefasStore = useTarefasStore();
function excluirTarefa(id){
    tarefasStore.removerTarefaStore(id)
}
</script>



<template>
    <div class="bg-gray-200 w-full h-full p-4">
        <ul class="w-full gap-4 h-full bg-gray-200 rounded flex flex-col items-center p-3">
            <li class="w-1/3 cursor-pointer bg-gray-50 ring-1 gap-1 ring-gray-300 flex justify-between rounded py-2 px-4 items-center text-gray-800 max-xl:w-full"  v-for="t in tarefasStore.listaTarefas" :key="t.id">
                <p @click="t.concluido = !t.concluido"  v-if="t.editando === false" :class="['p-1 bg-gray-100 w-full rounded max-lg:w-1/2',{ 'line-through': t.concluido }]" >{{ t.tarefa }}</p>
                <input v-else class="p-1 bg-gray-300 w-full rounded max-lg:w-1/4" type="text" name="" id="" v-model="t.tarefa">          
                <div class="flex justify-evenly w-1/3 gap-1 max-lg:w-1/2">
                    <button @click="excluirTarefa(t.id)" class="bg-red-400 text-white rounded px-2 py-1 cursor-pointer hover:bg-red-500 duration-300 w-1/2">excluir</button>
                    <button v-if="t.editando === false" @click="t.editando = true" class="bg-yellow-400 text-white rounded w-1/2 px-2 py-1 cursor-pointer hover:bg-yellow-500 duration-300">editar</button>
                    <button @click="t.tarefa.trim() ? t.editando = false : excluirTarefa(t.id)" v-else class="bg-green-400 text-white rounded px-2 py-1 cursor-pointer hover:bg-green-500 duration-300 w-1/2">salvar</button>
                </div>
            </li>
        </ul>
    </div>
</template>