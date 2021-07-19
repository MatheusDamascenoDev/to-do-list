import styled from 'styled-components';

export const ContainerHeader = styled.div`
    header.header {
        background: ${props => props.theme.colors.blue};
        padding-top: 2rem;

        > .main {
            max-width: 1120px;
            margin: 0 auto;
            padding: 2rem 1rem 12rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        } 
    }

    
`;