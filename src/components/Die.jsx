function Die(props) {
  const { value, isHeld, onClick } = props;
  const className = isHeld ? "die-btn active" : "die-btn";
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
}

export default Die;
