import { describe, expect, it } from 'vitest';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { render } from 'tests/wrapper';

import ResetPassword from 'features/auth/forgot-password/reset-password';

describe('Password reset form tests', () => {
  //Load up component with all the providers
  const renderDocument = () => {
    render(<ResetPassword />,
      {
        route: "/auth/forgot-password/token",
        path: "/auth/forgot-password/:token"
      }
    );
  }

  it('should render the component', () => {
    renderDocument();

    const passwordInput = screen.getByPlaceholderText("New password")
    const repeatPasswordInput = screen.getByPlaceholderText("Repeat your password")
    const submitBtn = screen.getByRole('button', { name: /reset/i });

    expect(passwordInput).toBeInTheDocument();
    expect(repeatPasswordInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });

  it('should validate users input', async () => {
    renderDocument();

    const submitBtn = screen.getByRole('button', { name: /reset/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByTestId("password-error")).toBeInTheDocument();
    });
  });

  it('should return error on password missmatch', async () => {
    renderDocument();

    const passwordInput = screen.getByPlaceholderText("New password")
    const repeatPasswordInput = screen.getByPlaceholderText("Repeat your password")
    const submitBtn = screen.getByRole('button', { name: /reset/i });

    fireEvent.change(passwordInput), {
      target: { value: "password123" }
    }
    fireEvent.change(repeatPasswordInput), {
      target: { value: "password1234" }
    }
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByTestId("rpassword-error")).toBeInTheDocument();
    });
  });
})