//constant globals-------------------------------
var MAX_SITES = 60;
//globals-------------------------------
var sites= []
for(var i = 0; i< MAX_SITES; i++)
{
  sites[sites.length] = {x:Math.random()*800,y:Math.random()*600};
}
console.log(sites);
var voronoi = new Voronoi();
var bbox = {xl: 0, xr: 800, yt: 0, yb: 600}; // xl is x-left, xr is x-right, yt is y-top, and yb is y-bottom
//var sites = [ {x: 200, y: 200}, {x: 50, y: 250}, {x: 400, y: 100} /* , ... */ ];

// a 'vertex' is an object exhibiting 'x' and 'y' properties. The
// Voronoi object will add a unique 'voronoiId' property to all
// sites. The 'voronoiId' can be used as a key to lookup the associated cell
// in diagram.cells.

var diagram = voronoi.compute(sites, bbox);
console.log(diagram);
