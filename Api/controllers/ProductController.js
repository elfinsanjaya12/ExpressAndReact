const models = require("../models");

module.exports = {
	//get all product
	all: (req, res) => {
		models.Product.all()
			.then((product) => {
				console.log(product);
				res.status(200).json({
					message: "Success Read Product",
					data: product
				});
			})
			.catch((err) => {
				console.log(err);
				res.status(500).json({
					message: "Something Went Wrong"
				});
			});
	},

	// create data product
	create: (req, res) => {
		const { name, width } = req.body;
		models.Product.create({
			name,
			width
		}) // successs create data product
			.then((product) => {
				res.status(201).json({
					message: "Success Create Data Product",
					data: product
				});
			})
			// cek error
			.catch((err) => {
				if (err.errors[0].message) {
					const message = err.errors[0].message;
					res.status(403).json({
						message: message
					});
				} else {
					res.status(500).json({
						message: "Something Went Wrong"
					});
				}
			});
	},
	// update data product
	update: (req, res) => {
		//   simpan id di variabel
		const { id } = req.params;
		const { name, width } = req.body;

		// select berdasarkan id
		models.Product.findOne({
			where: { id: id }
		}).then((product) => {
			product
				.update({
					name,
					width
				})
				.then((updateProduct) => {
					res.status(201).json({
						message: "Success Update Data Product",
						data: updateProduct
					});
				});
		});
	},
	// delete data product
	destroy: (req, res) => {
		const { id } = req.params;
		models.Product.findOne({
			where: { id: id }
		})
			.then((deleteProduct) => {
				deleteProduct
					.destroy()
					.then(() => {
						res.status(201).json({
							message: "Success Delete Data Product",
							data: deleteProduct
						});
					})
					.catch((err) => {
						console.log("atas");
						res.status(500).json({
							message: "Something Went Wrong"
						});
					});
			})
			.catch((err) => {
				console.log("bawah");
				res.status(500).json({
					message: "Something Went Wrong"
				});
			});
	}
};
