"use strict";

import { changeTheme } from "../../../Common/Theme/ThemeJS/changeTheme.js";
import { settings } from "../../../Common/LevelsSettings/settings.js";
import { addModal } from "../../../Common/Modal/modal.js";
import { createTimer } from "../../../Common/Timer/createTimer.js";

import { lamp } from "./lamp.js";

const timer = createTimer(settings.Levels.Level_1.Time);

addModal(settings.Levels.Level_1, timer);
lamp(settings.Levels.Level_1, timer);

changeTheme();
