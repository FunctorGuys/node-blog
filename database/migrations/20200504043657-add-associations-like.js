'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn(
        'likes', // name of Source model
        'user_id', // name of the key we're adding
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'users', // name of Target model
            key: 'id', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        },
      )
      .then(() => {
        return queryInterface.addColumn(
          'likes', // name of Source model
          'post_id', // name of the key we're adding
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'posts', // name of Target model
              key: 'id', // key in Target model that we're referencing
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          },
        );
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface
      .removeColumn(
        'likes', // name of Source model
        'user_id', // key we want to remove
      )
      .then(() => {
        return queryInterface.removeColumn(
          'likes', // name of Source model
          'post_id', // key we want to remove
        );
      });
  },
};
