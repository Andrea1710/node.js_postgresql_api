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
  const project = await Project.findOne({
    where: {
      id: id
    }
  });
  res.json(project);
};
