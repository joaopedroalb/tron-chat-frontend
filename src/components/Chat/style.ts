import styled from "styled-components";

export const ChatBox = styled.div`
    width: 80%;
    min-height: 90vh;
    border-radius: 20px;
    padding: 1rem;
    background: var(--gray);
    color: var(--white);

    display: flex;
    flex-direction: column;

`

export const MessageContainer = styled.div`
    width: 100%;
    flex: 1;
    display: flex;


    background: var(--gray);
    color: var(--white);

    ul{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    li{
        display: flex;
        gap: 1rem;
        img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
    }

`

export const InputContainer = styled.div`
    width: 100%;
    height: 90px;
    color: #000;

    display: flex;
    align-items: center;
    padding: 1rem;
    gap: .7rem;

    input{
        width: 95%;
        padding: .75rem;
        border: none;
        border-radius: 6px;

        &:focus{
            outline: none;
        }
    }

    button{
        border: none;
        border-radius: 5px;
        padding: .5rem;
        font-weight: 600;
        cursor: pointer;
    }
`