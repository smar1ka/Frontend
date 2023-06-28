import Lorem from "./Lorem";
const BigLorem = () => {
  const loremDetermineArray = [
    { title: "Lorem ipsum mountain" },
    { title: "Lorem ipsum waterfall" },
    { title: "Lorem ipsum beach" },
  ];
  return (
    <div className="bigLorem">
      {loremDetermineArray.map(
        (item) => {
          console.log(item);
          return <Lorem data={item} />;
        }
        // <Lorem data={item}/>
      )}
    </div>
  );
};
export default BigLorem;
