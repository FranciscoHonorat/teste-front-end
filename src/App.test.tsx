import { render, screen } from '@testing-library/react'
import { afterEach, describe, it, expect, vi } from 'vitest'
import App from './App'

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('App', () => {
  it('mostra a vitrine com os produtos do JSON', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(
        async () =>
          new Response(
            JSON.stringify({
              success: true,
              products: [{ productName: 'Iphone 11', descriptionShort: 'Iphone 11', photo: 'foto.png', price: 15000 }],
            }),
          ),
      ),
    )

    render(<App />)

    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(await screen.findAllByRole('heading', { level: 3, name: 'Iphone 11' })).not.toHaveLength(0)
  })
})
