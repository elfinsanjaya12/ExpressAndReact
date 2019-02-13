"use strict";
module.exports = (sequelize, DataTypes) => {
  const Produk = sequelize.define(
    "Produk",
    {
      nama: DataTypes.STRING,
      gambar: DataTypes.STRING,
      modal: DataTypes.INTEGER,
      harga: DataTypes.INTEGER,
      stok: DataTypes.INTEGER
    },
    {}
  );
  Produk.associate = function(models) {
    // associations can be defined here
  };
  return Produk;
};
