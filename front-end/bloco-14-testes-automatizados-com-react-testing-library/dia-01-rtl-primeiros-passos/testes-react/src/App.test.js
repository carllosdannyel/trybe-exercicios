import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Tela de inserção de emaul', () => {
  it('Verifica se existe um input de email na tela', () => {
    // Acessar os elementos da tela
    render(<App />);
    const inputEmail = screen.getByLabelText('Email');

    // Fazer os testes
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email');
    expect(inputEmail.type).toBe('email');
  });

  it('Verifica se existem dois botões na tela', () => {
    // Acessar os elementos da tela
    render(<App />);
    const buttons = screen.getAllByRole('button');

    // Fazer os testes
    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveValue('Enviar');
    expect(buttons[0]).toBeInTheDocument();
    expect(buttons[1]).toHaveValue('Voltar');
    expect(buttons[1]).toBeInTheDocument();
  });

  it('Verifica se existe o botão de "Enviar"', () => {
    // Acessar os elementos da tela
    render(<App />);
    const buttonSend = screen.getByTestId('id-send');

    // Fazer os testes
    expect(buttonSend).toBeInTheDocument();
    expect(buttonSend).toHaveProperty('type', 'button');
    expect(buttonSend).toHaveValue('Enviar');
  });

  it('Verifica que, ao digitar o email e clicar em "Enviar", o email é renderizado', () => {
    const EMAIL_USER = 'teste@teste.com'

    // Acessar os elementos da tela
    render(<App />);
    const userEmail = screen.getByTestId('id-email-user');
    expect(userEmail).toBeInTheDocument()
    expect(userEmail).toHaveTextContent('Valor:');
    
    const buttonSend = screen.getByTestId('id-send');
    const inputEmail = screen.getByLabelText('Email');

    // Interagir com os elementos (se for necessário)
    userEvent.type(inputEmail, EMAIL_USER);
    userEvent.click(buttonSend);

    // Fazer os testes
    expect(inputEmail).toHaveValue('');
    expect(userEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
  });
});

// Acessar os elementos da tela

// Interagir com os elementos (se for necessário)

// Fazer os testes
