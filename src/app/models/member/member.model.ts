/**
 * Represents a Member object.
 */
export interface IMember {

    //#region Properties
    /**
     * Gets/sets the first/given name of the member.
     */
    firstName?: string;

    /**
     * Gets/sets the last name/surname of the member.
     */
    lastName: string;

    /**
     * Gets/sets the job title of the member.
     */
    jobTitle: string;

    /**
     * Gets/sets the team name of the member.
     */
    team: string;

    /**
     * Gets/sets the status of the member.
     */
    status: string;
    //#endregion
}

// TODO:  See if we can get away with just the interface of Member instead of creating a matching Type.
// export class Member implements IMember {

//     //#region Properties
//     /**
//      * Gets/sets the first/given name of the member.
//      */
//     public firstName?: string;

//     /**
//      * Gets/sets the last name/surname of the member.
//      */
//     public lastName: string;

//     /**
//      * Gets/sets the job title of the member.
//      */
//     public jobTitle: string;

//     /**
//      * Gets/sets the team name of the member.
//      */
//     public team: string;

//     /**
//      * Gets/sets the status of the member.
//      */
//     public status: string;
//     //#endregion
// }
