import { defineStore } from "pinia";

export const useTarefasStore = defineStore('tarefas', {
    state:()=>({
        listaTarefas: [
            {id: 1, tarefa: "criar projeto com vue 3", editando: false, concluido: false}
        ]
    }),
    actions: {
    adicionarTarefa(tarefa){
        this.listaTarefas.push(tarefa)
    },
    removerTarefaStore(id){
       this.listaTarefas = this.listaTarefas.filter(t => t.id !== id)
    }    
    }
})