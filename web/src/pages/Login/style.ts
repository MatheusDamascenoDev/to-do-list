import styled from 'styled-components';

export const ContainerLogin = styled.div`
    section.login {
        background: ${props => props.theme.colors.shapes};
        border-radius: 1rem;
        margin-top: -10rem;
        padding: 4.375rem 3.75rem;
        filter: drop-shadow(0px 24px 64px black);
  
          header {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
    
            h2 {
                color: ${props => props.theme.colors.textTitle};
                font-size: 2.25rem;
                margin-bottom: 1rem;
              }   

            .form-group {
                display: flex;
                gap: 0.25rem;
                align-items: center;
                background: ${props => props.theme.colors.shadow};
                font-size: 16px;
                flex-direction: column;
        
                input {
                    flex: 1;
                    background: ${props => props.theme.colors.background};
                    border: 0;
                    color: ${props => props.theme.colors.text};
                    padding: 0.75rem 1.5rem;
                    border-radius: 8px;
                    border: 0;
                    color: black;
                    width: 14rem;
                    margin-bottom: 1rem;
            
                    &::placeholder {
                        color: ${props => props.theme.colors.textLight}
                    }
                }

            button {
                font-weight: 600;
                border-radius: 8px;
                border: 0;
                background: ${props => props.theme.colors.green};
                color: #fff;
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 0.875rem;
                transition: filter 0.2s;

                &:hover {
                    filter: brightness(0.95);
                }
            }
          }

          p {
            margin: 1rem;
          }
      }
    }

    @media (max-width: 575px) {
        section.login {
        background: ${props => props.theme.colors.shapes};
        border-radius: 1rem;
        margin-top: -10rem;
        padding: 4.375rem 3.75rem;
        filter: drop-shadow(0px 24px 64px black);
  
        header {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
    
            h2 {
                color: ${props => props.theme.colors.textTitle};
                font-size: 2.25rem;
            }       

            .form-group {
                display: flex;
                gap: 0.25rem;
                align-items: center;
                background: ${props => props.theme.colors.shadow};
                font-size: 16px;
        
                input {
                    flex: 1;
                    background: ${props => props.theme.colors.background};
                    border: 0;
                    color: ${props => props.theme.colors.text};
                    padding: 0.75rem 1.5rem;
                    border-radius: 8px;
                    border: 0;
                    color: black;
                    width: 14rem;
            
                    &::placeholder {
                        color: ${props => props.theme.colors.textLight}
                    }
                }

            button {
                font-weight: 600;
                border-radius: 8px;
                border: 0;
                background: ${props => props.theme.colors.green};
                color: #fff;
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 0.875rem;
                transition: filter 0.2s;

                &:hover {
                    filter: brightness(0.95);
                }
            }
        }
      }
    }
  }  
`;