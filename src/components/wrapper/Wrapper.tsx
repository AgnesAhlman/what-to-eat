import React from "react";
import styles from "./Wrapper.module.css";

interface WrapperProps extends React.PropsWithChildren {
  align?: "flex-end" | "flex-start" | "center";
  justify?: "flex-end" | "flex-start" | "center" | "space-between";
  flexDirection?: "column" | "row";
}

const defaultProps: WrapperProps = {
  align: "center",
  justify: "center",
  flexDirection: "column",
};

const Wrapper: React.FC<WrapperProps> = (props = defaultProps) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        alignItems: props.align,
        justifyContent: props.justify,
        flexDirection: props.flexDirection,
      }}
    >
      {props.children}
    </div>
  );
};

export default Wrapper;
