import "./_style.scss";
function Form({value ,setValue,clickHandler}) {
  return (
    <div className="form-data">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id="name"
      />
      <button type="submit" onClick={clickHandler}>
        generate
      </button>
    </div>
  );
}

export default Form;
