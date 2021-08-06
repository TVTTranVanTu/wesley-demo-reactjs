import React from 'react';
import { Task } from '../../types';
import TaskItem from './TaskItem';

interface IListTask {
  tasks: Task[];
}

const TaskList: React.FC<IListTask> = ({ tasks }: IListTask) => {
  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th className="text-center">STT</th>
          <th className="text-center">Name</th>
          <th className="text-center">Status</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <TaskItem key={task.id} index={index} task={task} />
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
