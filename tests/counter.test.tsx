import * as React from 'react';
import {render} from '@testing-library/react'

import 'jest-canvas-mock'

import {MyCounter} from '../src';

describe('Common render', () => {
    it('render without crashing', ()=>{
        render(<MyCounter/>)
    })
})