import { FC, useState, ChangeEvent, FormEvent } from 'react';

interface Task {
    id: number;
    description: string;
}

const Todo: FC = () => {
    const [taskInput, setTaskInput] = useState<string>('');
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskId, setTaskId] = useState<number>(1);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskInput(e.target.value);
    };

    const addTask = (e: FormEvent) => {
        e.preventDefault();
        if (taskInput.trim() !== '') {
            setTasks([...tasks, { id: taskId, description: taskInput }]);
            setTaskId(taskId + 1);
            setTaskInput('');
        }
    };

    return (
        <div>
            <form onSubmit={addTask}>
                <input
                    placeholder='Add a task'
                    value={taskInput}
                    onChange={handleInputChange}
                />
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <input type='checkbox'></input>
                        {task.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
