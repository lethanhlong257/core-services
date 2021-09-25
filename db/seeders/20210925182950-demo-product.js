'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
    {
      name: 'iPhone X',
      price: 499,
      branch: 'Apple',
      color: 'red',
      description: 'Apple product',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'iPhone 11',
      price: 699,
      branch: 'Apple',
      color: 'black',
      description: 'Apple product',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'iPhone 12',
      price: 799,
      branch: 'Apple',
      color: 'white',
      description: 'Apple product',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'iPhone 5',
      price: 99,
      branch: 'Apple',
      color: 'silver',
      description: 'Apple product',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Samsung galaxy S7',
      price: 300,
      branch: 'SAMSUNG',
      color: 'red',
      description: 'SAMSUNG product',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Samsung galaxy S9',
      price: 399,
      branch: 'SAMSUNG',
      color: 'white',
      description: 'SAMSUNG product',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Samsung galaxy S20',
      price: 699,
      branch: 'SAMSUNG',
      color: 'blue',
      description: 'SAMSUNG product',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'iPad air 2020',
      price: 699,
      branch: 'Apple',
      color: 'red',
      description: 'Apple product',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'iPad mmini 2021',
      price: 699,
      branch: 'Apple',
      color: 'red',
      description: 'Apple product',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'iPad pro 2021',
      price: 799,
      branch: 'Apple',
      color: 'red',
      description: 'Apple product',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Realme product',
      price: 300,
      branch: 'Realme',
      color: 'red',
      description: 'Realme product',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Samsung galaxy A20',
      price: 400,
      branch: 'SAMSUNG',
      color: 'green',
      description: 'SAMSUNG product',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Samsung galaxy S8',
      price: 699,
      branch: 'SAMSUNG',
      color: 'red',
      description: 'SAMSUNG product',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
