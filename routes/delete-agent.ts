import { Router } from "express";

const router = Router();

router.delete("/:name", async (req, res) => {
  const { name } = req.params;

  res.json({
    success: true,
    message: `${name} deleted`
  });
});

export default router;
