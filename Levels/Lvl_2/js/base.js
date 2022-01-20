"use strict";

import { changeTheme } from "../../../Common/Theme/ThemeJS/changeTheme.js";
import { settings } from "../../../Common/LevelsSettings/settings.js";
import { addModal } from "../../../Common/Modal/modal.js";
import { createTimer } from "../../../Common/Timer/createTimer.js";

import { video } from "./video.js";

const timer = createTimer(settings.Levels.Level_2.Time);

video(settings.Levels.Level_2, timer);

addModal(settings.Levels.Level_2, timer);
changeTheme();
