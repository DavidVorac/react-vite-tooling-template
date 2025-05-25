import { styled } from 'styled-components'

// TODO: Edit all TODO's across repo

// TODO: Edit content to your liking
export const App = () => (
  <Page>
    {/* Simple Style reset */}
    <style>
      {`
      * {
        box-sizing: border-box;
      }

       html, body {
        width: 100%;
        margin: 0;
        padding: 0;
       }
      `}
    </style>

    <h1>React Vite Tooling Template</h1>
    <h2>Yarn v4 + Eslint + Prettier + Typescript 4.8.4 + Styled Components</h2>
    <h3>
      Developed by: <a href='https://www.linkedin.com/in/davidvorac'>https://www.linkedin.com/in/davidvorac</a>
    </h3>
  </Page>
)

const Page = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  background-color: #242424;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  color: #ffffffde;
`
