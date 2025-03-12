import HeaderLayoutDefault from "./LayoutDefault";

const Header = ({ layout, data }) => {
  switch (layout) {
    case 1:
      return;

    case 2:
      return;

    default:
      return <HeaderLayoutDefault data={data} />;
  }
};
export default Header;
