import { Component, OnInit } from '@angular/core';

import { Insetto } from './insect.model';

@Component({
  selector: 'app-insetti',
  templateUrl: './insetti.component.html',
  styleUrls: ['./insetti.component.css']
})
export class InsettiComponent implements OnInit {

  name: string;

  insetti: Insetto[] = [

    // tslint:disable-next-line: max-line-length
    new Insetto('Common butterfly', 'Flying', '160', 'https://vignette.wikia.nocookie.net/animalcrossing/images/3/3a/NH-Icon-commonbutterfly.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Yellow butterfly', 'Flying', '160', 'https://vignette.wikia.nocookie.net/animalcrossing/images/f/fa/NH-Icon-yellowbutterfly.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Tiger butterfly', 'Flying', '240', 'https://vignette.wikia.nocookie.net/animalcrossing/images/6/65/NH-Icon-tigerbutterfly.png/revision/latest/scale-to-width-down/64?cb=20200401005429'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Peacock butterfly', 'Flying', '2500', 'https://vignette.wikia.nocookie.net/animalcrossing/images/8/8f/NH-Icon-peacockbutterfly.png/revision/latest/scale-to-width-down/64?cb=20200401005429'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Common bluebottle', 'Flying', '300', 'https://vignette.wikia.nocookie.net/animalcrossing/images/5/5e/NH-Icon-commonbluebottle.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Paper kite butterfly', 'Flying', '1000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/d/dd/NH-Icon-paperkitebutterfly.png/revision/latest/scale-to-width-down/64?cb=20200401005429'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Great purple emperor', 'Flying', '3000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/2/27/NH-Icon-greatpurpleemperor.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Monarch butterfly', 'Flying', '140', 'https://vignette.wikia.nocookie.net/animalcrossing/images/9/99/NH-Icon-monarchbutterfly.png/revision/latest/scale-to-width-down/64?cb=20200401005429'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Emperor butterfly', 'Flying', '4000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/5/5e/NH-Icon-emperorbutterfly.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Agrias butterfly', 'Flying', '3000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/d/dc/NH-Icon-agriasbutterfly.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Rajah Brookes birdwing', 'Flying', '2500', 'https://vignette.wikia.nocookie.net/animalcrossing/images/e/e2/NH-Icon-rajahbrookesbirdwing.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Queen Alexandra s birdwing', 'Flying', '4000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/b/b8/NH-Icon-queenalexandrasbirdwing.png/revision/latest/scale-to-width-down/64?cb=20200401005429'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Moth', 'Flying', '130', 'https://vignette.wikia.nocookie.net/animalcrossing/images/1/12/NH-Icon-moth.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Atlas Moth', 'Flying', '3000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/6/6a/NH-Icon-atlasmoth.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Magagascan sunset moth', 'Flying', '2500', 'https://vignette.wikia.nocookie.net/animalcrossing/images/7/7d/NH-Icon-madagascansunsetmoth.png/revision/latest/scale-to-width-down/64?cb=20200401005429'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Long locust', 'Ground', '200', 'https://vignette.wikia.nocookie.net/animalcrossing/images/e/ef/NH-Icon-longlocust.png/revision/latest/scale-to-width-down/64?cb=20200401005429'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Migratory locust', 'Ground', '600', 'https://vignette.wikia.nocookie.net/animalcrossing/images/e/e4/NH-Icon-migratorylocust.png/revision/latest/scale-to-width-down/64?cb=20200401005429'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Rice grasshopper', 'Ground', '160', 'https://vignette.wikia.nocookie.net/animalcrossing/images/d/d3/NH-Icon-ricegrasshopper.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Grasshopper', 'Ground', '160', 'https://vignette.wikia.nocookie.net/animalcrossing/images/5/56/NH-Icon-grasshopper.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Cricket', 'Ground', '130', 'https://vignette.wikia.nocookie.net/animalcrossing/images/7/7a/NH-Icon-cricket.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Bell cricket', 'Ground', '430', 'https://vignette.wikia.nocookie.net/animalcrossing/images/9/99/NH-Icon-bellcricket.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Mantis', 'Ground', '430', 'https://vignette.wikia.nocookie.net/animalcrossing/images/0/00/NH-Icon-mantis.png/revision/latest/scale-to-width-down/64?cb=20200401005429'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Orchid mantis', 'Ground', '2400', 'https://vignette.wikia.nocookie.net/animalcrossing/images/9/9e/NH-Icon-orchidmantis.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Honeybee', 'Flying', '200', 'https://vignette.wikia.nocookie.net/animalcrossing/images/2/26/NH-Icon-honeybee.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Wasp', 'Trees', '2500', 'https://vignette.wikia.nocookie.net/animalcrossing/images/9/9e/NH-Icon-wasp.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Brown cicada', 'Trees', '250', 'https://vignette.wikia.nocookie.net/animalcrossing/images/a/ab/NH-Icon-browncicada.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Robust cicada', 'Trees', '300', 'https://vignette.wikia.nocookie.net/animalcrossing/images/2/2f/NH-Icon-robustcicada.png/revision/latest/scale-to-width-down/64?cb=20200401005429'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Giant cicada', 'Trees', '500', 'https://vignette.wikia.nocookie.net/animalcrossing/images/5/58/NH-Icon-giantcicada.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Walker cicada', 'Trees', '400', 'https://vignette.wikia.nocookie.net/animalcrossing/images/e/ec/NH-Icon-walkercicada.png/revision/latest/scale-to-width-down/64?cb=20200401005429'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Evening cicada', 'Trees', '550', 'https://vignette.wikia.nocookie.net/animalcrossing/images/1/16/NH-Icon-eveningcicada.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Cicada shell', 'Trees', '10', 'https://vignette.wikia.nocookie.net/animalcrossing/images/9/97/NH-Icon-cicadashell.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Red dragonfly', 'Flying', '180', 'https://vignette.wikia.nocookie.net/animalcrossing/images/e/eb/NH-Icon-reddragonfly.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Darner dragonfly', 'Flying', '230', 'https://vignette.wikia.nocookie.net/animalcrossing/images/7/70/NH-Icon-darnerdragonfly.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Banded dragonfly', 'Flying', '4500', 'https://vignette.wikia.nocookie.net/animalcrossing/images/6/64/NH-Icon-bandeddragonfly.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Damselfly', 'Flying', '500', 'https://vignette.wikia.nocookie.net/animalcrossing/images/1/16/NH-Icon-damselfly.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Firefly', 'Flying', '300', 'https://vignette.wikia.nocookie.net/animalcrossing/images/a/ae/NH-Icon-firefly.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Mole cricket', 'Underground', '500', 'https://vignette.wikia.nocookie.net/animalcrossing/images/0/00/NH-Icon-molecricket.png/revision/latest/scale-to-width-down/64?cb=20200401005429'),

        // tslint:disable-next-line: max-line-length
    new Insetto('Pondskater', 'Pond/Rivers', '130', 'https://vignette.wikia.nocookie.net/animalcrossing/images/f/f4/NH-Icon-pondskater.png/revision/latest/scale-to-width-down/64?cb=20200401005429'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Diving beetle', 'Pond/Rivers', '800', 'https://vignette.wikia.nocookie.net/animalcrossing/images/c/c5/NH-Icon-divingbeetle.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

        // tslint:disable-next-line: max-line-length
    new Insetto('Giant water bug', 'Pond/Rivers', '2000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/5/55/NH-Icon-giantwaterbug.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Stinkbug', 'Flowers', '120', 'https://vignette.wikia.nocookie.net/animalcrossing/images/8/80/NH-Icon-stinkbug.png/revision/latest/scale-to-width-down/64?cb=20200401005429'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Man-faced stinkbug', 'Flowers', '1000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/c/c7/NH-Icon-manfacedstinkbug.png/revision/latest/scale-to-width-down/64?cb=20200401005429'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Ladybug', 'Flowers', '200', 'https://vignette.wikia.nocookie.net/animalcrossing/images/1/18/NH-Icon-ladybug.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Tiger beetle', 'Ground', '1500', 'https://vignette.wikia.nocookie.net/animalcrossing/images/e/e3/NH-Icon-tigerbeetle.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Jewel beetle', 'Tree stumps', '2400', 'https://vignette.wikia.nocookie.net/animalcrossing/images/8/82/NH-Icon-jewelbeetle.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Violin beetle', 'Tree stumps', '450', 'https://vignette.wikia.nocookie.net/animalcrossing/images/6/6a/NH-Icon-violinbeetle.png/revision/latest/scale-to-width-down/64?cb=20200401005429'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Citrus long-horned beetle', 'Tree stumps', '350', 'https://vignette.wikia.nocookie.net/animalcrossing/images/8/8f/NH-Icon-citruslonghornedbeetle.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Rosalia batesi beetle', 'Tree stumps', '3000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/e/e0/NH-Icon-rosaliabatesibeetle.png/revision/latest/scale-to-width-down/64?cb=20200401005429'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Blue weevil beetle', 'Trees', '800', 'https://vignette.wikia.nocookie.net/animalcrossing/images/f/f5/NH-Icon-blueweevilbeetle.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Dung beetle', 'Ground', '3000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/c/c0/NH-Icon-dungbeetle.png/revision/latest/scale-to-width-down/64?cb=20200401005431'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Earth-boring dung beetle', 'Ground', '300', 'https://vignette.wikia.nocookie.net/animalcrossing/images/0/0c/NH-Icon-earthboringdungbeetle.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Scarab beetle', 'Trees', '10000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/4/4c/NH-Icon-scarabbeetle.png/revision/latest/scale-to-width-down/64?cb=20200401005429'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Drone beetle', 'Trees', '200', 'https://vignette.wikia.nocookie.net/animalcrossing/images/9/99/NH-Icon-dronebeetle.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Goliath beetle', 'Trees', '8000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/5/5b/NH-Icon-goliathbeetle.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Saw stag', 'Trees', '2000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/4/48/NH-Icon-sawstag.png/revision/latest/scale-to-width-down/64?cb=20200401005429'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Miyama stag', 'Trees', '1000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/1/1b/NH-Icon-miyamastag.png/revision/latest/scale-to-width-down/64?cb=20200401005429'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Giant stag', 'Trees', '10000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/2/25/NH-Icon-giantstag.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Rainbow stag', 'Trees', '6000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/1/1c/NH-Icon-rainbowstag.png/revision/latest/scale-to-width-down/64?cb=20200401005429'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Cyclommatus stag', 'Trees', '8000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/1/17/NH-Icon-cyclommatusstag.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Golden stag', 'Trees(coconut)', '12000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/8/82/NH-Icon-goldenstag.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Giraffe stag', 'Trees(coconut)', '12000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/7/7c/NH-Icon-giraffestag.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Horned dynastid', 'Trees', '1350', 'https://vignette.wikia.nocookie.net/animalcrossing/images/e/ef/NH-Icon-horneddynastid.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Horned atlas', 'Trees(coconut)', '8000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/1/12/NH-Icon-hornedatlas.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Horned elephant', 'Trees(coconut)', '8000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/4/4f/NH-Icon-hornedelephant.png/revision/latest/scale-to-width-down/64?cb=20200401005429'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Horned hercules', 'Trees(coconut)', '12000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/c/c2/NH-Icon-hornedhercules.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Walking stick', 'Trees', '600', 'https://vignette.wikia.nocookie.net/animalcrossing/images/6/62/NH-Icon-walkingstick.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Walking leaf', 'Trees(leaf disguise)', '600', 'https://vignette.wikia.nocookie.net/animalcrossing/images/c/cb/NH-Icon-walkingleaf.png/revision/latest/scale-to-width-down/64?cb=20200401005429'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Bagworm', 'Trees(shaking)', '600', 'https://vignette.wikia.nocookie.net/animalcrossing/images/8/81/NH-Icon-bagworm.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Ant', 'Rotten food', '80', 'https://vignette.wikia.nocookie.net/animalcrossing/images/4/45/NH-Icon-ant.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Hermit crab', 'Beach(shell disguise)', '1000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/7/7f/NH-Icon-hermitcrab.png/revision/latest/scale-to-width-down/64?cb=20200401005430'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Wharf roach', 'Beach rocks', '200', 'https://vignette.wikia.nocookie.net/animalcrossing/images/5/5d/NH-Icon-wharfroach.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Fly', 'Trash', '60', 'https://vignette.wikia.nocookie.net/animalcrossing/images/4/4f/NH-Icon-fly.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Mosquito', 'Flying', '130', 'https://vignette.wikia.nocookie.net/animalcrossing/images/c/c0/NH-Icon-mosquito.png/revision/latest/scale-to-width-down/64?cb=20200401005429'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Flea', 'Villager head', '70', 'https://vignette.wikia.nocookie.net/animalcrossing/images/9/92/NH-Icon-flea.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Snail', 'Rocks(rain)', '250', 'https://vignette.wikia.nocookie.net/animalcrossing/images/b/b1/NH-Icon-snail.png/revision/latest/scale-to-width-down/64?cb=20200401005429'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Pill bug', 'Rocks(hit)', '250', 'https://vignette.wikia.nocookie.net/animalcrossing/images/c/c5/NH-Icon-pillbug.png/revision/latest/scale-to-width-down/64?cb=20200401005428'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Centipede', 'Rocks(hit)', '300', 'https://vignette.wikia.nocookie.net/animalcrossing/images/3/30/NH-Icon-centipede.png/revision/latest/scale-to-width-down/64?cb=20200401005429'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Spider', 'Trees(shaking)', '600', 'https://vignette.wikia.nocookie.net/animalcrossing/images/2/26/NH-Icon-spider.png/revision/latest/scale-to-width-down/64?cb=20200401005429'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Tarantula', 'Ground', '8000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/0/0a/NH-Icon-tarantula.png/revision/latest/scale-to-width-down/64?cb=20200401005429'),

    // tslint:disable-next-line: max-line-length
    new Insetto('Scorpion', 'Ground', '8000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/3/34/NH-Icon-scorpion.png/revision/latest/scale-to-width-down/64?cb=20200401005429'),

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
