import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WfirstFlexGrow from './WfirstFlexGrow';

describe('<WfirstFlexGrow />', () => {
  test('it should mount', () => {
    render(<WfirstFlexGrow />);
    
    const wfirstFlexGrow = screen.getByTestId('WfirstFlexGrow');

    expect(wfirstFlexGrow).toBeInTheDocument();
  });
});