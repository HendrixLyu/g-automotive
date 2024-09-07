import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Welcome to G Automotive</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto voluptas
        ad aspernatur voluptate officiis harum iure doloribus odio vel,
        explicabo dicta pariatur tempore, optio dolores maxime molestiae sint
        ipsum animi repellat amet quas possimus deserunt omnis nemo. Esse
        dolorem qui quia ratione in totam beatae similique enim iste, architecto
        doloremque aperiam repellendus fugit commodi ipsum quidem. Voluptatibus
        perspiciatis repellendus aut suscipit quas officiis, dolore eum dolorum
        nulla mollitia iure amet.
      </p>
      <button className={styles.contactButton}>Contact Us</button>
    </header>
  );
};

export default Header;
