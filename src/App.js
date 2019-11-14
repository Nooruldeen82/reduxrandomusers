import React from "react";

export default function App(props) {
  return (
    <div className="container">
      {/* {console.log(props.users.data)} */}

      <div className="row">
        <div className="col-12 ">
          <h1 className="text-center text-white bg-dark mb-0 p-3">
            User Api with Redux
          </h1>
          <table className="table">
            <thead className="bg-info">
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Country</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {props.users.data
                ? props.users.data.map((user, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{user.name.first}</td>
                      <td>{user.name.last}</td>
                      <td>{user.nat}</td>
                      <td>
                        <img src={user.picture.large} alt="pic" />
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
