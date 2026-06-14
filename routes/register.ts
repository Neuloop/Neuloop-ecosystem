import { Router } from "express";

const router = Router();

router.post("/", async (req, res) => {
  const {
    name,
    owner,
    endpoint,
    capabilities
  } = req.body;

  res.status(201).json({
    success: true,
    data: {
      id: "agt_123456",
      name,
      owner,
      endpoint,
      capabilities
    }
  });
});

export default router;
