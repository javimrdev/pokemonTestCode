import { mapPokemonFromApiToVm } from "../pokemon-detail.mapper";
import { PokemonEntity } from "pods/pokemon-detail/pokemon-detail.vm";
import { getPokemonByName } from "./pokemon-detail.api"

describe('testing api', () => {
    it('call', async () => {
        const result = await getPokemonByName('charizard');
        const obj: PokemonEntity = mapPokemonFromApiToVm(result);
        console.log(obj);
    })
})