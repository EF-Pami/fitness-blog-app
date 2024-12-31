import styled from "styled-components";

export const StyledFooter = styled.footer`
  margin-top: auto;
  background-color: ${({ theme }) => theme.colors.darkgray || "#333"};
  line-height: 1.5;
  padding-top: 12px;
  color: ${({ theme }) => theme.colors.white || "#fff"};
  
  .footer-flexbox {
    display: flex;
    justify-content: space-around;

    a {
      color: ${({ theme }) => theme.colors.white || "#fff"};
      text-decoration: none;
    }
  }

  .footer-head {
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white || "#fff"};
  }

  .licence {
    color: ${({ theme }) => theme.colors.white || "#fff"};
    text-align: center;
  }

  /* Existing styles */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    list-style-type: none;
    color: ${({ theme }) => theme.colors.blue || "#5C00FF"};
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
  }
`;
