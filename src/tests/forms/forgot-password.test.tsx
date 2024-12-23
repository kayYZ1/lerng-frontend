import { describe, expect, it } from 'vitest';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { render } from 'tests/wrapper';

import ForgotPassword from 'features/auth/forgot-password/forgot-password';

describe('Forgot password component tests', () => {
  //Load up component with all the providers
  const renderDocument = () => {
    render(<ForgotPassword />, {
      route: '/auth/forgot-password/',
      path: '/auth/forgot-password/',
    });
  };

  it('should render the component', () => {
    renderDocument();

    const emailInput = screen.getByPlaceholderText(
      'Enter your email address',
    );
    const submitBtn = screen.getByRole('button', { name: /Send/i });

    expect(emailInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });

  it('should return error if email not provided', async () => {
    renderDocument();

    const submitBtn = screen.getByRole('button', { name: /Send/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByTestId('email-error')).toBeInTheDocument();
    });
  });
});
