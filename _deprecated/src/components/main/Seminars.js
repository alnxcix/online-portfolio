// necessary imports
import { Fragment } from "react";
import { trainings_seminars_data as data } from "data/trainings_seminars_data";

const Seminars = () => (
  <>
    <h2 className="fw-bold m-0 mb-3">
      📢 <span className="gradient">Seminars Attended</span>
    </h2>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Year</th>
          <th scope="col">Month</th>
          <th scope="col">Seminar</th>
        </tr>
      </thead>
      <tbody>
        {data.map((e, i) => (
          <Fragment key={i}>
            <tr>
              <th
                className="gradient"
                scope="row"
                rowSpan={e.months
                  .map((e) => e.seminars.length)
                  .reduce((acc, cur) => acc + cur, 0)}
              >
                {e.year}
              </th>
              <td className="fw-bold" rowSpan={e.months[0].seminars.length}>
                {e.months[0].month}
              </td>
              <td>
                {e.months[0].seminars[0].title}{" "}
                <small className="text-muted">
                  {e.months[0].seminars[0].subtitle}
                </small>
              </td>
            </tr>
            {e.months[0].seminars.length > 0
              ? e.months[0].seminars.slice(1).map((e, i) => (
                  <tr key={i}>
                    <td>
                      {e.title}{" "}
                      <small className="text-muted">{e.subtitle}</small>
                    </td>
                  </tr>
                ))
              : null}
            {e.months.length > 0
              ? e.months.slice(1).map((e, i) => (
                  <Fragment key={i}>
                    <tr>
                      <td className="fw-bold" rowSpan={e.seminars.length}>
                        {e.month}
                      </td>
                      <td>
                        {e.seminars[0].title}{" "}
                        <small className="text-muted">
                          {e.seminars[0].subtitle}
                        </small>
                      </td>
                    </tr>
                    {e.seminars.length > 0
                      ? e.seminars.slice(1).map((e, i) => (
                          <tr key={i}>
                            <td>
                              {e.title}{" "}
                              <small className="text-muted">{e.subtitle}</small>
                            </td>
                          </tr>
                        ))
                      : null}
                  </Fragment>
                ))
              : null}
          </Fragment>
        ))}
      </tbody>
    </table>
  </>
);

export default Seminars;
