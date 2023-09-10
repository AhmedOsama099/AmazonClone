import { Helmet } from "react-helmet";
import { IMetaProps } from "../ts/interfaces";

const Meta: React.FC<IMetaProps> = (props) => {
  const { title } = props;
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Helmet>
  );
};

export default Meta;
