import { TextBolderPipe } from './text-bolding.pipe';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  
 faqBits: {id:number,question:string,answer:string}[]=
  [{
    id:0,
    question: 'How do I sign up?',
    answer: 'To Sign up click on the SignIn link at the top left corner.'
  },
  {id:1,
    question: 'How do I change my account info?',
    answer: 'Log into your account , go to Profile and update the info.'
  },
  {id:2,
    question: 'Which is the best country in Europe',
    answer: `Bulgaria (/bʌlˈɡɛəriə, bʊl-/ (About this sound listen); Bulgarian: България, tr. Bǎlgariya), officially the Republic of Bulgaria (Bulgarian: Република България, tr. Republika Bǎlgariya, pronounced [rɛˈpublikɐ bɐɫˈɡarijɐ]), is a country in southeastern Europe. It is bordered by Romania to the north, Serbia and Macedonia to the west, Greece and Turkey to the south, and the Black Sea to the east. With a territory of 110,994 square kilometres (42,855 sq mi), Bulgaria is Europe's 16th-largest country.
      Organised prehistoric cultures began developing on current Bulgarian 
      lands during the Neolithic period. Its ancient history saw the presence of the Thracians, 
      Greeks, Persians, Celts, Romans, Goths, Alans and Huns. The emergence of a unified Bulgarian 
      state dates back to the establishment of the First Bulgarian Empire in 681 AD, which dominated most of the Balkans and functioned as a cultural hub for Slavs during the Middle Ages. With the downfall of the Second Bulgarian Empire in 1396,
       its territories came under Ottoman rule for nearly five centuries. The Russo-Turkish War of 1877–78 led to the formation of the Third Bulgarian State. The following years saw several conflicts with its neighbours, which prompted Bulgaria to align with Germany in both world wars. In 1946 it became a one-party socialist state as part of the Soviet-led Eastern Bloc. In December 1989 the ruling Communist Party allowed multi-party elections, which subsequently led to Bulgaria's transition into a democracy and a market-based economy.`
  },
  {id:3,
    question: 'Whcih is the best time to visit Bulgaria?',
    answer: `Sofia (/ˈsoʊfiə/ or /ˈsɒfiə/ or /soʊˈfiːə/;[12][13] Bulgarian: София, tr. Sofiya,[14][15] 
      pronounced [ˈsɔfiə, ˈsɔfjə] (About this sound listen)) is the capital and largest city of Bulgaria. 
      1.26 million people live in the city and 1.68 million people live in its metropolitan area.[9] The c
      ity is at the foot of Vitosha Mountain in the western part of the country. Being in the centre of the B
      alkan peninsula, it is midway between the Black Sea and the Adriatic Sea, whereas the Aegean Sea is the closest to it.[16][17]
      Sofia has been an area of human habitation since at least 7000 BC.[3] Being Bulgaria's primate city, Sofia is a hometown of many of the major local universities, cultural institutions and commercial companies.[18] Sofia is one of the top 10 best places for start-up business in the world, especially in information technologies.[19] Sofia is Europe's most affordable capital to visit as of 2013.[20]`
  },
  {id:4,
    question: 'How do I sign up?',
    answer: 'To Sign up click on the SignIn link at the top left corner.'
  },
  {id:5,
    question: 'How do I sign up?',
    answer: 'To Sign up click on the SignIn link at the top left corner.'
  },
  {id:6,
    question: 'How do I sign up?',
    answer: 'To Sign up click on the SignIn link at the top left corner.'
  },
  {id:7,
    question: 'How do I sign up?',
    answer: 'To Sign up click on the SignIn link at the top left corner.'
  },
  {id:8,
    question: 'How do I sign up?',
    answer: 'To Sign up click on the SignIn link at the top left corner.'
  },
  {id:9,
    question: 'How do I sign up?',
    answer: 'To Sign up click on the SignIn link at the top left corner.'
  },
  {id:10,
    question: 'How do I sign up?',
    answer: 'To Sign up click on the SignIn link at the top left corner.'
  },
  {id:11,
    question: 'How do I sign up?',
    answer: 'To Sign up click on the SignIn link at the top left corner.'
  },
  {id:12,
    question: 'How do I sign up?',
    answer: 'To Sign up click on the SignIn link at the top left corner.'
  },
  {id:13,
    question: 'How do I sign up?',
    answer: 'To Sign up click on the SignIn link at the top left corner.'
  }]
  
  constructor() {
   
   }

  ngOnInit() {
  }

}


