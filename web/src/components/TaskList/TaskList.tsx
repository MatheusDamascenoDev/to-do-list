import { useContext, useEffect, useState } from 'react'
import { ContainerTask } from './styles';
import { FiTrash, FiCheckSquare } from 'react-icons/fi';
import { Store } from '../../Store';
import  Axios  from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

interface Task {
  _id: string;
  title: string;
  isComplete: boolean;
}

interface StateProps {
  state: any,
  dispatch: any
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTask, setNewTask] = useState([]);
  const [deleteTask, setDeleteTask] = useState('');

  const { state, dispatch: ctxDispatch } = useContext<StateProps>(Store);
  const { userInfo } = state;

  const params = useParams();
  const { id: userId } = params;
  

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    window.location.href = '/';
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await Axios.get(`/users/${userId}`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        setTasks(data.tasks)
      } catch (error: any) {
        console.log(error.response.data)
        toast.error((error.response.data));
      }
    };
    fetchData()
  }, [userInfo, userId, newTask, deleteTask]);

  const handleCreateNewTask = async (e: any ) => {
    e.preventDefault();
    try {
      const task = {
        title: newTaskTitle,
        isComplete: false,
      }
      const { data } = await Axios.post(`/users/${userId}/newtask`, task,
      {
        headers: { 
          Authorization: `Bearer ${userInfo.token}`,
        },
      },
      );
      setNewTask(data)
      setNewTaskTitle('');
    } catch (error: any) {
      console.log(error.response.data)
      toast.error((error.response.data));
    }
  }

  const handleToggleTaskCompletion = async (taskId: string) => {
    const toogleTask = tasks.map(task => task._id === taskId ? {
      ...task,
      isComplete: !task.isComplete,
      _id: taskId
    }: task)
    const {data} = await Axios.put(`/users/${userId}/newtask/${taskId}`, toogleTask, {
      headers: { 
        Authorization: `Bearer ${userInfo.token}`,
      }
    });
    setNewTask(data)
    setTasks(toogleTask)
  };

  async function handleRemoveTask(taskId: string) {
    try {
      const {data} = await Axios.delete(`/users/${userId}/newtask/${taskId}`, {
        headers: { Authorization: `Bearer ${userInfo.token}` }
      });
      setDeleteTask(data)
    } catch (error: any) {
      console.log(error.response.data)
      toast.error((error.response.data));
    }
  };

  const taskCount = tasks.length
  const taskDoneCount = Object.values(tasks).filter(task => task.isComplete === true).length

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
            {taskCount === 0 

            ? <li>
                  <p>
                    Você ainda não tem tarefas cadastradas
                    <br />
                    <span>Crie tarefas e organize seus itens a fazer</span>
                  </p>
              </li> 
            
            : Object.values(tasks).map(task => (
                <li key={task._id}>
                  <div className={task.isComplete ? 'completed' : ''} data-testid="task" >
                    <label className="checkbox-container">
                      <input 
                        type="checkbox"
                        readOnly
                        checked={task.isComplete}
                        onClick={() => handleToggleTaskCompletion(task._id)}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <p>{task.title}</p>
                  </div>

                  <button type="button" data-testid="remove-task-button" onClick={() => handleRemoveTask(task._id)}>
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