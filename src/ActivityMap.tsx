import * as BasicCustomMap from '@pcs4kids/basic-custom-map';
import * as React from 'react';

import bearImage from './images/animal-bear.png';
import cheetahImage from './images/animal-cheetah.png';
import giraffeImage from './images/animal-giraffe.png';
import monkeyImage from './images/animal-monkey.png';
import pantherImage from './images/animal-panther.png';
import mapImage from './images/map.png';

class ActivityMap extends React.Component {

    constructor(props: any) {
        super(props);
    }

    public componentDidMount() {
        const descriptionFunction = () => { alert('clicked') }
        const map = {
            title: 'Fun Island',
            imageSource: mapImage,
            coordinateSpace: {
                width: 750,
                height: 500
            },
            pins: [
                {
                    name: 'Giddy Giraffe',
                    description: 'Come along for a great ride with our G!',
                    imageSource: giraffeImage,
                    position: {
                        x: 180,
                        y: 200
                    },
                    dimensions: {
                        width: 50,
                        height: 70
                    },
                    callbackFunction: descriptionFunction
                },
                {
                    name: 'Mischievous Monkey',
                    description: 'Watch out before he steals your wallet!',
                    imageSource: monkeyImage,
                    position: {
                        x: 500,
                        y: 350
                    },
                    dimensions: {
                        width: 50,
                        height: 65
                    },
                    callbackFunction: descriptionFunction
                },
                {
                    name: 'Crafty Cheetah',
                    description: 'Once a Cheetah, always a Cheetah!',
                    imageSource: cheetahImage,
                    position: {
                        x: 300,
                        y: 75
                    },
                    dimensions: {
                        width: 70,
                        height: 50
                    },
                    callbackFunction: descriptionFunction
                },
                {
                    name: 'Pristine Panther',
                    description: 'He\'s got nothing on our boy Pink Panther!',
                    imageSource: pantherImage,
                    position: {
                        x: 500,
                        y: 110
                    },
                    dimensions: {
                        width: 70,
                        height: 50
                    },
                    callbackFunction: descriptionFunction
                },
                {
                    name: 'Baddie Bear',
                    description: 'Big Bad Bear waits for nobody!',
                    imageSource: bearImage,
                    position: {
                        x: 350,
                        y: 275
                    },
                    dimensions: {
                        width: 70,
                        height: 50
                    },
                    callbackFunction: descriptionFunction
                }
            ]
        }
        BasicCustomMap.createMap('activity-map', map);
    }


    public render() {
        return (
            <svg id='activity-map' height='500' width='750' />
        );
    }
}

export default ActivityMap;