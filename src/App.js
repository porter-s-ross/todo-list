import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react'
import Task from './components/Task';

function App() {

  const [tasks, setTasks] = useState([
    {name: "make todolist",
    completed: true}
  ]);

  const [form, setForm] = useState({
    name: "",
    completed: false
  });

  const onChangeHandler = (event) => {
    const updatedForm = {name: event.target.value, completed: false}
    setForm(updatedForm)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newState = [...tasks, form];
    setTasks(newState);

    setForm({
      name: "",
      completed: false
    });
  }

  const onDeleteHandler = (task) => {
    console.log(task)
    const copyState = [...tasks];
    copyState.splice(task, 1);
    setTasks(copyState);
  }

  const onChecked = (i) => {
    console.log("hello", i);
    const newState = [...tasks]

    newState[i].completed = !newState[i].completed
    setTasks(newState)


    // !checked ? 
    // setChecked = true
    // : setChecked = false;
    // setTasks.checked(event.target.checked)
  }

  return (
    <div className="App container mx-auto">
      <h1 className='todolistHeader'>To Do List</h1>

      <form onSubmit={onSubmitHandler}>
        <div class="input-group w-100 mx-auto mb-5">
          <input onChange={onChangeHandler} value={form.name} type="text" className="form-control w-50 mx-auto"/>
            <div class="input-group-append">
              <input type="submit" className='btn btn-success' value="Add"/>
            </div>
        </div>
      </form>


      <div className="p-25">
        {
          tasks.map((task, i) => {
            return <Task task={task} onDelete={()=>{onDeleteHandler(i)}} onCheck={() => {onChecked(i)}}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
