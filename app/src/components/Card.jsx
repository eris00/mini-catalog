

const Card = ({ children }) => {
  return (
    <div className='card shadow-md rounded-lg p-4 bg-white'>
      {children}
    </div>
  );
}

export default Card