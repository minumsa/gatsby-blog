import { createGlobalStyle, css } from "styled-components";

interface ThemeType {
  bgColor: string;
  textColor: string;
  categoryColor: string;
  listBgColor: string;
  opacity: number;
}

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  ${({ theme }) => {
    const { bgColor, textColor, categoryColor, listBgColor, opacity } = theme;
    return css`
      @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable.css");

      body {
        margin: 0;
        background-color: ${bgColor};
        color: ${textColor};
        font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
          "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
      }

      .line {
        background-color: ${textColor};
      }

      .list-text,
      .list-button {
        background-color: ${categoryColor};
        color: ${textColor};
        border: 1px solid ${textColor};
      }

      .prev-button {
        border-top: 1.5px solid ${textColor};
        border-right: 1.5px solid ${textColor};
      }

      .next-button {
        border-top: 1.5px solid ${textColor};
        border-right: 1.5px solid ${textColor};
      }

      .post-line {
        border-top: 1.5px solid ${textColor};
      }

      .hamburger,
      .top-hamburger {
        background-color: ${textColor};
        box-shadow: 0 7px 0 ${textColor}, 0 14px 0 ${textColor};
      }

      .category-container {
        color: ${listBgColor};
        background-color: ${categoryColor};
        border: 1px solid ${listBgColor};
        box-shadow: 1px 1px 5px ${listBgColor};
      }

      @media (max-width: 550px) {
        .post-line {
          border-top: 1px solid ${textColor};
        }
      }

      p::selection {
        color: ${categoryColor};
        background-color: ${textColor};
      }

      .content-text,
      .date-created,
      .line,
      .button-container,
      .page-container,
      .title-container,
      .info-container,
      .intro-container,
      .explain-container,
      .connect-container,
      .warp-container,
      .line-color {
        opacity: ${opacity};
      }

      .underline {
        text-decoration: wavy underline ${textColor};
      }

      .mobile-line {
        background-color: ${textColor};
      }

      .prev-post,
      .next-post {
        border: 1px solid ${textColor};
        background-color: ${categoryColor};
      }
      .prev-post-title,
      .next-post-title {
        text-decoration: wavy underline ${textColor};
      }

      .top-title {
        opacity: ${opacity};
      }

      .mode-button {
        opacity: ${opacity};
      }

      header {
        display: flex;
        background-color: ${bgColor};
      }
    `;
  }}
`;

export default GlobalStyle;
