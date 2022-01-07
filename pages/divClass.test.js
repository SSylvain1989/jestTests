import Footer from '../components/footer/footer'
import { render, screen, container } from '@testing-library/react'

describe('Footer', () => {
    it('Should render div with class wrapperFormClass', () => {
        const view = render(<Footer />)
        // eslint-disable-next-line testing-library/no-container
        const div = view.container.querySelector('#maDiv')
        expect(div).toHaveClass('myDiv')

    })
})