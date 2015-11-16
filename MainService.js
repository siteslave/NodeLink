angular.module('app.services.Main', [])
.factory('MainService', function ($q) {

  var configFile = ipc.sendSync('get-config-file');
  var config = fse.readJsonSync(configFile);

  var db = require('knex')({
    client: 'mysql',
    connection: config.db
  });

  return {
    list: function (date) {
      var q = $q.defer();
      /*
      select o.hn, o.vstdate, p.pname, p.fname, p.lname,
      pt.name as pttype_name
      from ovst as o
      inner join patient as p on p.hn=o.hn
      left join pttype as pt on pt.pttype=o.pttype
      where o.vstdate = '2015-01-20'
      */
      db('ovst as o')
      .select('o.hn', 'o.vstdate', 'p.pname', 'p.fname', 'p.lname',
      'pt.name as pttype_name')
      .innerJoin('patient as p', 'p.hn', 'o.hn')
      .leftJoin('pttype as pt', 'pt.pttype', 'o.pttype')
      .where('o.vstdate', date)
      .then(function (rows) {
        q.resolve(rows)
      })
      .catch(function (err) {
        q.reject(err)
      });

      return q.promise;
    }
  }
})
