exports.seed = function(knex, Promise) {
  const tablesToClean = ['accounts','locations']
  return tablesToClean.reduce((acc, ele) => acc.then(() => knex(ele).del()), Promise.resolve())
};
