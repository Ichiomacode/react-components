import Location from './Location';
import FooterLeftLink from './FooterLeftLink';
import FooterRightLink from './FooterRightLink';
const Footer = () => {
  return (
    <div className="footer-container">
      <Location title={"Nigeria"} />

      <div className="footer">
        {" "}
        <div className="footer-left">
          <FooterLeftLink title={"About"} />
          <FooterLeftLink title={"Advertising"} />
          <FooterLeftLink title={"Business"} />{" "}
          <FooterLeftLink title={"How Search works"} />{" "}
        </div>
        <p>Carbon neutral since 2007</p>
        <div className="footer-right">
          <FooterRightLink title={"Privacy"} />
          <FooterRightLink title={"Terms"} />
          <FooterRightLink title={"Settings"} />
        {" "}
        </div>
      </div>
    </div>
  );
}

export default Footer
