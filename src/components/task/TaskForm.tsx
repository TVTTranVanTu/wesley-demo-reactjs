import React, { useState } from 'react';

const TaskForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [status, setStatus] = useState<boolean>(false);
  return (
    <div className="panel panel-warning">
      <div className="panel-heading">
        <h3 className="panel-title">
          Add new task
          <span className="fa fa-times-circle text-right"></span>
        </h3>
      </div>
      <div className="panel-body">
        <form>
          <div className="form-group">
            <label>Name :</label>
            <input
              type="text"
              name="name"
              value={name}
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <label>Status :</label>
          <br />
          <div className="text-center">
            <button type="submit" className="btn btn-warning">
              Add
            </button>
            &nbsp;
          </div>
        </form>
      </div>
    </div>
  );
};
export default TaskForm;
