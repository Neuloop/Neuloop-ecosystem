import { Router } from "express";

const router = Router();

router.put("/:name", async (req, res) => {
  const { name } = req.params;

  res.json({
    success: true,
    message: `${name} updated`
  });
});

export default router;
