import * as assert from 'assert';

import {Element, craftWaterPlease} from '../universe-mastering';

suite('Atom:', () => {
  test('this will give me some water', () => {
    const water: Element = craftWaterPlease();
    assert(water.name, 'water');
  });
});
