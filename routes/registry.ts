import { Router } from "express";

const router = Router();

router.get("/:name", async (req, res) => {
  const { name } = req.params;

  res.json({
    success: true,
    data: {
      name,
      recordId: "reg_123",
      owner: "wallet_address",
      resolver: "resolver_address"
    }
  });
});

export default router;
