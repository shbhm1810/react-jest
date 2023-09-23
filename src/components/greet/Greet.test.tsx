import { render,screen } from '@testing-library/react';
import React from 'react';
import Greet from './Greet';

describe('Greet',() => {

    it('renders correctly',() => {
        render(<Greet/>)
        const textElement = screen.getByText('Hello')
        expect(textElement).toBeInTheDocument()
    })
    it('renders with a name',() => {
        render(<Greet name={'vishwas'}/>)
        const textElement = screen.getByText('Hello vishwas')
        expect(textElement).toBeInTheDocument()
    })

})



