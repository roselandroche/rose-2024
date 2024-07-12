"use client";

import React, { FC } from "react";
import { usePathname } from "next/navigation";

const Navbar: FC = ({}) => {
  const pathname = usePathname();

  const styles = {
    description: {
      backgroundColor: "#e6f8d1",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      fontSize: "0.9rem",
      maxWidth: "var(--max-width)",
      width: "100%",
      zIndex: "2",
      fontFamily: "var(--font-mono)",
      paddingTop: "12px",
    },
  };

  return (
    <div style={styles.description}>
      <a
        href="/"
        rel="noopener noreferrer"
        style={{
          color: pathname === "/" && "red",
          textDecoration: pathname === "/" && "underline",
        }}
      >
        Home
      </a>
      <a
        href="/values"
        rel="noopener noreferrer"
        style={{
          color: pathname === "/values" && "red",
          textDecoration: pathname === "/values" && "underline",
        }}
      >
        Values
      </a>
      <a
        href="/skills"
        rel="noopener noreferrer"
        style={{
          color: pathname === "/skills" && "red",
          textDecoration: pathname === "/skills" && "underline",
        }}
      >
        Skills
      </a>
      <a
        href="/experience"
        rel="noopener noreferrer"
        style={{
          color: pathname === "/experience" && "red",
          textDecoration: pathname === "/experience" && "underline",
        }}
      >
        Experience
      </a>
      <a
        href="/education"
        rel="noopener noreferrer"
        style={{
          color: pathname === "/education" && "red",
          textDecoration: pathname === "/education" && "underline",
        }}
      >
        Education
      </a>
    </div>
  );
};

export default Navbar;
