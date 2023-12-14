"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schedules = void 0;
exports.schedules = [
    {
        name: "workday",
        type: "workday",
        dayStart: 1,
        dayEnd: 4,
        time: {
            start: "08:30",
            end: "17:30",
        },
    },
    {
        name: "workday",
        type: "workday",
        dayStart: 5,
        dayEnd: 5,
        time: {
            start: "08:30",
            end: "16:30",
        },
    },
    {
        name: "lunch",
        type: "lunch",
        dayStart: 1,
        dayEnd: 5,
        time: {
            start: "13:00",
            end: "15:00",
        },
    },
    {
        name: "25",
        type: "overtime",
        dayStart: 1,
        dayEnd: 4,
        time: {
            start: "17:30",
            end: "21:00",
        },
    },
    {
        name: "25",
        type: "overtime",
        dayStart: 5,
        dayEnd: 5,
        time: {
            start: "16:30",
            end: "21:00",
        },
    },
    {
        name: "50",
        type: "overtime",
        dayStart: 1,
        dayEnd: 5,
        time: {
            start: "00:00",
            end: "06:00",
        },
    },
    {
        name: "50",
        type: "overtime",
        dayStart: 1,
        dayEnd: 5,
        time: {
            start: "21:00",
            end: "00:00",
        },
    },
    {
        name: "50",
        type: "overtime",
        dayStart: 6,
        dayEnd: 7,
        time: {
            start: "00:00",
            end: "24:00",
        },
    },
];
