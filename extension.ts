namespace mcext {


    export function sayhi() {
        mobs.execute(
            mobs.target(TargetSelectorKind.NearestPlayer),
            positions.create(0, 0, 0),
            "say hi"
        
        )
    }





}



s