const style = {
  fontSize: '2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Loading = () => {
  return (
    <div className="loading-container" style={style}>
      <h1 className="loadering">Loading...</h1>
    </div>
  );
};

export default Loading;
