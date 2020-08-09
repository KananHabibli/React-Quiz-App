import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    font-family: 'Recursive', sans-serif;
    transition: all 0.25s linear;
  }

  .prequiz-form{
        color: ${({ theme }) => theme.color};
        width: 60%;
        min-width: 40%;
        margin: 80px auto;
        border: ${({ theme }) => theme.quizBorder};
        border-radius: 6px;
        padding: 20px;
    }

    .prequiz-form label,
    .ui.icon.header .icon, 
    .ui.icon.header .content{
        color: ${({ theme }) => theme.color} !important; 
    }

    .submit-button{
        background-color: ${({ theme }) => theme.submitButtonColor} !important;
        color: ${({ theme }) => theme.submitButtonText}; 
        display: block;
        width: 50% !important;
        margin: 0 auto !important;
    }


  .question-box{
    color: ${({ theme }) => theme.color} !important;
    margin-top: 50px;
   }

   .quiz-info{
    color: ${({ theme }) => theme.color} !important;
    margin-bottom: 15px;
   }

   .quiz-question, .ui.checkbox label{
       color: rgb(15, 76, 117) !important;
   }

  .result-box{
    background-color: #0f4c75;
    color: ${({ theme }) => theme.color};
    width: 60%;
    margin: 60px auto;
  }
`