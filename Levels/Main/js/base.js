"use strict";

import { changeTheme } from "../../../Common/Theme/ThemeJS/changeTheme.js";
import { createLifes } from "../../../Common/Lifes/createLifes.js";
import { addStart } from "./Start.js";

createLifes();
changeTheme();
addStart();
