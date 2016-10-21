 function operateDatabase(db) {
     var websites = db.collection('websites');
     this.addSite = function(sitename, callback) {
         websites.find({}).toArray(function(err, list) {
             var count = list.length;
             console.log(count)
             websites.insert({ website: sitename, number: count }, function(err, data) {
                 if (err) throw err;
                 console.log(data)
                 callback({website:data.ops[0].website,number:data.ops[0].number});
             })
         })

     }
     this.fetch = function(number, callback) {

         websites.find({ number: +number }).toArray(function(err, docs) {
             console.log(docs[0].website)
             callback(docs[0].website)
         })

     }

 }

 module.exports = operateDatabase;
