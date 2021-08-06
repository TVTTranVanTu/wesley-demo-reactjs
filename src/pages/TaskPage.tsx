import React, { useState } from 'react';
import TaskList from '../components/task/TaskList';
import { Task } from '../types';

const initialTasks: Array<Task> = [
  {
    id: 1,
    name: 'Lifecycle and Props State',
    status: true,
  },
  {
    id: 2,
    name: 'HandleEvent Key Mouse Form submit',
    status: true,
  },
  {
    id: 3,
    name: 'Conditonal Rendering',
    status: true,
  },
  {
    id: 4,
    name: 'Lifting State Up',
    status: true,
  },
  {
    id: 5,
    name: 'React-Hooks',
    status: true,
  },
];

const TaskPage: React.FC = () => {
  const [isDisplay, setIsDisplay] = useState<boolean>(false);
  const [isEditForm, setIsEditForm] = useState<boolean>(false);
  const [taskEdit, setTaskEdit] = useState(null);
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <div className="task">
      <div className="container">
        <div className="text-center">
          <h1>Workflow Management</h1>
          <hr />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
