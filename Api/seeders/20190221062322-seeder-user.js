"use strict";
const bcrypt = require("bcrypt");

module.exports = {
	up: (queryInterface, Sequelize) => {
		const password = bcrypt.hashSync("rahasia", 10);
		return queryInterface.bulkInsert(
			"Users",
			[
				{
					name: "admin",
					username: "admin",
					level: "admin",
					password: password,
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Users", null, {});
	}
};
