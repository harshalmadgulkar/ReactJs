import ListItems from "./ListItem";

let arrSocialHandles = [
  {
    image: "https://cdn-icons-png.flaticon.com/128/3536/3536505.png",
    name: "LinkedIn",
    color: "#ff9580",
    href:"https://www.linkedin.com/in/harshal-madgulkar/"
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/3291/3291695.png",
    name: "GitHub",
    color: "#f2faa6",
    href:"https://github.com/harshalmadgulkar"
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/733/733579.png",
    name: "Twitter",
    color: "#b8b3e8",
    href:"https://twitter.com"
  }
];

function List() {
  return (
    <div className="list">
      <h1> Reach Me </h1>
      <ListItems allData={arrSocialHandles[0]} />
      <ListItems allData={arrSocialHandles[1]} />
      <ListItems allData={arrSocialHandles[2]} />
    </div>
  );
}

export default List;
