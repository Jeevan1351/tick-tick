import { Component } from "react";
import Badge from "./badge";

class Leaderboard extends Component {
  constructor() {
    super();
    this.state = {
      leaderboard: [],
    };
  }
  componentDidMount() {
    var temp_Leader = [
      {
        name: "John",
        picture:
          "http://images4.fanpop.com/image/photos/23700000/Funny-random-23797915-1000-981.jpg",
        points: 100,
        badges: [1],
      },
      {
        name: "Neelam",
        picture:
          "http://images4.fanpop.com/image/photos/23700000/Funny-random-23797915-1000-981.jpg",
        points: 200,
        badges: [1, 1, 1],
      },
      {
        name: "Raj",
        picture:
          "http://images4.fanpop.com/image/photos/23700000/Funny-random-23797915-1000-981.jpg",
        points: 150,
        badges: [1, 1],
      },
    ];
    var sorted_leaderboard = [...temp_Leader].sort(
      (a, b) => b.points - a.points
    );
    this.setState({ leaderboard: sorted_leaderboard });
  }
  render() {
    return (
      <>
        <div className="leaderboard">
          <h1>Leaderboard</h1>
          <div className="leaderboard-container">
            <table>
              <thead>
                <tr>
                  <th align="left" style={{ width: "15%" }}>
                    Sr. No.
                  </th>
                  <th></th>
                  <th align="left" style={{ width: "30%" }}>
                    Name
                  </th>
                  <th align="left" style={{ width: "10%" }}>
                    Points
                  </th>
                  <th align="left" style={{ width: "50%" }}>
                    Badges
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.state.leaderboard.map((leader, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          className="leaderboard-image"
                          src={leader.picture}
                          alt="leader"
                        />
                      </td>
                      <td>{leader.name}</td>
                      <td>{leader.points}</td>
                      <td style={{ display: "flex" }}>
                        {leader.badges.map((badge, index) => {
                          return <Badge key={index} />;
                        })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
export default Leaderboard;
