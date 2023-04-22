import { useContext, useState } from 'react'
import { ContainerTask } from './styles';
import { FiTrash, FiCheckSquare } from 'react-icons/fi';
import { Store } from '../../Store';

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/';
  };

  function handleCreateNewTask() {
    if (!newTaskTitle) return;

    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false
    }

    setTasks((oldState: any) => [...oldState, newTask]);
    setNewTaskTitle('');
    
  }

  function handleToggleTaskCompletion(id: number) {
    const newTasks = tasks.map((task: { id: number; isComplete: boolean; title: string}) => task.id === id ? {
      ...task,
      isComplete: !task.isComplete
    } :task);

    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task: { id: number; }) => task.id !== id);

    setTasks(filteredTasks)
  }

  const taskCount = tasks.length

  const taskDoneCount = tasks.filter(task => task.isComplete === true).length

  return (
    <ContainerTask>
      <section className="task-list container">
        <header>
          <div className='user-info'>
            <h1>
              Olá <strong>{userInfo?.name}</strong> 
            </h1>
            <br />
            <button onClick={signoutHandler}>Sair</button>
          </div>
          <h2>Minhas tasks</h2>

          <div className="input-group">
            <input 
              type="text" 
              placeholder='Adicione uma task'
              onChange={(e) => setNewTaskTitle(e.target.value)}
              value={newTaskTitle}
            />
            <button type="submit" data-testid="add-task-button" onClick={handleCreateNewTask}>
              <FiCheckSquare size={16} color="#fff"/>
            </button>
          </div>
        </header>

        <div className="tasksInfo">
          <div className="createdTasksCount">
            <p>Tarefas criadas</p>
            <span>{taskCount}</span>
          </div>
          <div className="doneTasksCount}">
            <p>Concluídas</p>
            <span>{taskCount !== 0 ? `${taskDoneCount} de ${taskCount}` : 0}</span>
          </div>
        </div>

        <main>
          <ul>
            {tasks.map(task => (
              <li key={task.id}>
                <div className={task.isComplete ? 'completed' : ''} data-testid="task" >
                  <label className="checkbox-container">
                    <input 
                      type="checkbox"
                      readOnly
                      checked={task.isComplete}
                      onClick={() => handleToggleTaskCompletion(task.id)}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <p>{task.title}</p>
                </div>

                <button type="button" data-testid="remove-task-button" onClick={() => handleRemoveTask(task.id)}>
                  <FiTrash size={16}/>
                </button>
              </li>
            ))}
            
          </ul>
        </main>
      </section>
    </ContainerTask>
  )
}