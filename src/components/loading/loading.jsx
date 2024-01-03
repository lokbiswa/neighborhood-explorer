const style = {
  fontSize: '1.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '90vh',
};

const Loading = () => {
  return (
    <div className="loading-container" style={style}>
      <h1 className="loadering">Loading...</h1>
    </div>
  );
};

export default Loading;
