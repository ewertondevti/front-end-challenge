import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import styles from "./Breadcrumb.module.scss";

interface IProps {
  items: string[];
}

const { Item } = Breadcrumb;

const BreadCrumb = ({ items }: IProps) => {
  const current = items[items.length - 1];

  const renderItem = (item: string) => {
    if (current === item) {
      return <Item key={item}>{item}</Item>;
    }

    return (
      <Item key={item}>
        <Link to={`/${item}`}>{item}</Link>
      </Item>
    );
  };

  return (
    <div className={styles.content}>
      <Breadcrumb>
        <Item>Home</Item>
        {items.map((item) => renderItem(item))}
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumb;
