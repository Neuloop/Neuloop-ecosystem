import { Router } from "express";

const router = Router();

router.post("/", async (req, res) => {
  const { name, signature } = req.body;

  res.json({
    success: true,
    data: {
      name,
      verified: true,
      signature
    }
  });
});

export default router;
