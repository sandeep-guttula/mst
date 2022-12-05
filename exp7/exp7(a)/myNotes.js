exports.packages = async (req, res) => {
	try {
		res.status(200).json({
			message: 'You can now get the requested notes for your request ',
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err,
		});
	}
};
exports.bookpackage = async (req, res) => {
	try {
		res.status(201).json({
			data: 'New booking added for the POST request',
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err.errmsg,
		});
	}
};
exports.invalid = async (req, res) => {
	res.status(404).json({
		status: 'fail',
		message: 'Invalid path',
	});
};