/**
 * Created by Teiwaz on 08-01-2014.
 */
var eut = require('express-uri-template');
var basedados = require('./basedados');
module.exports = {
    requestSetup : function requestSetup(app){
        //Routes
        app.get('/', function(req, res){//ALL
            res.sendfile('Listpage.html');
        });
        app.get('/favico.ico', function(req, res) {
            res.sendfile('semtitulo.png');
        });
        app.get('/imovel/*', function(req, res) {
            var t=req.url.split('/');
            t=t[t.length-1];
            var imovelObj;
            basedados.list().forEach(function (imovel){
                if(imovel.shortname==t){
                    imovelObj=imovel;
                }
            });
            res.send(imovelObj);
        });
        app.post('/test-page', function(req, res) {
            var name = req.body;
        });
        app.get('/*.*', function(req, res) {//pode sacar qualquer coisa não esta limitado,provaveis problemas de segurança quem é que eu estou a enganar isto é mesmo estar a pedir problemas
                res.sendfile('./'+req.url);
        });
        app.get('/List', function(req, res) {
           res.send(basedados.list());
        });
    }
}



'/imoveis'