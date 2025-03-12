import FooterLayoutDefault from "./LayoutDefault";

const Footer = ({ layout, data }) => {
  switch (layout) {
    case 1:
      return;
    case 2:
      return;
    default:
      return <FooterLayoutDefault data={data} />;
  }
};
export default Footer;
