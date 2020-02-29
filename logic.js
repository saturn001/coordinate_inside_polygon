exports.checkCoordinates = (lat, lng, polygonCoordinatesArr) => {

    var x = lat, y = lng;

    var inside = false;

    var intersections = 0;

    var ss

    for (var i = 0, j = polygonCoordinatesArr.length - 1; i < polygonCoordinatesArr.length; j = i++) {

        var xi = polygonCoordinatesArr[i].lat, yi = polygonCoordinatesArr[i].lng; var xj = polygonCoordinatesArr[j].lat, yj = polygonCoordinatesArr[j].lng;

        if (yj == yi && yj == y && x > Math.min(xj, xi) && x < Math.max(xj, xi)) { // Check if point is on an horizontal polygon boundary

            return true;

        }

        if (y > Math.min(yj, yi) && y <= Math.max(yj, yi) && x <= Math.max(xj, xi) && yj != yi) {

            ss = (y - yj) * (xi - x) / (yi - y) + xj

            if (ss == x) { // Check if point is on the polygon boundary (other than horizontal)

                return true;

            }

            if (xj == xi || x <= ss) {

                intersections++;
            }
        }
    }

    // If the number of edges we passed through is odd, then it’s in the polygon.

    if (intersections % 2 != 0) {

        return true;

    } else {

        return false;

    }

}

