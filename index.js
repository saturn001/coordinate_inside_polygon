const logic = require('./logic')

var polygonCoordinatesArr = [
    {
        "lat" : 28.6450910624919,
        "lng" : 77.1118771625584
    }, 
    {
        "lat" : 28.6509851192381,
        "lng" : 77.1212541652745
    }, 
    {
        "lat" : 28.6503637167354,
        "lng" : 77.1247088504856
    }, 
    {
        "lat" : 28.6475202825551,
        "lng" : 77.1252023769444
    }, 
    {
        "lat" : 28.6423039810262,
        "lng" : 77.1164691043919
    }, 
    {
        "lat" : 28.6422474853659,
        "lng" : 77.1136366916722
    }, 
    {
        "lat" : 28.6426241225265,
        "lng" : 77.1113192630833
    }
]

var x =28.6143;
var y = 77.3867;

var inside = logic.checkCoordinates(x, y, polygonCoordinatesArr)

console.log(inside)