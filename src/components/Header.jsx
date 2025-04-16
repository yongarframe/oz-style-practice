import styled from "styled-components";
import { flexMixin, font } from "../styled/styled";

const HeaderContainer = styled.header`
  ${flexMixin("row", "center", "Spaace-between")}
  padding: 20px 20px;
  background-color: black;
  ul {
    ${flexMixin("row", "center", "Spaace-between", "20px")}
    li {
      ${font("16px", 400)}
      list-style: none;
    }
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <h1>OZ코딩스쿨</h1>
      <ul className="menu-container">
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </HeaderContainer>
  );
}
