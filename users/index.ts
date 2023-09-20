import Router from "express";

const router = Router();

type User = {
  id: string;
  name: string;
};

router.get("/", (req: any, res: any) => {
  res.send("Hello world");
});

router.post("/", (req: any, res: any) => {
  const { name } = req.body as User;
  console.log(name);
  res.send("ok");
});

export default router;
