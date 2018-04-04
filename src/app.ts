#!/usr/bin/env node

import {Element, craftWaterPlease} from './universe-mastering';

const water: Element = craftWaterPlease();

console.log('Here\'s your water sir.');
console.log(water);
