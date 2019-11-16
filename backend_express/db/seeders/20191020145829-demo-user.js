'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
        first_name: 'John',
        last_name: 'Doe',
        email: 'demo@demo.com',
        created_at: new Date(),
        updated_at: new Date(),
        hash: "$2y$12$mRn3uugVP/PkpowIzY8qJe6RiGuv8gFDvI1chSSOHbj22P7rHhMga"
      }, {
        first_name: 'Paul',
        last_name: 'Weller',
        email: 'the@jam.com',
        created_at: new Date(),
        updated_at: new Date(),
        hash: "$2y$12$mRn3uugVP/PkpowIzY8qJe6RiGuv8gFDvI1chSSOHbj22P7rHhMga"
      }, {
        first_name: 'Liam',
        last_name: 'Gallagher',
        email: 'lg@asyouwere.com',
        created_at: new Date(),
        updated_at: new Date(),
        hash: "$2y$12$mRn3uugVP/PkpowIzY8qJe6RiGuv8gFDvI1chSSOHbj22P7rHhMga"
      }, {
        first_name: 'Noel',
        last_name: 'Gallagher',
        email: 'nghfb@themightyi.com',
        created_at: new Date(),
        updated_at: new Date(),
        hash: "$2y$12$mRn3uugVP/PkpowIzY8qJe6RiGuv8gFDvI1chSSOHbj22P7rHhMga"
      }, {
        first_name: 'Ian',
        last_name: 'Brown',
        email: 'the@stoneroses.com',
        created_at: new Date(),
        updated_at: new Date(),
        hash: "$2y$12$mRn3uugVP/PkpowIzY8qJe6RiGuv8gFDvI1chSSOHbj22P7rHhMga"
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
