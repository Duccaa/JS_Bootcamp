import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {v1 as uuidv1} from 'uuid';

const Task = ({ task, deleteTask, done}) => {

  // const deleteTask = (id) => {
  //   let index = todos.findIndex(el => el.id == id)
  //   let temp = [...todos]
  //   temp.splice(index, 1)
  //   setTodos(temp)
  // }

  // const done = (id) => {
  //   let index = todos.findIndex(el => el.id == id)
  //   let temp = [...todos]
  //   temp[index].done = !temp[index].done
  //   setTodos(temp)
  // }

  return (
    <div>
    <h3>Task</h3>
    <p style={{textDecoration: task.done ? 'line-through' : 'none'}}
    onClick={() => done(task.id)}>{task.task}</p>
    <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  )
}

// const Todo = ({todo}) => {
//   return (
//     <p>{todo.task} | {todo.done + ''}</p>
//   )
// }

const App = () => {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  // temp = todos
  // const list = () => {
  // let temp = [...todos] 
  // setTodos(temp)
  // return temp
  // }

  // function addTask(task){
  //   let temp = [...todos] 
  //   temp.push(
  //     {
  //       id: uuidv1,
  //       task: task,
  //       done: false
  //     }
  //   )
  //   setTodos(temp)
  // }

   const deleteTask = (id) => {
    let temp = [...todos]
    temp.splice(temp.findIndex(task => task.id === id), 1)
    setTodos(temp)
  }

  const done = (id) => {
    let temp = [...todos]
    temp.map(task => task.id === id ? task.done = !task.done : task.done)
    setTodos(temp)
  }

  return (
    <>
      <h1>ToDo lista</h1>
      <input 
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button 
        onClick={() => {
          setTodos([...todos,{id: uuidv1(), task: text, done: false}])
          console.log(todos)
          // list().push({id: uuidv1(), task: text, done: false}) 
          setText('')
        }}
      >Dodaj</button>
      {/* {todos.map(task => <Task key={task.id} task={task.task} done={task.done + ''} id={task.id} deleteTask={deleteTask}/>)} */}
      {todos.map(task => <Task key={task.id} task={task} deleteTask={deleteTask} done={done}/>)}
      {/* prosledim todos={todos} setTodos={setTodos}*/}
      {/* {lista.map(el => <Todo key={el.id} todo={el} />)} */}
    </>
  )
}

// const lista = [
//   {
//     id: uuidv1(),
//     task: 'Уради нешто',
//     done: true
// },
// {
//     id: uuidv1(),
//     task: 'Уради нешто drugo',
//     done: false
// },
// {
//     id: uuidv1(),
//     task: 'Уради нешто треће',
//     done: true
// }
// ]

ReactDOM.render(
  <React.StrictMode>
  <App />
</React.StrictMode>,
document.getElementById('root')
);

