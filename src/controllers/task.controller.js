import Task from "../models/task";

export const createTask = async (req, res) => {
  const { name, done, projectId } = req.body;
  try {
    const newTask = await Task.create(
      {
        name: name,
        done: done,
        projectId: projectId
      },
      {
        fields: ["name", "done", "projectId"]
      }
    );
    res.json({
      message: "New Task created"
    });
  } catch (err) {
    console.log(err);
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      attributes: ["id", "name", "done", "projectid"],
      order: [["id", "ASC"]]
    });
    res.json({
      tasks: tasks
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { name, done, projectId } = req.body;

  try {
    await Task.findOne({
      attributes: ["id", "name", "done", "projectId"],
      where: {
        id: id
      }
    });

    const updatedTask = Task.update(
      {
        name: name,
        done: done,
        projectId: projectId
      },
      {
        where: {
          id: id
        }
      }
    );
    res.json({
      message: "Task Updated",
      updatedTask
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    await Task.destroy({
      where: {
        id: id
      }
    });
    res.json({
      message: "Task Deleted successfully"
    });
  } catch (err) {
    console.log(err);
  }
};

export const getOneTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findOne({
      where: {
        id: id
      }
    });
    res.json(task);
  } catch (err) {
    console.log(err);
  }
};

export const getTaskByProject = async (req, res) => {
  const { id } = req.params;
  try {
    const tasks = await Task.findAll({
      attributes: ["id", "name", "done", "projectid"],
      where: {
        id: id
      }
    });
    res.json(tasks);
  } catch (err) {
    console.log(err);
  }
};
