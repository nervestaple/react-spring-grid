import React from 'react'
import { useMeasureMock } from './mocks'
import { Grid } from '../components/Grid'
import { animated } from 'react-spring'

import { render, cleanup, RenderResult } from 'react-testing-library'
import { wait } from 'dom-testing-library'
import 'jest-dom/extend-expect'
import { ObjectOf } from '../generics'

afterEach(cleanup)

let itemsData = [1, 2, 3, 4, 5, 6].map(x => ({
  value: x,
  width: 50,
  height: 50
}))

async function renderGrid(
  props: ObjectOf<any> = {}
): Promise<[RenderResult, HTMLElement[]]> {
  useMeasureMock.mockReturnValue({ width: 200 })

  const renderResult = render(
    <div style={{ position: 'absolute' }}>
      <Grid
        items={itemsData}
        keys={(item: any) => item.value}
        renderer={({ data, style }) => (
          <animated.div style={style} data-testid="grid-item">
            {data.value}
          </animated.div>
        )}
        wrapper="section"
        data-testid="grid"
        style={{
          width: 200
        }}
        {...props}
      />
    </div>
  )

  let elements: HTMLElement[] = []
  await wait(() => {
    elements = renderResult.getAllByTestId('grid-item')

    if (!elements.length) {
      throw new Error('Failed to render elements')
    }
  })

  return [renderResult, elements]
}

describe('<Grid />', () => {
  let renderResult: RenderResult
  let elements: HTMLElement[]
  beforeEach(async () => {
    ;[renderResult, elements] = await renderGrid()
  })

  test('should render each grid item from the data', () => {
    expect(elements).toHaveLength(itemsData.length)
    elements.forEach((element, index) => {
      expect(element.textContent).toBe(itemsData[index].value.toString())
    })
  })

  test('should render items on separate rows if they exceed the width of the parent', () => {
    expect(elements[0].style.left).toBe('0px')
    expect(elements[1].style.left).toBe('50px')
    expect(elements[2].style.left).toBe('100px')
    expect(elements[3].style.left).toBe('150px')
    elements.slice(0, 4).forEach(el => expect(el.style.top).toBe('0px'))

    expect(elements[4].style.left).toBe('0px')
    expect(elements[5].style.left).toBe('50px')
    elements.slice(4, 6).forEach(el => expect(el.style.top).toBe('50px'))
  })
})

describe('<Grid /> should render items spaced with gaps:', () => {
  let renderResult: RenderResult
  let elements: HTMLElement[]
  beforeEach(async () => {
    ;[renderResult, elements] = await renderGrid({ columnGap: 10, rowGap: 20 })
  })

  test('column gap', () => {
    expect(elements[0].style.left).toBe('0px')
    expect(elements[1].style.left).toBe('60px')
    expect(elements[2].style.left).toBe('120px')
  })

  test('row gap', () => {
    elements.slice(0, 3).forEach(el => expect(el.style.top).toBe('0px'))
    elements.slice(3, 6).forEach(el => expect(el.style.top).toBe('70px'))
  })
})

describe('<Grid /> items should animate on removal and insertion:', () => {
  test.todo('Opacity')
  test.todo('Position')
})
