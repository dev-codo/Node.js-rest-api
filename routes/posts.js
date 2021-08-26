const express = require("express");
const Post = require("../Models/Post");
const router = express.Router();

// get all
router.get("/", async (req, res) => {
	try {
		const posts = await Post.find();
		res.json(posts);
	} catch (err) {
		res.json({ message_err: err });
	}
});

// get by id
router.get("/:postId", async (req, res) => {
	try {
		const getById = await Post.findById(req.params.postId);
		res.json(getById);
	} catch (err) {
		res.json({ message_err: err });
	}
});

// post
router.post("/", async (req, res) => {
	console.log(req.body);
	const post = new Post({
		title: req.body.title,
		description: req.body.description,
	});

	try {
		const savedPost = await post.save();
		res.json(savedPost);
	} catch (err) {
		res.json({ message_err: err });
	}
});

// delete
router.delete("/:postId", async (req, res) => {
	try {
		const removeById = await Post.remove({ _id: req.params.postId });
		res.json(removeById);
	} catch (err) {
		res.json({ message_err: err });
	}
});

// update
router.patch("/:postId", async (req, res) => {
	try {
		const updateById = await Post.updateOne(
			{ _id: req.params.postId },
			{
				$set: {
					title: req.body.title,
					description: req.body.description,
				}
			}
		);
		res.json(updateById);
	} catch (err) {
		res.json({ message_err: err });
	}
});

module.exports = router;
