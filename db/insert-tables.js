// Server decides which function to call
// module.exports = function()...
module.exports = function(knex) {
  return {
    insertUser: (firstName) => {
      console.log("Inserting into users...");
      return knex.returning('id')
      .insert({username: firstName}).into('users');
    },
    insertList: (title, userId) => {
      console.log("Inserting into lists...");
      return knex.returning('id')
      .insert({title: title, user_id: userId}).into('lists');
    },
    // @params: coord: '40.204942, -123.117063'
    insertPoint: (title, description, image, coord, listId) => {
      console.log("Inserting into points...");
      return knex.insert({title: title, description: description, image: image, coordinates: coord, list_id: listId})
      .into('points');
    },
    insertFavList: (listId, userId) => {
      console.log("Inserting into fav_lists...");
      return knex.insert({list_id: listId, user_id: userId})
      .into('fav_lists');
    },
    insertContributions: (pointId, userId) => {
      console.log("Inserting into contributions...");
      return knex.insert({point_id: pointId, user_id: userId})
      .into('contributions');
    },
    insertPointsEditHistory: (pointId, columnName, oldVal, newVal) => {
      console.log("Inserting into points_edit_history");
      return knex.insert({point_id: pointId, column_name: columnName,
      old_value: oldVal, new_value: newVal, updated_at: knex.raw('current_timestamp')})
      .into('points_edit_history');
    }
  };
};
