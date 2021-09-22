const httpStatus = require('http-status');
const { Item } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a item
 * @param {Object} itemBody
 * @returns {Promise<Item>}
 */
const createItem = async (userBody) => {
  return Item.create(userBody);
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryItems = async (filter, options) => {
  const items = await Item.paginate(filter, options);
  return items;
};

/**
 * Get item by id
 * @param {ObjectId} id
 * @returns {Promise<Item>}
 */
const getItemById = async (id) => {
  return Item.findById(id);
};

/**
 * Update item by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<Item>}
 */
const updateItemById = async (userId, updateBody) => {
  const category = await getItemById(userId);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Item not found');
  }
  Object.assign(category, updateBody);
  await category.save();
  return category;
};

/**
 * Delete item by id
 * @param {ObjectId} itemId
 * @returns {Promise<Item>}
 */
const deleteItemById = async (itemId) => {
  console.log('DELETE Item::::', itemId);
  const item = await getUserById(itemId);
  if (!item) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Item not found');
  }
  await item.remove();
  return item;
};

module.exports = {
  createItem,
  queryItems,
  getItemById,
  updateItemById,
  deleteItemById,
};
