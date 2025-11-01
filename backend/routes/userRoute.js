import express from "express";
import {
  LoginUser,
  RegisterUser,
  adminLogin,
} from "../controllers/userController.js";

const userRouter = express.Router();
userRouter.post("/register", RegisterUser);
userRouter.post("/login", LoginUser);
userRouter.post("/admin", adminLogin);

export default userRouter;
