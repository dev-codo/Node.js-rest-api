import { Router } from "express";
import {
	getAllPosts,
	getPost,
	createPost,
	deletePost,
	updatePost,
} from "../controllers/posts.js";

const router = Router();

router.get("/", getAllPosts);

router.get("/:postId", getPost);

router.post("/", createPost);

router.delete("/:postId", deletePost);

router.patch("/:postId", updatePost);

export default router;
