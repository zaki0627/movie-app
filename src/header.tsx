interface Props {
  children: React.ReactNode;
}
function Header(props: Props) {
  const { children } = props;
  return (
    <>
      <header>MOVIEFLIX</header>
      <main>{children}</main>
    </>
  );
}

export default Header;
