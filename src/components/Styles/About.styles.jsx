import styled from "styled-components";

export const StyledAbout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    font-family: Arial, sans-serif;

    h1 {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 20px;
        text-align: center;
    }

    .about-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        gap: 30px;
        max-width: 1200px;
        width: 100%;
    }

    .text-content {
        flex: 2;
        line-height: 1.8;
        font-size: 1.2rem;
        color: #333;
    }

    .text-content p {
        margin-bottom: 20px;
    }

    .image-content {
        flex: 3;
        text-align: center;
    }


    image-content img {
        width: 300px;
        height: 350px;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }


`;