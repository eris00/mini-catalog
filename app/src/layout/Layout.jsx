import Footer from "../components/Footer"

const Layout = ({ children, cartSidebar, header }) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {header}

      <div className="flex flex-1 w-full">
        <main className="flex-1 p-4">{children}</main>
        {cartSidebar}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
