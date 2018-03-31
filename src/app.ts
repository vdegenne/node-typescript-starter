#!/usr/bin/env node

import { Element, craftWaterPlease } from './universe-mastering';

let water: Element = craftWaterPlease();

console.log("Here's your water sir.");
console.log(water);