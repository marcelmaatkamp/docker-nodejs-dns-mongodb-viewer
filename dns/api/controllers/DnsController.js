/**
 * DnsController
 *
 * @description :: Server-side logic for managing dns
 * @help    :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  index: function (req, res) {

    Dns.find()
   // .limit(3)
      .sort('timestamp desc')
      .limit(500)
   // .where({ isPublished: 1 })
      .exec(function(err, dnses) {
        if(err){
          return next(err)
        } else {
          res.view({
            dnses: dnses,
            count: Dns.count()
          });
          // res.view({ layout: "dns/index", dnses: dnses });
        }
      });
    }

};
