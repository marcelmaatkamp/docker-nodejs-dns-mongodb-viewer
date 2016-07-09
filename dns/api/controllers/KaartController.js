/**
 * KaartController
 *
 * @description :: Server-side logic for managing dns
 * @help    :: See http://links.sailsjs.org/docs/controllers
 */

 module.exports = {
   kaart: function (req, res) {

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
     },

     points: function(req, res) {
       var socket = req.socket;
       var io = sails.io;

       collection.find({}, {tailable:true, awaitdata:true, numberOfRetries:-1})
                  .sort({ $natural: 1 })
                  .each(function(err, doc) {
                    io.sockets.emit('points', {thisIs: 'theMessage'});
                    console.log(doc);
                 })
   }

 };
