import { Howl } from 'howler';
import rawSounds from './sounds/*.mp3';


function MakeHowl(sound)
{
    const newHowl = new Howl(
        {
            src: [sound],
        }
    );

    return newHowl;
}


const keySounds = 
{
    f:     MakeHowl(rawSounds.f),
    gflat: MakeHowl(rawSounds.gflat),
    g:     MakeHowl(rawSounds.g),
    aflat: MakeHowl(rawSounds.aflat),
    a:     MakeHowl(rawSounds.a),
    bflat: MakeHowl(rawSounds.bflat),
    b:     MakeHowl(rawSounds.b),
    c:     MakeHowl(rawSounds.c),
    dflat: MakeHowl(rawSounds.dflat),
    d:     MakeHowl(rawSounds.d),
    eflat: MakeHowl(rawSounds.eflat),
    e:     MakeHowl(rawSounds.e),
}

export default keySounds;