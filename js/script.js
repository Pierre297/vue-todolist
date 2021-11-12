//creare un toDo list
// stampare il listato dei task iniziali
// far si che ogni task abbia la possibilità di essere cancellato
// avere la possibilità di aggiungere nuove task

var app = new Vue (
    {
        el: '#myapp',
        data: {
            newTask: "",
            tasks: [
                { text: 'Fare il bucato', done: false },
                { text: 'andara a fare la spesa', done: false },
                { text: "andare a correre", done: false },
                { text: "fare l'esercitazione del pomeriggio", done: false },
                { text: 'Fare le pulizie', done: false },
                { text: 'Preparare la cena', done: false }
                ]
        },
        methods: {
            removeItem(index){
                this.tasks.splice(index,1);
            },
            addTask(){
                this.tasks.push(this.newTask);
                this.newTask = "";
            },
            itemDone(index){
                if(this.tasks[index].done == true){
                    this.tasks[index].done == false;
                    console.log("false");
                }else{
                    this.tasks[index].done == true;
                    console.log("true");


                }
            }
        }
    }
);