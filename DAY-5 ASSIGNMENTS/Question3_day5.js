// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response => response.json())
// .then(data => console.log(data))


async function todo(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')

    const data = await response.json();
    
    count = 0;
    data.forEach((completed_todo) => {
        if(completed_todo.completed === true){
            // console.log(count+1,completed_todo);
            console.log(count+1,".",JSON.stringify(completed_todo))
            count++;
        }
    })
    console.log(`Total number of completed todos is : ${count}`);
}

todo();