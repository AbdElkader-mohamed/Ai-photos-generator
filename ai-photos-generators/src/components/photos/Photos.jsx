import "./_style.scss";
function Photos({res}) {
  return (
    <div className="images-parent">
    {
      res.length !== 0 ? res.data.map((item, index) => (
        <div key={index} >
          <img src={item.url}  alt="" />
        </div>
    )) : <>
      <div className="shine" ></div>
      <div className="shine" ></div>
      <div className="shine" ></div>
    </>
    }
    </div>
  );
}

export default Photos;
