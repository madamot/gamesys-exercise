import React from 'react';
import { render, cleanup, waitFor, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import App from '../App';

const data = [
  {
    "offer": {
      "title": "Get your free £10 now",
      "background": {
        "backgroundOneX": "/background_scale_1x.jpeg",
        "backgroundTwoX": "/background_scale_2x.jpeg"
      },
      "header": {
        "headerOneX": "/top_image_scale_1x.png",
        "headerTwoX": "/top_image_scale_2x.png"
      },
      "date": "06/15/2021",
      "button": {
        "label": "Opt in",
        "size": "large",
        "url": "https://www.jackpotjoy.com"
      }
    }
  }
]

describe('App states', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({data}),
      })
    );
  });

  // test('Renders fallback when no API fetch is made', () => {
  //   render(<App />);
  //
  //   expect(screen.queryAllByText("00:00:00")).toBeTruthy()
  // });

  test('Renders when an API fetch is made', async () => {

    // jest.spyOn(global, 'fetch').mockResolvedValueOnce({ "data": { "offer": { "title": "Get your free £10 now"}}})
    await act(async () => render(<App />));

    expect(screen.getByTestId("resolved"));

    // const resolved = await waitFor(async () =>
    // screen.getByTestId("resolved"));
  });
});
