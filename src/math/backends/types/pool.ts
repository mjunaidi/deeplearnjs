/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

import {Conv2DInfo} from '../../conv_util';
import {Array4D} from '../../ndarray';
import {KernelNode} from '../tape_types';

// Pool
export interface PoolNode extends KernelNode {
  inputAndArgs: {inputs: {x: Array4D;}; args: {convInfo: Conv2DInfo;};};
  output: Array4D;
  gradient: (dy: Array4D, y: Array4D) => {
    x: () => Array4D;
  };
}

// PoolBackprop
export interface PoolBackpropNode extends KernelNode {
  inputAndArgs:
      {inputs: {dy: Array4D; x: Array4D;}; args: {convInfo: Conv2DInfo;};};
  output: Array4D;
  gradient: (dy: Array4D, y: Array4D) => {
    dy: () => Array4D;
    x: () => Array4D;
  };
}
