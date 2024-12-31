import styled from "styled-components";

export const StyledWrapper = styled.div`
  .contact-box img, .about-container img {
    width: 300px;
    height: 350px;
    margin-top: 20px;
  }

  .contact-box p {
    margin-top: 10px;
    margin-bottom: 40px;
  }

  #contact-form {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    gap: 10px;
    background-color: var(--white);
    border-radius: 5px;
    box-shadow: 0 2px 5px var(--black);
    overflow: hidden;
    width: 500px;
    max-width: 100%;
    padding: 30px 40px;
    margin-bottom: 40px;
  }

  .form-box {
    padding-bottom: 20px;

    label {
      display: inline-block;
      margin-bottom: 5px;
      font-weight: bold;
    }

    input {
      border: 2px solid var(--arch);
      border-radius: 4px;
      display: block;
      font-family: inherit;
      font-size: 14px;
      padding: 10px;
      width: 100%;
    }

    &.success input {
      border-color: var(--lightgreen);
    }

    &.error input {
      border-color: var(--red);
    }

    i {
      visibility: hidden;
      position: absolute;
      top: 40px;
      right: 10px;
    }

    &.success i.fa-circle-check {
      color: var(--lightgreen);
      visibility: visible;
    }

    &.error i.fa-circle-exclamation {
      color: var(--red);
      visibility: visible;
    }

    small {
      color: var(--red);
      position: absolute;
      bottom: 0;
      left: 0;
      visibility: hidden;
    }

    &.error small {
      visibility: visible;
    }
  }

  .irrelevant {
    visibility: hidden;
  }

  textarea {
    display: block;
    width: 250px;
    height: 150px;
    padding: 10px;
    box-sizing: border-box;
    border: 2px solid var(--arch);
    border-radius: 10px;
    font-size: 16px;
    resize: none;
  }

  input[type="text"] {
    width: 250px;
    padding: 10px 10px;
    margin: 6px 0;
    border-radius: 10px;
    border: 2px solid var(--arch);
    box-sizing: border-box;
  }

  input[type="submit"] {
    width: 139px;
    border: none;
    background-color: var(--lightgreen);
    font-size: 15px;
    font-weight: bold;
    padding: 12px 15px;
    border-radius: 20px;
    cursor: pointer;

    &:hover {
      background-color: var(--darkblue);
    }
  }
`;
