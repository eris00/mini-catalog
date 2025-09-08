const Card = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-full border rounded-lg shadow-md p-2 bg-white">
      {children}
    </div>
  );
}

Card.Header = ({children}) => {
  return <header>{children}</header>
}

Card.Main = ({children}) => {
  return <section>{children}</section>
}

Card.Footer = ({children}) => {
  return <footer>{children}</footer>
}

export default Card