import Project from "../models/project";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json({ data: projects });
  } catch (err) {
    console.log(err);
  }
};

export const createProject = async (req, res) => {
  const { name, priority, description, deliverydate } = req.body;
  try {
    const newProject = await Project.create(
      {
        name,
        priority,
        description,
        deliverydate
      },
      {
        fields: ["name", "priority", "description", "deliverydate"]
      }
    );
    if (newProject) {
      return res.json({
        message: "Project created successfully",
        data: newProject
      });
    }
  } catch (err) {
    res.status(500).json({ message: "Something went wrong..", data: {} });
  }
};

export const getOneProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findOne({
      where: {
        id: id
      }
    });
    res.json(project);
  } catch (err) {
    console.log(err);
  }
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteRowCount = await Project.destroy({
      where: {
        id: id
      }
    });
    res.json({
      message: "Project deleted successfully",
      count: deleteRowCount
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, priority, description, deliverydate } = req.body;

  try {
    const projects = await Project.findAll({
      attributes: ["id", "name", "priority", "description", "deliverydate"],
      where: {
        id: id
      }
    });

    if (projects.length > 0) {
      projects.map(async project => {
        await project.update({
          name,
          priority,
          description,
          deliverydate
        });
      });
    }
    return res.json({
      message: "Project updated successfully",
      data: projects
    });
  } catch (err) {
    console.log(err);
  }
};
