exports.seed = function(knex, Promise) {
  const tablesToClean = ['locations', 'accounts', 'video']
  return tablesToClean.reduce((acc, ele) => acc.then(() => knex(ele).del()), Promise.resolve())
};
