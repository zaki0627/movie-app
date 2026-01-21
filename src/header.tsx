import "./App.css";

interface Props {
  children: React.ReactNode;
}
function Header(props: Props) {
  const { children } = props;
  return (
    <>
      <header className="app-header">
        <h1 className="app-title">MOVIEFLIX</h1>
      </header>
      <main>{children}</main>
    </>
  );
}

export default Header;
