import Post from "../Models/Post.js";

export const getAllPosts = async (req, res) => {
	try {
		const posts = await Post.find();
		res.json(posts);
	} catch (err) {
		res.json({ message_err: err });
	}
};

export const getPost = async (req, res) => {
	try {
		const getById = await Post.findById(req.params.postId);
		res.json(getById);
	} catch (err) {
		res.json({ message_err: err });
	}
};

export const createPost = async (req, res) => {
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
};

export const deletePost = async (req, res) => {
	try {
		const deleteById = await Post.deleteOne({ _id: req.params.postId });
		res.json(deleteById);
	} catch (err) {
		res.json({ message_err: err });
	}
};

export const updatePost = async (req, res) => {
	try {
		const updateById = await Post.updateOne(
			{ _id: req.params.postId },
			{
				$set: {
					title: req.body.title,
					description: req.body.description,
				},
			}
		);
		res.json(updateById);
	} catch (err) {
		res.json({ message_err: err });
	}
};
