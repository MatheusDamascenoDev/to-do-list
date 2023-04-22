import styled from 'styled-components';

export const ContainerTask = styled.div`
    section.task-list {
        background: ${props => props.theme.colors.shapes};
        border-radius: 1rem;
        margin-top: -10rem;
        padding: 4.375rem 3.75rem;
        filter: drop-shadow(0px 24px 64px black);
  
        header {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            .user-info {
                display: flex;
                flex-direction: column;

                h1 {
                    color: ${props => props.theme.colors.text};
                }

                strong {
                    color: ${props => props.theme.colors.blueWhite};
                    margin-left: 0.5rem;
                }

                button {
                    font-weight: 600;
                    border-radius: 8px;
                    border: 0;
                    background: ${props => props.theme.colors.red};
                    color: #fff;
                    display: flex;
                    justify-content: center;
                    flex-direction: row;
                    align-items: center;
                    padding: 0.875rem;
                    transition: filter 0.2s;

                    &:hover {
                        filter: brightness(0.95);
                    }
                }
            }
    
            h2 {
                color: ${props => props.theme.colors.textTitle};
                font-size: 2.25rem;
            }       

            .input-group {
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
    
    

    .tasksInfo {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 2rem;

            div {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                font-weight: 700;
                font-size: 14px;
                line-height: 17px;
            }

            span {
                color: ${props => props.theme.colors.text};
                padding: .2rem .8rem;
                background: ${props => props.theme.colors.green};
                border-radius: 999px;
                font-size: 12px;
            }

            p {
                color: ${props => props.theme.colors.text};
            }

            .createdTasksCount {
                color: ${props => props.theme.colors.text};
            }

            .doneTasksCount {
                color: ${props => props.theme.colors.text};
            }
        }

        main {
            margin-top: 3rem;

            ul {
                list-style: none;
  
                li {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid #EBEBEB;
                    padding: 1rem 0;

                    div {
                        display: flex;
                        align-items: center;
                        gap: 0.875rem;
                        outline: 0;

                        p {
                            font-size: 1rem;
                            color: ${props => props.theme.colors.text};
                        }

                        &.completed {
                            p {
                            text-decoration:line-through;
                            opacity: 0.6;
                            }
                        }

                        .checkbox-container {
                            display: block;
                            position: relative;
                            padding-left: 0.875rem;
                            margin-bottom: 1.125rem;
          
                            input {
                                position: absolute;
                                opacity: 0;
                                cursor: pointer;
                                height: 0;
                                width: 0;

                                &:checked {
                                    & ~ .checkmark {
                                        background-color: ${props => props.theme.colors.blue};
                                    }

                                    & ~ .checkmark:after {
                                        display: block;
                                    }
                                } 
                            }
          
                            .checkmark {
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 1rem;
                                height: 1rem;
                                background-color: ${props => props.theme.colors.background};
                                border-radius: 2px;
                        
                                &:after {
                                    content: "";
                                    position: absolute;
                                    display: none;
                                    left: 6px;
                                    top: 3px;
                                    width: 3px;
                                    height: 6px;
                                    border: solid white;
                                    border-width: 0 2px 2px 0;
                                    transform: rotate(45deg);
                                }
                            }
                        }
                    }

                    button {
                        background: transparent;
                        border: 0;

                        svg {
                            color: ${props => props.theme.colors.red};
                        }

                        &:hover {
                            svg {
                                filter: brightness(0.5)
                            }
                        }
                    }
                }
            } 
        }
    }

    @media (max-width: 575px) {
        section.task-list {
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

            .input-group {
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
    
    

    .tasksInfo {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            margin-top: 2rem;

            div {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                font-weight: 700;
                font-size: 14px;
                line-height: 17px;
            }

            span {
                color: ${props => props.theme.colors.text};
                padding: .2rem .8rem;
                background: ${props => props.theme.colors.green};
                border-radius: 999px;
                font-size: 12px;
            }

            p {
                color: ${props => props.theme.colors.text};
            }

            .createdTasksCount {
                color: ${props => props.theme.colors.text};
                margin-bottom: 0.5rem;
            }

            .doneTasksCount {
                color: ${props => props.theme.colors.text};
                margin-bottom: 0.5rem;
            }
        }

        main {
            margin-top: 3rem;

            ul {
                list-style: none;
  
                li {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid #EBEBEB;
                    padding: 1rem 0;

                    div {
                        display: flex;
                        align-items: center;
                        gap: 0.875rem;
                        outline: 0;

                        p {
                            font-size: 1rem;
                            color: ${props => props.theme.colors.text};
                        }

                        &.completed {
                            p {
                            text-decoration:line-through;
                            opacity: 0.6;
                            }
                        }

                        .checkbox-container {
                            display: block;
                            position: relative;
                            padding-left: 0.875rem;
                            margin-bottom: 1.125rem;
          
                            input {
                                position: absolute;
                                opacity: 0;
                                cursor: pointer;
                                height: 0;
                                width: 0;

                                &:checked {
                                    & ~ .checkmark {
                                        background-color: ${props => props.theme.colors.blue};
                                    }

                                    & ~ .checkmark:after {
                                        display: block;
                                    }
                                } 
                            }
          
                            .checkmark {
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 1rem;
                                height: 1rem;
                                background-color: ${props => props.theme.colors.background};
                                border-radius: 2px;
                        
                                &:after {
                                    content: "";
                                    position: absolute;
                                    display: none;
                                    left: 6px;
                                    top: 3px;
                                    width: 3px;
                                    height: 6px;
                                    border: solid white;
                                    border-width: 0 2px 2px 0;
                                    transform: rotate(45deg);
                                }
                            }
                        }
                    }

                    button {
                        background: transparent;
                        border: 0;

                        svg {
                            color: ${props => props.theme.colors.red};
                        }

                        &:hover {
                            svg {
                                filter: brightness(0.5)
                            }
                        }
                    }
                }
            } 
        }
    }
    }  
`;