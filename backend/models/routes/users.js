/** @format */

const router = require("express").Router();

let User = require("../user.model");

router.route("/").get(async (req, res) => {
	try {
		await User.find()
			.then((user) => res.json(user))
			.catch((err) => res.status(500).json("Error: " + err));
	} catch (error) {
		return res.json(error);
	}
});
router.route("/add").post((req, res) => {
	const username = req.body.username;

	const newUser = new User({ username });

 newUser
		.save()
		.then(() => res.json("User added!"))
		.catch((err) => res.status(400).json("Error: " + err));
	//  return res.send(newUser)
});

module.exports = router;
