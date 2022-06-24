import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';

  // Acessar os elementos da tela
  render(<ValidEmail email={EMAIL_USER} />);
  const isValid = screen.getByText('Email Válido');
  
  // Fazer os testes
  expect(isValid).toBeInTheDocument();
});

test('Testando se o componente não aparece caso o campo email esteja vazio.', () => {
  // Acessar os elementos da tela
  render(<ValidEmail email="" />);
  const isValidText = screen.queryByTestId('id-is-email-valid');
  
  // Fazer os testes
  expect(isValidText).not.toBeInTheDocument();
});

test('Testando se o componente possui texto verde ao ser digitado um email válido.', () => {
  const EMAIL_USER = 'email@email.com';
  
  // Acessar os elementos da tela
  render(<ValidEmail email={EMAIL_USER} />);
  const isValidText = screen.getByTestId('id-is-email-valid');
  
  // Fazer os testes
  expect(isValidText).toHaveAttribute('class', 'green-text');
});

test('Testando se o componente possui texto vermelho ao ser digitado um email inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  
  // Acessar os elementos da tela
  render(<ValidEmail email={EMAIL_USER} />);
  const isValidText = screen.getByTestId('id-is-email-valid');

  // Fazer os testes
  expect(isValidText).toHaveAttribute('class', 'red-text');
});

// Fazer os testes

// Interagir com os elementos (se for necessário)

// Fazer os testes
