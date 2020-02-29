const logic = require('./logic')

exports.inside = (x, y, polygonCoordinatesArr, err) =>{
    try {
        if(err) {
            throw new Error()
        }
        return logic.checkCoordinates(x, y, polygonCoordinatesArr)
    } catch (err) {
        return err
    }
}