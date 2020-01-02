//% weight=94 color=#EC7505 icon="\uf1b3"
namespace mcext {


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



