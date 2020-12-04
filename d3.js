import * as d3Core from 'd3';
import * as d3Delaunay from 'd3-delaunay';
import * as d3Geo from 'd3-geo';
import * as d3GeoProjection from 'd3-geo-projection';
import * as d3GeoScaleBar from 'd3-geo-scale-bar';
import * as d3GeoVoronoi from 'd3-geo-voronoi';
import * as d3Tricontour from 'd3-tricontour';

export const d3 = Object.assign({},
    d3Core,
    d3Delaunay,
    d3Geo,
    d3GeoProjection,
    d3GeoScaleBar,
    d3GeoVoronoi,
    d3Tricontour
);
