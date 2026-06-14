import { Router } from "express";

const router = Router();

router.get("/", async (_, res) => {
  res.json({
    status: "healthy",
    network: "solana",
    version: "1.0.0"
  });
});

export default router;
