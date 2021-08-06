import React from 'react';
import { Link } from 'react-router-dom';
import { Task } from '../../types';

interface taskItem {
  task: Task;
  index: number;
}

const TaskItem: React.FC<taskItem> = ({ task, index }: taskItem) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <Link to={`/task/${task.name.replace(/ /g, '-')}`}>{task.name}</Link>
      </td>
      <td className="text-center">
        {task.status === true ? (
          <span className="label label-success">learned</span>
        ) : (
          <span className="label label-danger">studying</span>
        )}
      </td>
      <td className="text-center">
        <button type="button" className="btn btn-warning">
          <span className="fa fa-pencil"></span>Edit
        </button>
        &nbsp;
        <button type="button" className="btn btn-danger">
          <span className="fa fa-trash"></span>Remove
        </button>
      </td>
    </tr>
  );
};

export default TaskItem;
