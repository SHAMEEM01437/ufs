import { useEffect, useRef } from "react";
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/maps/world";

const MapSection = () => {
  const mapRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    const data = {
      BR: {
        code: "BR",
        name: "Brazil",
        products: "20 Products",
        coords: [-14.235, -51.9253],
      },

      PE: {
        code: "PE",
        name: "Peru",
        products: "15 Products",
        coords: [-9.19, -75.0152],
      },

      CL: {
        code: "CL",
        name: "Chile",
        products: "12 Products",
        coords: [-35.6751, -71.543],
      },

      ZA: {
        code: "ZA",
        name: "South Africa",
        products: "18 Products",
        coords: [-30.5595, 22.9375],
      },

      ES: {
        code: "ES",
        name: "Spain",
        products: "30 Products",
        coords: [40.4637, -3.7492],
      },

      FR: {
        code: "FR",
        name: "France",
        products: "28 Products",
        coords: [46.2276, 2.2137],
      },

      GB: {
        code: "GB",
        name: "United Kingdom",
        products: "35 Products",
        coords: [55.3781, -3.436],
      },

      DE: {
        code: "DE",
        name: "Germany",
        products: "32 Products",
        coords: [51.1657, 10.4515],
      },

      IT: {
        code: "IT",
        name: "Italy",
        products: "25 Products",
        coords: [41.8719, 12.5674],
      },

      PL: {
        code: "PL",
        name: "Poland",
        products: "16 Products",
        coords: [51.9194, 19.1451],
      },

      TR: {
        code: "TR",
        name: "Türkiye",
        products: "22 Products",
        coords: [38.9637, 35.2433],
      },

      SD: {
        code: "SD",
        name: "Sudan",
        products: "10 Products",
        coords: [12.8628, 30.2176],
      },

      SA: {
        code: "SA",
        name: "Saudi Arabia",
        products: "26 Products",
        coords: [23.8859, 45.0792],
      },

      AE: {
        code: "AE",
        name: "UAE",
        products: "18 Products",
        coords: [23.4241, 53.8478],
      },

      IN: {
        code: "IN",
        name: "India",
        products: "40 Products",
        coords: [20.5937, 78.9629],
      },

      CN: {
        code: "CN",
        name: "China",
        products: "38 Products",
        coords: [35.8617, 104.1954],
      },

      MM: {
        code: "MM",
        name: "Myanmar",
        products: "14 Products",
        coords: [21.9162, 95.956],
      },

      SG: {
        code: "SG",
        name: "Singapore",
        products: "20 Products",
        coords: [1.3521, 103.8198],
      },

      MY: {
        code: "MY",
        name: "Malaysia",
        products: "19 Products",
        coords: [4.2105, 101.9758],
      },

      JP: {
        code: "JP",
        name: "Japan",
        products: "24 Products",
        coords: [36.2048, 138.2529],
      },
    };

    const tooltip = tooltipRef.current;

    const map = new jsVectorMap({
      selector: mapRef.current,
      map: "world",

      selectedRegions: Object.keys(data),

      regionStyle: {
        initial: {
          fill: "#7c9fd0",
          stroke: "#ffffff",
        },

        selected: {
          fill: "#DEEAFA",
        },

        hover: {
          fill: "#DEEAFA",
        },
      },

      markers: Object.values(data).map((country) => ({
        name: country.name,
        coords: country.coords,
      })),

      markerStyle: {
        initial: {
          fill: "#ff9d2d",
          r: 5,
        },
      },

      onRegionTooltipShow(event, mapTooltip, code) {
        const countryName = mapTooltip.text();

        if (data[code]) {
          tooltip.innerHTML = `
            <strong>${data[code].name}</strong>
            <br />
            ${data[code].products}
          `;
        } else {
          tooltip.innerHTML = `
            <strong>${countryName}</strong>
          `;
        }

        tooltip.style.display = "block";

        mapTooltip.text("");
      },
    });

    const mapElement = mapRef.current;

    const handleMouseMove = (e) => {
      if (tooltip.style.display === "block") {
        tooltip.style.left = `${e.clientX + 20}px`;
        tooltip.style.top = `${e.clientY + 20}px`;
      }
    };

    const handleMouseLeave = () => {
      tooltip.style.display = "none";
    };

    mapElement.addEventListener("mousemove", handleMouseMove);
    mapElement.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup
    return () => {
      mapElement.removeEventListener("mousemove", handleMouseMove);
      mapElement.removeEventListener("mouseleave", handleMouseLeave);

      map.destroy();
    };
  }, []);

  return (
    <section className="mab_section">
      <div className="container">
        <div className="map_wrapper">

          <div className="left_aside">

            <div className="section_heading text-left">
              <span>Global Footprint</span>

              <h2 className="section_title">
                Our Presence
              </h2>
            </div>

            <aside className="stats">

              <h4>OPERATIONS IN</h4>

              <div className="big">48</div>

              <p>Countries</p>

              <hr />

              <h4>TOTAL</h4>

              <div className="big">300+</div>

              <p>Certified Products</p>

            </aside>

          </div>

          <div
            ref={mapRef}
            id="map"
          ></div>

        </div>

        <div
          ref={tooltipRef}
          id="tooltip"
        ></div>

      </div>
    </section>
  );
};

export default MapSection;