import styled from "styled-components";
import { flexMixin, font, gray } from "../styled/styled";

const ContentContainer = styled.div`
  ${flexMixin("column", "flex-start", undefined, "5px")}
  img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 3px;
    min-height: 225px;
  }
  span {
    ${font("12px")};
    color: $tag-color;
    border: 1px solid $tag-color;
    padding: 4px 5px;
    border-radius: 3px;
  }
  div {
    ${font("18px", 600)}
  }
  p {
    ${font("12px")}
    color: ${gray}
  }
`;

export default function Content({ content }) {
  return (
    <ContentContainer>
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </ContentContainer>
  );
}
