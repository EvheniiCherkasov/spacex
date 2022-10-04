


class DragonService {

    _apiKey = 'https://api.spacexdata.com/v4/dragons';

    getResource = async (url) => {
        const res = await fetch(this._apiKey);

        if (!res.ok) {
            throw new Error(`Cloud not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    allDragons = async () => {
        const dragons = await this.getResource(this._apiKey);
        return dragons.map(this._transformDragon)
    }

    _transformDragon = (dragon) => {
        return {
            id: dragon.id,
            img: dragon.flickr_images,
            name: dragon.name,
            description: dragon.description,
            wiki: dragon.wikipedia,
            height: dragon.height_w_trunk.meters,
            mass: dragon.dry_mass_kg,
            years: dragon.first_flight,
        }
    }

}

export default DragonService