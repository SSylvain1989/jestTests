import Footer from '../components/footer/footer'
import { render, screen, container } from '@testing-library/react'

describe('Footer', () => {
    it('Should render div with class wrapperFormClass', () => {
        render(<Footer />)

        expect(screen.getByRole('form')).toHaveClass('formClass')

    })
})