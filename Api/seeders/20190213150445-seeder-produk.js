"use strict";
const faker = require("faker");
module.exports = {
  up: (queryInterface, Sequelize) => {
    let produk = [];
    for (var i = 0; i < 5; i++) {
      produk.push({
        nama: faker.name.findName(),
        gambar:
          "http://cdn2.tstatic.net/style/foto/bank/images/tes-kepribadian-mengetahui-ukuran-kecemasan-dalam-percintaan-lewat-gambar-pertama-yang-dilihat_20180826_141212.jpg",
        modal: 1500,
        harga: 2000,
        stok: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    return queryInterface.bulkInsert("Produk", produk, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Produk", null, {});
  }
};
