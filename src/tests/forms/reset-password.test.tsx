import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { render } from 'tests/wrapper';

import ResetPassword from 'features/auth/forgot-password/reset-password';

describe('Password reset form tests', () => {
  it('should render the component', () => {
    render(<ResetPassword />,
      {
        route: "/reset-password/token",
        path: "/reset-password/:token"
      }
    );

    expect(screen.getByTestId("password")).toBeInTheDocument();
    expect(screen.getByTestId("repeatPassword")).toBeInTheDocument();
    expect(screen.getByRole('button', {
      name: /reset/i
    })).toBeInTheDocument();
  });
});
