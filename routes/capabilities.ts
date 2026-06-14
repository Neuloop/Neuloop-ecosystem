import { Router } from "express";

const router = Router();

router.get("/:name", async (req, res) => {
  const { name } = req.params;

  res.json({
    success: true,
    data: {
      name,
      capabilities: [
        "swap",
        "stake",
        "lend"
      ]
    }
  });
});

export default router;
