import styled from 'styled-components'

export const FooterCon = styled.footer`
    padding-top: 100px;
    background: #000;
    
    max-width:100%;
    max-height:100%;
    padding: rem 30rem;
    color: #737373;
`

export const FooterList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 1.5rem 0;

    ul {
        list-style: none;

        li {
            margin: 1rem 0;

            a {
                font-size: 0.9rem;
                color: #737373;
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`
