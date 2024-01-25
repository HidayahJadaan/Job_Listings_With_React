import React, { useState } from "react";
import jobs from "../../data/data";
import { Link } from "react-router-dom";

export default function JobList() {
  const [jobData, setJobDate] = useState(jobs);
  const [searchTerm, setSearchTerm] = useState("");
  const searchTermValue = searchTerm.toLocaleLowerCase();
  // ===================================
  const [searchByLocation, setSearchByLocation] = useState('');
const locationSearchHnadler = ()=>{
    const filteredData = jobs.filter(job=> 
        job.location.toLocaleLowerCase().includes(
            searchByLocation.toLocaleLowerCase()
        ))

        setJobDate(filteredData)
}


  // ============== Filtering ======================
  const filterJobData = (e) => {
    const filterValue = e.target.value;

    if (filterValue === "full-time") {
      const filterdData = jobs.filter((job) => job.contract === "Full Time");

      setJobDate(filterdData);
    } else if (filterValue === "part-time") {
      const filterdData = jobs.filter((job) => job.contract === "Part Time");

      setJobDate(filterdData);
    } else if (filterValue === "freelance") {
      const filterdData = jobs.filter((job) => job.contract === "Freelance");

      setJobDate(filterdData);
    } else if (filterValue === "contract") {
      const filterdData = jobs.filter((job) => job.contract === "Contract");

      setJobDate(filterdData);
    } else {
      setJobDate(jobs);
    }
  };

  return (
    <section className="job__list">
      <div className="container">
        <div className="job__list__wrapper">
          <div className="search__panel">
            <div className="search__panel-01">
              <span>
                <i class="ri-search-line"></i>
              </span>
              <input
                type="text"
                placeholder="Search by title, companies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="search__panel-02">
              <span>
                <i class="ri-map-pin-line"></i>
              </span>
              <input type="text" placeholder="Search by location"
              value={searchByLocation}
              onChange={e=>setSearchByLocation(e.target.value)} />
              <button className="btn"
              onClick={locationSearchHnadler}>Search</button>
            </div>

            <div className="search__panel-03">
              <select onChange={filterJobData}>
                <option>Filter Jobs By</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="freelance">Freelance</option>
                <option value="contract">Contract</option>
              </select>
            </div>
          </div>
        </div>

        <div className="jobs__wrapper">
          {jobData
            ?.filter((job) => {
              if (searchTerm === "") return job;

              if (
               job.position.toLocaleLowerCase().includes(searchTermValue)
                || job.company.toLocaleLowerCase().includes(searchTermValue)
              )
                return job;
            })
            .map((item) => (
              <div className="job__item" key={item.id}>
                <img src={item.logo} alt={item.id} />

                <div className="job__content">
                  <h6>
                    {item.postedAt} - {item.contract}
                  </h6>
                  <h1>
                    <Link to={`/jobs/${item.position}`}>{item.position}</Link>
                  </h1>

                  <p>{item.company}</p>

                  <div className="location">
                    <p>
                      Location: <span>{item.location}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
