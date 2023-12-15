import { Color } from 'three';
import { STAGE_BANNERS } from 'sprites';
import GameConfig from './GameConfig.js';

const WORDS = [
    [
        'cat',
        'sun',
        'apple',
        'hope',
        'was',
        'beach',
        'chair',
        'dog',
        'elf',
        'lover',
        'fox',
        'igloo',
        'pixel',
        'color',
        'giraffe',
        'ray',
        'kind',
        'lizard',
        'muffin',
        'nap',
        'ostrich',
        'pillow',
        'queen',
        'rizz',
        'star',
        'tea',
        'unite',
        'zen',
        'lace',
        'pool',
    ],
    [
        'cat',
        'sun',
        'apple',
        'hope',
        'was',
        'beach',
        'chair',
        'dog',
        'elf',
        'lover',
        'fox',
        'igloo',
        'pixel',
        'color',
        'giraffe',
        'ray',
        'kind',
        'lizard',
        'muffin',
        'nap',
        'ostrich',
        'pillow',
        'queen',
        'rizz',
        'star',
        'tea',
        'unite',
        'zen',
        'lace',
        'pool',
        'blubber',
        'chicken',
        'really',
        'joy',
        'katie',
        'andrew',
        'genie',
        'purple',
        'banana',
        'happy',
        'guitar',
        'basket',
        'butter',
        'planet',
        'silver',
        'laptop',
        'monkey',
        'orange',
        'dragon',
        'turtle',
        'whisper',
        'kangaroo',
        'sparkle',
        'render',
        'shader',
        'gradient',
        'palette',
        'animation',
        'resolution',
        'opacity',
    ],
    [
        'cat',
        'sun',
        'apple',
        'hope',
        'was',
        'beach',
        'chair',
        'dog',
        'elf',
        'lover',
        'fox',
        'igloo',
        'pixel',
        'color',
        'giraffe',
        'ray',
        'kind',
        'lizard',
        'muffin',
        'nap',
        'ostrich',
        'pillow',
        'queen',
        'rizz',
        'star',
        'tea',
        'unite',
        'zen',
        'lace',
        'pool',
        'blubber',
        'chicken',
        'really',
        'joy',
        'katie',
        'andrew',
        'genie',
        'purple',
        'banana',
        'happy',
        'guitar',
        'basket',
        'butter',
        'planet',
        'silver',
        'laptop',
        'monkey',
        'orange',
        'dragon',
        'turtle',
        'whisper',
        'kangaroo',
        'sparkle',
        'render',
        'shader',
        'gradient',
        'palette',
        'animation',
        'resolution',
        'opacity',
        'refraction',
        'reflection',
        'rasterization',
        'polygon',
        'ambient',
        'diffuse',
        'specular',
        'mapping',
        'blending',
        'shadow',
        'lighting',
        'saturation',
        'brightness',
        'waterfall',
        'renaissance',
        'nostalgia',
        'princeton',
        'metamorphosis',
        'astronomy',
        'treasure',
        'rainbow',
        'disappear',
        'encyclopedia',
        'boulevard',
        'gratitude',
        'hemisphere',
        'juxtapose',
        'silhouette',
        'entrepreneur',
        'luminosity',
    ],
];

export const STAGE_CONFIGS = [
    new GameConfig(
        3,
        WORDS[0],
        [2, 3],
        [5, 6],
        new Color(0x7ec0ee),
        100,
        STAGE_BANNERS[0]
    ),
    new GameConfig(
        3,
        WORDS[1],
        [1, 2],
        [4.5, 5.5],
        new Color(0xaec077),
        150,
        STAGE_BANNERS[1]
    ),
    new GameConfig(
        3,
        WORDS[2],
        [0.5, 1.5],
        [4, 5],
        new Color(0xee7777),
        250,
        STAGE_BANNERS[2]
    ),
];
