import { render,screen } from '@testing-library/react';
import React from 'react';
import Greet from './Greet';
test('Greets renders correctly',() => {
    render(<Greet/>)
    const textElement = screen.getByText('Hello')
    expect(textElement).toBeInTheDocument()
})
test('Greets renders with a name',() => {
    render(<Greet name={'vishwas'}/>)
    const textElement = screen.getByText('Hello vishwas')
    expect(textElement).toBeInTheDocument()
})