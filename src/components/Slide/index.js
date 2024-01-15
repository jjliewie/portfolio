import React from "react";
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../styles/style.css';

export default function Slide() {

  const sliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1100,
        settings: {
         slidesToShow: 3,
        }
      },
      {
        breakpoint: 850,
        settings: {
         slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
         slidesToShow: 1,
        }
       }
    ]

  }

  const literaryCards = [
    {
      title: 'Donna',
      journal: 'BreakBread Magazine',
      link: 'https://d1fdloi71mui9q.cloudfront.net/gUUQiwZiQumedaHUyD1O_BreakBreadIssue5_DigitalDownload.pdf',
      type: 'Creative Nonfiction', 
      // excerpt: 'n/a'
    },
    {
      title: 'If There Were a Time Machine',
      journal: 'The Rappahannock Review',
      link: 'https://rappahannockreview.com/issue-10-2/contents/nonfiction/juheon-rhee/',
      type: 'Creative Nonfiction', 
      // excerpt: 'n/a'
    },
    {
      title: 'The optimal age to commit arson',
      journal: 'Salem State University Soundings East',
      link: 'https://www.salemstate.edu/campus-life/arts/creative-writing/soundings-east',
      type: 'Creative Nonfiction', 
      // excerpt: 'n/a'
    },
    {
      title: 'Love',
      journal: 'Untenured',
      link: 'https://static1.squarespace.com/static/611d3926c87218044b5a134b/t/657cc5fb2d664a236c537942/1702675966741/UNTENURED+2.3.pdf',
      type: 'Creative Nonfiction', 
      // excerpt: 'n/a'
    },
    {
      title: 'Verifying Factors Affecting Covid-19 Cases and Deaths',
      journal: 'International Journal of Current Research',
      link: 'https://www.journalcra.com/sites/default/files/issue-pdf/40630_0.pdf',
      type: 'Research Paper', 
      // excerpt: 'n/a'
    },
    {
      title: 'Poetry',
      journal: 'Litterae Mag',
      link: 'https://www.litteraemag.com/poetry/poetry',
      type: 'Poetry', 
      excerpt: 'The poets will tell my story a dream, in pieces...'
    },
    {
      title: 'Immaculate',
      journal: 'Grim & Gilded',
      link: 'https://www.grimandgilded.com/juheon-rhee',
      type: 'Poetry', 
      excerpt: 'Because your child is born, your mother congratulates you...'
    },
    {
      title: 'when stream slithered down the hill like a dirge',
      journal: 'That Which Remains',
      link: 'https://www.twrjournal.com/poetry-juheon-rhee',
      type: 'Poetry', 
      excerpt: 'it sang to us: trickle, trickle, little star, on a starless night...'
    }, 
    {
      title: 'Love',
      journal: 'Untenured',
      link: 'https://static1.squarespace.com/static/611d3926c87218044b5a134b/t/657cc5fb2d664a236c537942/1702675966741/UNTENURED+2.3.pdf',
      type: 'Creative Nonfiction', 
      // excerpt: 'n/a'
    },
    {
      title: 'Fifth Grade Anatomy',
      journal: 'Bird Bath Magazine',
      link: 'https://birdbathmagazine.com/issue1',
      type: 'Poetry (Print)'
    },
    {
      title: 'The Case of the Drowned Haenyeo',
      journal: 'Bird Bath Magazine',
      link: 'https://birdbathmagazine.com/issue1',
      type: 'Poetry (Print)'
    },
    {
      title: 'dear hwang-og',
      journal: '580 Split',
      link: 'https://580split.org/issue/message-undeliverable/#dearhwangog038dearkitty',
      type: 'Poetry', 
      excerpt: 'i’ve always wished for my name to be one of a gem...'
    },
    {
      title: 'dear kitty',
      journal: '580 Split',
      link: 'https://580split.org/issue/message-undeliverable/#dearhwangog038dearkitty',
      type: 'Poetry', 
      excerpt: '...it’s been awhile how have you been i haven’t heard much from you are you doing okay...'
    },
    {
      title: 'Grandma Told Me Her Favorite Flowers Were Roses',
      journal: 'Cathartic Youth Literary Magazine',
      link: 'https://www.catharticlitmagazine.com/magazine/grandma-told-me-her-favorite-flowers-were-roses-by-juheon-rhee-15-philippines',
      type: 'Short Story', 
      excerpt: 'Let’s say there’s a time-travelling machine that only I can use...'
    },
    {
      title: 'Six Stages of Grief',
      journal: 'Cleaver Magazine',
      link: 'https://www.cleavermagazine.com/two-poems-by-juheon-rhee/',
      type: 'Poetry (Best of the Net Nominated)', 
      excerpt: 'it is everywhere the steel-colored smoke you are afraid feel...'
    },
    {
      title: '(untitled)',
      journal: 'Cleaver Magazine',
      link: 'https://www.cleavermagazine.com/two-poems-by-juheon-rhee/',
      type: 'Poetry', 
      excerpt: 'did you know that when you are bitten by a snake...'
    },
    {
      title: 'Morphology in the Dark',
      journal: 'Trouvaille Review',
      link: 'https://www.trouvaillereview.org/home/morphology-in-the-dark-by-juheon-rhee',
      type: 'Poetry', 
      excerpt: 'I think the sky is beautiful at night. I live in the city so there are no stars. / The moonlight burns the white clouds / black...'
    },
    {
      title: 'Dear Lizabeth',
      journal: 'Indolent Books',
      link: 'https://www.indolentbooks.com/what-rough-beast-poem-for-may-3-2019/',
      type: 'Poetry', 
      excerpt: '...never thought would muster a single tear dearest Lizabeth you changed your name...'
    },
    {
      title: 'Cleaning Out My Childhood',
      journal: 'Indolent Books',
      link: 'https://www.indolentbooks.com/what-rough-beast-poem-for-may-10-2019/',
      type: 'Poetry', 
      excerpt: 'behind the pecan closet / tattered with out-of-place stickers / was an alcove...'
    },
    {
      title: 'Ocean Survival',
      journal: 'Sledgehammer Lit',
      link: 'https://www.sledgehammerlit.com/post/ocean-survival-by-juheon-rhee',
      type: 'Poetry', 
      excerpt: 'Have our bodies forgotten our ocean-borne origin? The sea of our mother’s womb?'
    },
    {
      title: 'Apparitions Under the Halogen',
      journal: 'Plum Recruit',
      link: 'https://plumrecruitmag.com/poetry/apparitions-under-the-halogen-juheon-rhee',
      type: 'Poetry', 
      excerpt: '...all the / ghosts are only shadows in the white / darkness is a camera...'
    },
    {
      title: 'Childhood',
      journal: 'Fox Paw Literary Blog',
      link: 'https://foxpawliterary.com/childhood-juhean-rhee/',
      type: 'Poetry (Shorlisted)', 
      excerpt: 'Tonight, rivers don’t have to lead to oceans and waves can crash upwards...'
    },
    {
      title: 'Horror Stories',
      journal: 'Sandstorm Journal',
      link: 'https://sandstormjournal.com/horror-stories',
      type: 'Poetry', 
      excerpt: '...towards the police station, petrichor bleeding / into her lips...'
    },
    {
      title: 'Drowned Horizon',
      journal: 'The Weight Journal',
      link: 'https://www.theweightjournal.com/post/drowned-horizon-poetry-by-julie-rhee',
      type: 'Poetry', 
      excerpt: 'How the mind’s eye breaks at sunset, / staring at the sea that had never come to us.'
    },
    {
      title: 'Mudengsan, June 3, 1964',
      journal: 'the borderline',
      link: 'https://www.theborderlinemag.org/volume-i',
      type: 'Poetry', 
      excerpt: 'In the photograph laying tilted on the stool by Ahni’s herb stall...'
    },
    {
      title: 'Frostbite in November',
      journal: 'Isacoustic',
      link: 'https://isacoustic.wordpress.com/2020/10/05/person-juheon-julie-rhee-one-poem/',
      type: 'Poetry', 
      excerpt: '...snow only / offers deathbed kisses, / and has not learned / to bite.'
    }, 
    {
      title: 'Lonely Spiders',
      journal: 'Lunch Ticket',
      link: 'https://lunchticket.org/lonely-spiders-motor-vessel-sewol/',
      type: 'Poetry', 
      excerpt: 'Mother and I stare at the flashing TV screen at night...'
    }, 
    {
      title: 'Motor Vessel Sewol',
      journal: 'Lunch Ticket',
      link: 'https://lunchticket.org/lonely-spiders-motor-vessel-sewol/',
      type: 'Poetry', 
      excerpt: 'Have you ever seen the moist glow of dusk? / How it smudges as it clambers up the sliver of your cheekbone...'
    }, 
    {
      title: 'ghost town',
      journal: 'Paper Crane',
      link: 'https://en.calameo.com/read/006629503cbdc6b1c6568',
      type: 'Poetry', 
      excerpt: 'My next door neighbor cries / on the balcony today...'
    },
    {
      title: 'The moon that used to follow me in the car',
      journal: 'Noctua Review',
      link: 'https://issuu.com/noctuareview/docs/noctuareview2021',
      type: 'Poetry', 
      excerpt: 'The clock on my shelf bends...'
    }, 
    {
      title: 'today I will call the colors of the world dysphoria, as I stand on the pedestal like a cult leader dying.',
      journal: 'Mason Jar Press',
      link: 'http://masonjarpress.com/chapbooks-1/jarnal1',
      type: 'Poetry (Print)'
    }, 
    {
      title: 'mother dearest blames her eyesight',
      journal: 'deLuge Literary and Arts Journal',
      link: 'https://www.delugejournal.com/uploads/3/4/8/8/34888906/deluge_5.1_final.pdf',
      type: 'Poetry', 
      excerpt: 'who stained the window dripping the opaque paint...'
    }, 
    {
      title: 'burial of a dead fish',
      journal: 'deLuge Literary and Arts Journal',
      link: 'https://www.delugejournal.com/uploads/3/4/8/8/34888906/deluge_5.1_final.pdf',
      type: 'Poetry', 
      excerpt: 'woman over there in the white veil in the colossal detainment of house...'
    }, 
    {
      title: 'Fruit Flies',
      journal: 'The Heritage Review',
      link: 'https://www.heritagereview.org/new-page-13',
      type: 'Poetry', 
      excerpt: 'his lungs crumbled / from the inside / like how mold ate his bread...'
    },
    {
      title: 'Play Dead on the Ground, It’s a Game',
      journal: 'The Heritage Review',
      link: 'https://www.heritagereview.org/new-page-13',
      type: 'Poetry', 
      excerpt: 'its my favorite day of week yet...'
    },
    {
      title: 'six shades of green',
      journal: 'The Heritage Review',
      link: 'https://www.heritagereview.org/new-page-13',
      type: 'Poetry', 
      excerpt: '...and i drown in the shaggy uncombed hair...'
    },
    {
      title: 'In the Spotlight',
      journal: 'The Heritage Review',
      link: 'https://www.heritagereview.org/new-page-13',
      type: 'Poetry', 
      excerpt: 'Planting red beets they know they can’t afford to buy / Fingernail filled with dried out dirt...'
    },
    {
      title: 'Sea in Jupiter',
      journal: 'The Heritage Review',
      link: 'https://www.heritagereview.org/new-page-13',
      type: 'Poetry', 
      excerpt: '...crashing onto the pebbles / lost in the peculiar rhythm / perpetually...'
    },
    {
      title: 'open our eyes',
      journal: 'Bow Seat Ocean Awareness Contest',
      link: 'https://bowseat.org/gallery/open-our-eyes/',
      type: 'Poetry (Award Winner)', 
      excerpt: '...no longer the roots of the sea but a delicate / souvenir...'
    },
    {
      title: 'Chinese Porcelain Doll',
      journal: 'Austin Poets International',
      link: 'https://www.aipf.org/',
      type: 'Poetry (Print)'
    },
    {
      title: 'my name is Jeong hui.',
      journal: 'Apprentice Writer',
      link: 'https://www.apprenticewriter.com/',
      type: 'Poetry (Print)'
    },
    {
      title: 'Autumn Kenopsia',
      journal: 'Tenth Street Miscellany',
      link: 'http://tenthstreetmiscellany.com/',
      type: 'Poetry (Print)'
    },
    {
      title: 'February Peonies',
      journal: 'K’in Literary Journal',
      link: 'https://kinliteraryjournal.com/yw-rhee-issue-3',
      type: 'Poetry', 
      excerpt: 'On the first day of February / I’ll water the peonies that line...'
    }
  ]

  return (
    <div className='publication-slider'>
      <Slider {...sliderSettings}>
        {literaryCards.map((card) => (
        <Card className="publication-card">
        <Card.Header className="card-header">{card.type}</Card.Header>
        <Card.Body className="card-body">
          <Card.Title className="card-title">{card.title}</Card.Title>
          <Card.Text>

            <div className="card-subtitle">
              {card.journal}
            </div>

            <div className="card-text">
              {card.excerpt}
            </div>

          </Card.Text>
          <a href={card.link} class="card-link" target="_blank" rel="noreferrer">Click to read</a>
        </Card.Body>
        </Card>
        ))}
      </Slider>
    </div>
  )
}