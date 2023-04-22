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

            h1 {
                font-weight: 900;
                font-size: 40px;
                line-height: 48px;
                color: #5E60CE;

                span:first-child {
                    color: #4EA8DE;
                }
            }

            .toggle-container {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .switch {
                margin: 0.375rem;
            }
        }
    }
`;