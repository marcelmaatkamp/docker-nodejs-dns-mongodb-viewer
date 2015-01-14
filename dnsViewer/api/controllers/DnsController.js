/**
 * DnsController
 *
 * @description :: Server-side logic for managing dns
 * @help    :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  index: function (req, res) {

    Dns.find()
      .limit(3)
   // .sort('createdAt desc')
   // .where({ isPublished: 1 })
      .exec(function(err, dnses) {
        if(err){
          return next(err)
        } else { 
          res.view({dnses: dnses});
          // res.view({ layout: "dns/index", dnses: dnses });    
        }
      });  
    }

};

