import { Router } from "express";

const router = Router();

router.get("/:name", async (req, res) => {
  const { name } = req.params;

  res.json({
    success: true,
    data: {
      id: "agt_123",
      name,
      owner: "wallet_address",
      verified: true,
      endpoint: "https://agent.example.com"
    }
  });
});

export default router;
