import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  const { capability } = req.query;

  res.json({
    success: true,
    results: [
      {
        name: "trader",
        capability
      },
      {
        name: "market-maker",
        capability
      }
    ]
  });
});

export default router;
