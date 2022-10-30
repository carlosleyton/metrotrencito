import Station from '../interfaces/station';
import React, { useMemo, useState } from 'react'
import { useLocalFetchStations } from '../services/station-service';
import { StationCard } from './station-card';
import  {Pagination} from './pagination';

let pageSize = 5;

export const StationList = () => {
    //const { data: stations, isLoading, error } = useFetchStations();
    const [stations, setStations] = useState(useLocalFetchStations());
    const sourceStations = useLocalFetchStations() ;
    const [city, setCity] = useState("");
    const [code, setCode] = useState("");

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return stations.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, stations]);
    /**
     * It filters the stations based on the city and code.
     */
    const handleFilter = () => {
        let filtredStations = sourceStations;
        //console.log(sourceStations,'ref')
        if (city !== "" && code !== "") {
            //console.log('-> 1')
            filtredStations = sourceStations.filter(
                (station) => station.city.includes(city.toUpperCase()) && station.code.includes(code.toUpperCase())
            )
        }
        else if (city !== "" && code === "") {
            //console.log('-> 2')
            filtredStations = sourceStations.filter(
                (station) => station.city.includes(city.toUpperCase())
            )
        }
        else if (city === "" && code !== "") {
            //console.log('-> 3')
            filtredStations = sourceStations.filter(
                (station) => station.code.includes(code.toUpperCase())
            )
        }
        //console.log(city, code, filtredStations)
        setStations(filtredStations)
    }

  return (
      <>
          <div className="columns">
              <div className="column field">
                  <input
                      type="text"
                      name="cityFilter"
                      placeholder="Filtro Comuna"
                      className="input is-large"
                      onChange={(e) => { setCity(e.target.value); handleFilter() }}
                      value={city}
                  />
              </div>
              <div className="column field">
                  <input
                      type="text"
                      name="codeFilter"
                      placeholder="Filtro Linea"
                      className="input is-large"
                      onChange={(e) => { setCode(e.target.value); handleFilter()} }
                      value={code}
                  />
              </div>
        </div>

          {currentTableData &&
              currentTableData.map((station: Station) => (
                  <>
                      <StationCard
                          code={station.code}
                          address={station.address}
                          city={station.city}
                          fantasy_name={station.fantasy_name}
                          schedule={station.schedule}
                      />
                      <hr />

                  </>
              )
            )
          }
          <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={stations.length}
              pageSize={pageSize}
              onPageChange={(page: number) => setCurrentPage(page)}
          />
      </>
  )
}
