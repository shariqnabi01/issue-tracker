const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create Issue
exports.createIssue = async (req, res) => {
  const { title, description, projectId, assigneeId } = req.body;

  // Validate foreign keys
  const project = await prisma.project.findUnique({ where: { id: Number(projectId) } });
  if (!project) return res.status(400).json({ error: 'Invalid projectId' });

  const assignee = await prisma.user.findUnique({ where: { id: Number(assigneeId) } });
  if (!assignee) return res.status(400).json({ error: 'Invalid assigneeId' });

  const issue = await prisma.issue.create({
    data: {
      title,
      description,
      projectId: Number(projectId),
      assigneeId: Number(assigneeId),
      creatorId: req.user.id,
    },
  });

  res.status(201).json(issue);
};

// Get Issues
exports.getIssues = async (req, res) => {
  const { projectId, assigneeId, status } = req.query;

  const issues = await prisma.issue.findMany({
    where: {
      ...(projectId && { projectId: Number(projectId) }),
      ...(assigneeId && { assigneeId: Number(assigneeId) }),
      ...(status && { status: status.toUpperCase() }), // ENUM should match
    },
  });

  res.json(issues);
};

// Update Issue
exports.updateIssue = async (req, res) => {
  const { id } = req.params;
  const { title, description, status, assigneeId } = req.body;

  // ✅ Check if issue exists before updating
  const existing = await prisma.issue.findUnique({ where: { id: Number(id) } });
  if (!existing) {
    return res.status(404).json({ message: "Issue not found" });
  }
  const data = {};
  if (title) data.title = title;
  if (description) data.description = description;
  if (status) data.status = status.toUpperCase(); // Prisma enum must match
  if (assigneeId) data.assigneeId = Number(assigneeId);

  const issue = await prisma.issue.update({
    where: { id: Number(id) },
    data,
  });

  res.json(issue);
};

// Delete Issue
exports.deleteIssue = async (req, res) => {
  const { id } = req.params;

  await prisma.issue.delete({ where: { id: Number(id) } });
  res.json({ message: 'Issue deleted' });
};
