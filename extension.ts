//% weight=94 color=#EC7505 icon="\uf1b3"
namespace mcext {

// hidden from user, used by other functions
    //% block
    function completeTask() {
        if (!taskIsComplete) {
            mobs.execute(
                mobs.target(TargetSelectorKind.NearestPlayer),
                positions.create(0, 0, 0),
                "scoreboard players set @s task2success 1"
            )
            taskIsComplete = true
        }
    }

    /**
     * Opens a gate
     */
    //% block="say hi"
    //% weight=90
    export function sayhi() {
        mobs.execute(
            mobs.target(TargetSelectorKind.NearestPlayer),
            positions.create(0, 0, 0),
            "say hi"
        
        )
    }





}



