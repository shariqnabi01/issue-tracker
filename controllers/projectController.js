const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createProject = async (req, res) => {
  const userId = req.user.id;
  const { name } = req.body;

  try {
    const project = await prisma.project.create({
      data: {
        name,
        ownerId: userId,
      },
    });
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create project' });
  }
};

exports.getProjects = async (req, res) => {
  const projects = await prisma.project.findMany({
    where: { ownerId: req.user.id },
    include: { issues: true },
  });
  res.json(projects);
};

exports.updateProject = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updated = await prisma.project.update({
      where: { id: Number(id) },
      data: { name },
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Update failed' });
  }
};

exports.deleteProject = async (req, res) => {
  const { id } = req.params;
  await prisma.project.delete({ where: { id: Number(id) } });
  res.json({ message: 'Project deleted' });
};
