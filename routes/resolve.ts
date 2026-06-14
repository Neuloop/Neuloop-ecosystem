import { Router } from "express";

const router = Router();

router.get("/:name", async (req, res) => {
  const { name } = req.params;

  res.json({
    success: true,
    data: {
      name,
      owner: "wallet_address",
      endpoint: "https://agent.example.com",
      verified: true
    }
  });
});

export default router;
