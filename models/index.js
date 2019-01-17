const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {logging: false});

//module.exports = { db }

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    timestamps: true,
    paranoid: true,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    timestamps: true,
    paranoid: true,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    timestamps: true,
    paranoid: true,
  },
  status: {
    type: Sequelize.ENUM('open', 'closed'),
    allowNull: true,
    timestamps: true,
    paranoid: true,
  }
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    timestamps: true,
    paranoid: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmail: true,
    timestamps: true,
    paranoid: true,
  }
});

module.exports = { db, Page, User }


