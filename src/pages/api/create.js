import { prisma } from "../../utils/prismaClient";

async function MakeExperience(req, res) {
  const {
    name,
    company = "Ironhack",
    from = "Dec 20",
    to = "Jan 21",
    description,
  } = req.body;
  const data = await prisma.experience.create({
    data: {
      name,
      company,
      from,
      to,
      description,
    },
  });
  res.json(data);
}

export default MakeExperience;
