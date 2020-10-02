import React, { useState, useEffect } from "react";
import { MyContext } from "../contexts/main";
// export const Home = () =>{
//   return <div><h1>Home</h1></div>
// }

// export class Home extends React.Component {
//   state = {
//     count: 0
//   };
//    componendDidMount(){}
//   render() {
//     return (
//       <div>
//         <h1>Home</h1>><h2>THis is the count: {this.state.count}</h2>
//       </div>
//     );
//   }
// }

export const Home = (props) => {
  const [person, setPerson] = useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return setPerson(res);
      });
  }, []);

  return (
    <MyContext.Consumer>
      {({ count }) => (
        <div>
          <h1>Home</h1>
          <h2>THis is the count: {JSON.stringify(count)}</h2>
        </div>
      )}
    </MyContext.Consumer>
  );
};
