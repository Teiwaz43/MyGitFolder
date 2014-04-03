/**
 * Created by Teiwaz on 08-01-2014.
 */
var s=imovel("i1", "sd1", "/semtitulo.png", 50, locat("l1", "g1"),caracteristics(10, 15, 7, 3),apreciations(3, "d1", 25, "le troll"), "available");
var list = [s,s,s,s,s];
module.exports = {

    /*listtester*/
    list: function list() {
        return list;
    }
};
function imovel(shortname, longdescription, pictures, weeklyprice, loca, carateristics, apreciations, availability) {
    var i=new Object();
    i.shortname=shortname;
    i.longdescription = longdescription;
    i.pictures = new Array(pictures);
    i.weeklyprice = weeklyprice;
    i.loca = loca;
    i.carateristics = carateristics;
    i.apreciations = new Array([apreciations]);
    i.availability = availability;
    return i;
}
function locat(locals , gpsposition){
    var l=new Object();
    l.local = locals;
    l.gpsposition = gpsposition;
    return l;
}
function caracteristics(capacity,dimension,ndivisions,nrooms){
   var c=new Object();
    c.capacity=capacity;
    c.dimension=dimension;
    c.ndivisions=ndivisions;
    c.nrooms=nrooms;
    return c;
}
function apreciations(grade,description,day,author){
    var a=new Object();
    a.grade=grade;
    a.description=description;
    a.day=day;
    a.author=author;
    return a;
}
