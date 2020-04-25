import { Component, OnInit } from '@angular/core';

import { Pesce } from './pesce.model';

@Component({
  selector: 'app-pesci',
  templateUrl: './pesci.component.html',
  styleUrls: ['./pesci.component.css']
})
export class PesciComponent implements OnInit {

  name: string;

  pesci: Pesce[] = [
    // tslint:disable-next-line: max-line-length
    new Pesce('Bitterling', 'River', '900', 'https://vignette.wikia.nocookie.net/animalcrossing/images/e/ea/NH-Icon-bitterling.png/revision/latest/scale-to-width-down/64?cb=20200401003128' ),

    // tslint:disable-next-line: max-line-length
    new Pesce('Pale chub', 'River', '200', 'https://vignette.wikia.nocookie.net/animalcrossing/images/2/2c/NH-Icon-palechub.png/revision/latest?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Crucian carp', 'River', '160', 'https://vignette.wikia.nocookie.net/animalcrossing/images/0/03/NH-Icon-cruciancarp.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Dace', 'River', '240', 'https://vignette.wikia.nocookie.net/animalcrossing/images/2/22/NH-Icon-dace.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Carp', 'Pond', '300', 'https://vignette.wikia.nocookie.net/animalcrossing/images/2/2c/NH-Icon-carp.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Koi', 'Pond', '4000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/7/74/NH-Icon-koi.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Goldfish', 'Pond', '1300', 'https://vignette.wikia.nocookie.net/animalcrossing/images/e/ed/NH-Icon-goldfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Pop-eyed-goldfish', 'Pond', '1300', 'https://vignette.wikia.nocookie.net/animalcrossing/images/c/c9/NH-Icon-popeyedgoldfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Ranchu goldfish', 'Pond', '4500', 'https://vignette.wikia.nocookie.net/animalcrossing/images/f/f9/NH-Icon-ranchugoldfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Killifish', 'Pond', '300', 'https://vignette.wikia.nocookie.net/animalcrossing/images/c/c3/NH-Icon-killifish.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Crawfish', 'Pond', '200', 'https://vignette.wikia.nocookie.net/animalcrossing/images/c/cd/NH-Icon-crawfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Soft-shelled-turtle', 'River', '3750', 'https://vignette.wikia.nocookie.net/animalcrossing/images/c/c3/NH-Icon-softshelledturtle.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Snapping Turtle', 'River', '5000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/2/24/NH-Icon-snappingturtle.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Tadpole', 'Pond', '100', 'https://vignette.wikia.nocookie.net/animalcrossing/images/1/1c/NH-Icon-tadpole.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Frog', 'Pond', '120', 'https://vignette.wikia.nocookie.net/animalcrossing/images/6/6b/NH-Icon-frog.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Freshwater goby', 'River', '400', 'https://vignette.wikia.nocookie.net/animalcrossing/images/e/ee/NH-Icon-freshwatergoby.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Loach', 'River', '400', 'https://vignette.wikia.nocookie.net/animalcrossing/images/7/77/NH-Icon-loach.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Catfish', 'Pond', '800', 'https://vignette.wikia.nocookie.net/animalcrossing/images/2/29/NH-Icon-catfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Giant snakehead', 'Pond', '5500', 'https://vignette.wikia.nocookie.net/animalcrossing/images/0/0c/NH-Icon-giantsnakehead.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Bluegill', 'River', '180', 'https://vignette.wikia.nocookie.net/animalcrossing/images/6/69/NH-Icon-bluegill.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Yellow perch', 'River', '300', 'https://vignette.wikia.nocookie.net/animalcrossing/images/1/1d/NH-Icon-yellowperch.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Black bass', 'River', '400', 'https://vignette.wikia.nocookie.net/animalcrossing/images/e/e2/NH-Icon-blackbass.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Tilapia', 'River', '800', 'https://vignette.wikia.nocookie.net/animalcrossing/images/5/53/NH-Icon-tilapia.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Pike', 'River', '1800', 'https://vignette.wikia.nocookie.net/animalcrossing/images/d/dc/NH-Icon-pike.png/revision/latest/scale-to-width-down/64?cb=20200401003130'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Sweetfish', 'River', '900', 'https://vignette.wikia.nocookie.net/animalcrossing/images/4/40/NH-Icon-sweetfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Pond smelt', 'River', '500', 'https://vignette.wikia.nocookie.net/animalcrossing/images/4/41/NH-Icon-pondsmelt.png/revision/latest/scale-to-width-down/64?cb=20200401003130'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Cherry salmon', 'River(Clifftop)', '800', 'https://vignette.wikia.nocookie.net/animalcrossing/images/5/5f/NH-Icon-cherrysalmon.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Char', 'River(Clifftop)', '3800', 'https://vignette.wikia.nocookie.net/animalcrossing/images/1/15/NH-Icon-char.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Golden trout', 'River(Clifftop)', '15000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/5/5c/NH-Icon-goldentrout.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Stringfish', 'River(Clifftop)', '15000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/7/7b/NH-Icon-stringfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Salmon', 'River(Mouth)', '700', 'https://vignette.wikia.nocookie.net/animalcrossing/images/f/fb/NH-Icon-salmon.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('King salmon', 'River(Mouth)', '1800', 'https://vignette.wikia.nocookie.net/animalcrossing/images/f/fd/NH-Icon-kingsalmon.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Mitten crab', 'River', '2000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/e/e3/NH-Icon-mittencrab.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Guppy', 'River', '1300', 'https://vignette.wikia.nocookie.net/animalcrossing/images/6/63/NH-Icon-guppy.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Nibble fish', 'River', '1500', 'https://vignette.wikia.nocookie.net/animalcrossing/images/8/89/NH-Icon-nibblefish.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Angelfish', 'River', '3000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/6/63/NH-Icon-angelfish.png/revision/latest/scale-to-width-down/64?cb=20200401003128'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Betta', 'River', '2500', 'https://vignette.wikia.nocookie.net/animalcrossing/images/7/7c/NH-Icon-betta.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Neon tetra', 'River', '500', 'https://vignette.wikia.nocookie.net/animalcrossing/images/d/da/NH-Icon-neontetra.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Rainbowfish', 'River', '800', 'https://vignette.wikia.nocookie.net/animalcrossing/images/6/68/NH-Icon-rainbowfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Piranha', 'River', '2500', 'https://vignette.wikia.nocookie.net/animalcrossing/images/b/b9/NH-Icon-piranha.png/revision/latest/scale-to-width-down/64?cb=20200401003130'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Arowana', 'River', '10000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/b/bf/NH-Icon-arowana.png/revision/latest/scale-to-width-down/64?cb=20200401003128'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Dorado', 'River', '15000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/d/df/NH-Icon-dorado.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Gar', 'River', '6000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/9/9f/NH-Icon-gar.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Arapaima', 'River', '10000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/7/7f/NH-Icon-arapaima.png/revision/latest/scale-to-width-down/64?cb=20200401003128'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Saddled bichir', 'River', '4000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/a/a0/NH-Icon-saddledbichir.png/revision/latest/scale-to-width-down/64?cb=20200401003130'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Sturgeon', 'River(Mouth)', '10000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/9/98/NH-Icon-sturgeon.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Sea butterfly', 'Sea', '1000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/8/8f/NH-Icon-seabutterfly.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Sea  horse', 'Sea', '1100', 'https://vignette.wikia.nocookie.net/animalcrossing/images/5/55/NH-Icon-seahorse.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Clownfish', 'Sea', '650', 'https://vignette.wikia.nocookie.net/animalcrossing/images/2/2f/NH-Icon-clownfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Surgeonfish', 'Sea', '1000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/1/11/NH-Icon-surgeonfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Butterfly fish', 'Sea', '1000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/8/8e/NH-Icon-butterflyfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Napoleonfish', 'Sea', '10000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/6/6f/NH-Icon-napoleonfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Zebra Turkeyfish', 'Sea', '500', 'https://vignette.wikia.nocookie.net/animalcrossing/images/1/1c/NH-Icon-zebraturkeyfish.png/revision/latest/scale-to-width-down/64?cb=20200401003130'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Blowfish', 'Sea', '5000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/3/39/NH-Icon-blowfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Pufferfish', 'Sea', '250', 'https://vignette.wikia.nocookie.net/animalcrossing/images/1/1f/NH-Icon-pufferfish.png/revision/latest/scale-to-width-down/64?cb=20200401003130'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Anchovy', 'Sea', '200', 'https://vignette.wikia.nocookie.net/animalcrossing/images/2/24/NH-Icon-anchovy.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Horse mackerel', 'Sea', '150', 'https://vignette.wikia.nocookie.net/animalcrossing/images/d/d5/NH-Icon-horsemackerel.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Barred knifejaw', 'Sea', '5000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/8/8c/NH-Icon-barredknifejaw.png/revision/latest/scale-to-width-down/64?cb=20200401003128'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Sea bass', 'Sea', '400', 'https://vignette.wikia.nocookie.net/animalcrossing/images/2/22/NH-Icon-seabass.png/revision/latest/scale-to-width-down/64?cb=20200401003130'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Red snapper', 'Sea', '3000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/d/dd/NH-Icon-redsnapper.png/revision/latest/scale-to-width-down/64?cb=20200401003130'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Dab', 'Sea', '300', 'https://vignette.wikia.nocookie.net/animalcrossing/images/c/c6/NH-Icon-dab.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Olive flounder', 'Sea', '800', 'https://vignette.wikia.nocookie.net/animalcrossing/images/9/9e/NH-Icon-oliveflounder.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Moray eel', 'Sea', '2000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/e/e5/NH-Icon-morayeel.png/revision/latest/scale-to-width-down/64?cb=20200401003130'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Ribbon eel', 'Sea', '600', 'https://vignette.wikia.nocookie.net/animalcrossing/images/a/ac/NH-Icon-ribboneel.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Tuna', 'Pier', '7000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/5/50/NH-Icon-tuna.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Blue marlin', 'Pier', '10000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/2/2f/NH-Icon-bluemarlin.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Giant trevally', 'Pier', '4500', 'https://vignette.wikia.nocookie.net/animalcrossing/images/7/7b/NH-Icon-gianttrevally.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Mahi-mahi', 'Sea', '6000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/8/82/NH-Icon-mahimahi.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Ocean sunfish', 'Sea', '4000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/5/52/NH-Icon-oceansunfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Ray', 'Sea', '3000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/d/db/NH-Icon-ray.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Saw shark', 'Sea', '12000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/7/73/NH-Icon-sawshark.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Hammeread shark', 'Sea', '8000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/2/25/NH-Icon-hammerheadshark.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Great white shark', 'Sea', '15000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/3/38/NH-Icon-greatwhiteshark.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Whale shark', 'Sea', '13000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/1/1c/NH-Icon-whaleshark.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Suckerfish', 'Sea', '1500', 'https://vignette.wikia.nocookie.net/animalcrossing/images/b/b9/NH-Icon-suckerfish.png/revision/latest/scale-to-width-down/64?cb=20200401003131'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Football fish', 'Sea', '2500', 'https://vignette.wikia.nocookie.net/animalcrossing/images/a/a5/NH-Icon-footballfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Oarfish', 'Sea', '9000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/3/33/NH-Icon-oarfish.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Barreleye', 'Sea', '15000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/c/c7/NH-Icon-barreleye.png/revision/latest/scale-to-width-down/64?cb=20200401003128'),

    // tslint:disable-next-line: max-line-length
    new Pesce('Coelacanth', 'Sea(Rain)', '15000', 'https://vignette.wikia.nocookie.net/animalcrossing/images/3/31/NH-Icon-coelacanth.png/revision/latest/scale-to-width-down/64?cb=20200401003129'),


  ];

  // Search() {
  //   if (this.name !== '') {
  //     this.pesci = this.pesci.filter(res => {
  //       return res.name.toLowerCase().match(this.name.toLocaleLowerCase());
  //     });
  //   } else if (this.name === '') {
  //     this.ngOnInit();
  //   }

  // }


  constructor() { }

  ngOnInit(): void {
  }

}
