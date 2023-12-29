import React from "react";
import styled from "styled-components";
import PrevBtn from "./PrevBtn";

interface HeaderLayoutProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  text?: string;
  isApp?: boolean;
}

function HeaderLayout({
  style,
  children,
  text,
  isApp = false,
}: HeaderLayoutProps) {
  return (
    <HeaderLayoutContainer style={style}>
      {children ? (
        children
      ) : (
        <Title>
          <PrevBtn />
          {text}
        </Title>
      )}
    </HeaderLayoutContainer>
  );
}

const HeaderLayoutContainer = styled.header`
  position: fixed;
  max-width: 600px;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 10px 0 6px 0;
  width: 100%;
  height: 62px;
  background-color: white;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 500;
  padding-bottom: 6px;
`;

export default HeaderLayout;
