"use strict";
import { changeTheme } from "../../../Common/Theme/ThemeJS/changeTheme.js";
import { settings } from "../../../Common/LevelsSettings/settings.js";
import { addModal } from "../../../Common/Modal/modal.js";
import { createTimer } from "../../../Common/Timer/createTimer.js";

import { addDrop } from "./Drag.js";

const timer = createTimer(settings.Levels.Level_3.Time);

addModal(settings.Levels.Level_3, timer);
addDrop(settings.Levels.Level_3, timer);
changeTheme();
