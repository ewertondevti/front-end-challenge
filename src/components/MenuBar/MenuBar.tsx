import { AuditOutlined, MailOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAppData from "../../data/hooks/useAppData";
import { KeyType } from "../../data/types";
import styles from "./MenuBar.module.scss";

const MenuBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { currentKey, changeCurrentKey } = useAppData();

  useEffect(() => {
    if (location.pathname) {
      const keyType = location.pathname.replace("/", "");
      changeCurrentKey(keyType);
    }
  }, [location.pathname, changeCurrentKey]);

  const handleClick = (key: string) => changeCurrentKey(key);

  return (
    <div className={styles.menuBar}>
      <Menu
        onClick={({ key }) => handleClick(key)}
        selectedKeys={[currentKey]}
        mode="horizontal"
      >
        <Menu.Item
          key={KeyType.Posts}
          icon={<MailOutlined />}
          onClick={() => navigate("posts")}
        >
          Posts
        </Menu.Item>
        <Menu.Item
          key={KeyType.AboutMe}
          icon={<AuditOutlined />}
          onClick={() => navigate("aboutMe")}
        >
          About Me
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default MenuBar;
