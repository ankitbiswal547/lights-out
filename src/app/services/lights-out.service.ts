import { Injectable } from "@angular/core";

export interface userSchema {
    userName: string,
    branch: string
}

@Injectable({
    providedIn: "root"
})

export class LightsOutService {

    currentUser: userSchema  = {
        userName: "Random",
        branch: "Random"
    };

    patternArray = [
        [
            [false, false, false, false, false],
            [false, false, false, false, false],
            [true, false, true, false, true],
            [false, false, false, false, false],
            [false, false, false, false, false]
        ],
        [
            [true, false, true, false, true],
            [true, false, true, false, true],
            [false, false, false, false, false],
            [true, false, true, false, true],
            [true, false, true, false, true]
        ],
        [
            [false, true, false, true, false],
            [true, true, false, true, true],
            [true, true, false, true, true],
            [true, true, false, true, true],
            [false, true, false, true, false]
        ],
        [
            [false, false, false, false, false],
            [true, true, false, true, true],
            [false, false, false, false, false],
            [true, false, false, false, true],
            [true, true, false, true, true]
        ],
        [
            [true, true, true, true, false],
            [true, true, true, false, true],
            [true, true, true, false, true],
            [false, false, false, true, true],
            [true, true, false, true, true]
        ],
        [
            [false, false, false, false, false],
            [false, false, false, false, false],
            [true, false, true, false, true],
            [true, false, true, false, true],
            [false, true, true, true, false]

        ],
        [
            [true, true, true, true, false],
            [true, false, false, false, true],
            [true, false, false, false, true],
            [true, false, false, false, true],
            [true, true, true, true, false]
        ],
        [
            [false, false, false, false, false],
            [false, false, true, false, false],
            [false, true, false, true, false],
            [true, false, true, false, true],
            [false, true, false, true, false]
        ],
        [
            [false, true, false, true, false],
            [true, true, true, true, true],
            [false, true, true, true, false],
            [false, true, false, true, true],
            [true, true, true, false, false]
        ],
        [
            [false, true, true, true, false],
            [false, true, true, true, false],
            [false, true, true, true, false],
            [false, false, false, false, false],
            [false, false, false, false, false]
        ],
        [
            [true, false, true, false, true],
            [true, false, true, false, true],
            [true, false, true, false, true],
            [true, false, true, false, true],
            [false, true, true, true, false]
        ],
        [
            [true, true, true, true, true],
            [false, true, false, true, false],
            [true, true, false, true, true],
            [false, true, true, true, false],
            [false, true, false, true, false]
        ], 
        [
            [false, false, false, true, false],
            [false, false, true, false, true],
            [false, true, false, true, false],
            [true, false, true, false, false],
            [false, true, false, false, false]
        ],
        [
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, true, false, false, false],
            [false, true, false, false, false],
            [false, true, false, false, false]
        ],
        [
            [false, false, false, false, false],
            [false, true, false, false, false],
            [false, false, false, false, false],
            [false, true, false, false, false],
            [false, false, false, false, false]
        ],
        [
            [true, false, false, false ,false],
            [true, false, false, false ,false],
            [true, false, false, false ,false],
            [true, false, false, false ,false],
            [true, true, true, true, true]
        ],
        [
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, true, false, false],
            [false, true, true, true, false],
            [true, true, true, true, true]
        ],
        [
            [false, false, true, false, false],
            [false, true ,false, true, false],
            [true, false, true, false, true],
            [false, true ,false, true, false],
            [false, false, true, false, false]
        ],
        [
            [true, false, true, false, true],
            [false, false, false, false, false],
            [true, false, true, false, true],
            [false, false, false, false, false],
            [true, false, true, false, true]
        ],
        [
            [false, false, false, false, false],
            [false, false, false, false, false],
            [true, false, false, false, true],
            [false, false, false, false, false],
            [false, false, false, false, false]
        ],
        [
            [false, true, true, true, true],
            [false, true, false, false, false],
            [false, true, true, true, false],
            [false, true, false, false, false],
            [false, true, false, false, false]
        ],
        [
            [false, true, true, true, false],
            [true, false, false, false, true],
            [true, false, false, false, true],
            [true, false, false, false, true],
            [false, true, true, true, false]
        ],
        [
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, true, true, true],
            [false, false, true, true, false],
            [false, false, true, false, false]
        ],
        [
            [false, false, false, false, false],
            [false, false, false, false, false],
            [true, false, false, false, true],
            [true, true, true, true, true],
            [false, true, false, false, true]
        ],
        [
            [true, false, false, false, false],
            [true, true, false, false, false],
            [true, true, true, false, false],
            [true, true, true, true, false],
            [false, true, true, true, true]
        ],
        [
            [true, false, false, false, true],
            [true, false, false, false, true],
            [true, true, true, true, true],
            [true, false, false, false, true],
            [true, false, false, false, true]
        ],
        [
            [false, false, true, false, false],
            [false, true, true, true, false],
            [false, false, true, false, false],
            [false, false, true, false, false],
            [false, false, true, false, false]
        ],
        [
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, true, true, true],
            [false, false, true, true, true],
            [false, false, true, true, true]
        ],
        [
            [false, false, false, false, false],
            [false, true, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false]
        ],
        [
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, true, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false]
        ],
        [
            [true, false, false, false, true],
            [true, true, false, false, true],
            [true, false, true, false, true],
            [true, false, false, true, true],
            [true, false, false, false, true]
        ],
        [
            [true, true, true, true, true],
            [false, false, false, true, false],
            [false, false, true, false, false],
            [false, true, false, false, false],
            [true, true, true, true, true]
        ],
        [
            [false, false, false, true, false],
            [false, false, false, true, false],
            [true, false, true, false, true],
            [true, false, false, false, true],
            [true, false, false, true, true]
        ],
        [
            [false, false, true, false, true],
            [true, false, false, false, true],
            [true, false, false, false, true],
            [false, true, true, false, true],
            [false, true, true, true, true]
        ],
        [
            [false, false, false, true, true],
            [false, true, false, true, false],
            [true, false, false ,false, true],
            [true, false, true, false, true],
            [false, false, false, false, false]
        ],
        [
            [false, false, true, false, false],
            [false, true, false, true, false],
            [true, false, false ,false, true],
            [true, true, true, true, true],
            [true, false, false, false, true]
        ],
        [
            [false, false, false, false, false],
            [false, true, true, true, false],
            [false, true, true, true, false],
            [false, true, true, true, false],
            [false, false, false, false, false]
        ],
        [
            [true, false, true, false, true],
            [false, true, false, true, false],
            [true, false, true, false, true],
            [false, true, false, true, false],
            [true, false, true, false, true]
        ],
        [
            [false, true, false, true, false],
            [true, false, false, false, false],
            [true, true, false, false, false],
            [false, false, true, true, false],
            [false, true, false, true, false]
        ],
        [
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, true, false, true, false],
            [false, false, false, false, false],
            [false, false, false, false, false]
        ],
        [
            [true, false, false, false, true],
            [false, true, false, true, false],
            [false, false, true, false, false],
            [false, false, true, false, false],
            [false, false, true, false, false]
        ],
        [
            [true, true, true, false, false],
            [true, false, false, true, false],
            [true, true, true, false, false],
            [true, false, false, true, false],
            [true, true, true, false, false]
        ],
        [
            [true, false, false, false, true],
            [true, true, false, true, false],
            [true, true, true, false, false],
            [false, true, false, false, false],
            [false, true, true, true, false]
        ],
        [
            [false, false, false, false, false],
            [true, true, false, true, true],
            [true, true, true, true, true],
            [false, false, true, false, false],
            [false, true, true, true, false]
        ],
        [
            [false, true, true, true, false],
            [true, false, true, false, false],
            [false, false, true, true, true],
            [true, true, true, true, false],
            [true, false, true, false, true]
        ],
        [
            [false, false, true, false, false],
            [false, true, true, true, false],
            [true, true, true, true, true],
            [false, true, true, true, false],
            [false, false, true, false, false]
        ],
        [
            [false, false, true, false, false],
            [true, true, true, true, true],
            [true, false, true, false, false],
            [false, true, false, false, true],
            [false, false, false, false, true]
        ],
        [
            [false, false, false, false, false],
            [true, false, false, false, true],
            [false, false, true, false, false],
            [true, false, false, false, true],
            [false, false, false, false, false]
        ],
        [
            [true, false, false, false, true],
            [false, true, false, true, false],
            [false, false, true, false, false],
            [false, true, false, true, false],
            [true, false, false, false, true]
        ],
        [
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, true]
        ]
    ]

    constructor() {}
}