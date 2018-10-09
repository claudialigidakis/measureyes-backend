exports.seed = function(knex, Promise) {
  const tablesToClean = ['video', 'locations', 'accounts']
  return tablesToClean.reduce((acc, ele) => acc.then(() => knex(ele).del()), Promise.resolve())
};
