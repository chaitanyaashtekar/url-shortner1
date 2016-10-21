var operateDatabase=require(process.cwd()+'/app/controllers/db.server.js')


module.exports = function(app, db) {
	var operatedatabase=new operateDatabase(db);
    app.get('/', function(req, res) {
        res.send('welcome to url-shortner');
    });
    app.get('/favcon.ico', function(req, res) {
        console.log(req.url)
        res.end();
    });
    app.get('/:site', function(req, res) {
        if(isNaN(req.params.site)){//valid site(e.g google.com)
         operatedatabase.addSite(req.params.site,function(data){
         	res.end(JSON.stringify(data));
         });
        }
        else operatedatabase.fetch(req.params.site,function(result){
        	res.redirect('https://'+result)
        })
    })

}

