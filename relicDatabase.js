import { SpaceItem } from './SpaceItem.js';

export const relicDatabase = {

//Moon Item # 1
    Surveyor: new SpaceItem({
    id: 'surveyor',

    title: 'The Surveyor Landers',

    subtitle: 'Meet the brave little robots that explored the Moon and helped astronauts prepare for their first lunar landing!',

    locationTag: 'The Moon',
    theme: 'moon',

    image: {
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Surveyor_3_Conrad.jpg/960px-Surveyor_3_Conrad.jpg',
        alt: 'Apollo 12 astronaut Pete Conrad examining the Surveyor 3 lander on the Moon',
        caption: 'Astronaut Pete Conrad examines Surveyor 3 on the Moon during Apollo 12 in November 1969. (Photo: NASA)'
    },

    specs: [
        { label: 'Space Program', value: 'Surveyor' },
        { label: 'Years Deployed', value: '1966 - 1968' },
        { label: 'Number of Missions', value: '7' },
        { label: 'Successful Moon Landings', value: '5' },
        { label: 'First Successful Landing', value: 'June 2, 1966' },
        { label: 'Astronauts on Board', value: 'None - robotic explorers!' },
        { label: 'Main Job', value: 'Study the Moon and test safe landings' },
        { label: 'Power Source', value: 'Solar panels and batteries' }
    ],

    sections: [
        {
            heading: 'What Is a Surveyor Lander?',
            paragraphs: [
                'Imagine wanting to send astronauts to the Moon, but not knowing whether the ground was safe enough for their spaceship to land. What if the surface was too soft and the spaceship sank into the dust? NASA needed answers before sending humans there!',
                'That is why NASA created the Surveyor Landers. These were special robotic spacecraft sent to the Moon to study its surface and find out whether astronauts could land safely.',
                'Unlike the Moon Buggies, Surveyor Landers did not have wheels to drive around. They had three landing legs that helped them stand on the rocky lunar surface. Each lander carried scientific equipment to investigate the Moon.',
                'Between 1966 and 1968, NASA launched seven Surveyor spacecraft. Five of them successfully landed on the Moon and sent back valuable information to scientists on Earth.'
            ]
        },

        {
            heading: 'How Did It Work?',
            paragraphs: [
                'The Surveyor Landers traveled to the Moon aboard rockets launched from Earth. When they approached the lunar surface, they used special rocket engines to slow down so they could land gently instead of crashing.',
                'Each Surveyor had three landing legs, a camera, and communication equipment. The camera took pictures of the Moon, while the communication system sent information back to scientists on Earth using radio signals.',
                'The landers also used solar panels to collect energy from the Sun. This energy helped power their cameras, computers, and other scientific equipment.',
                'Some Surveyor Landers carried a robotic arm with a small scoop. Imagine a robot using a tiny shovel to dig in the Moon! Scientists used this scoop to study how soft or firm the lunar soil was.',
                'Other Surveyors carried special instruments that helped scientists learn what the Moon\'s soil was made of. By studying this information, NASA could better understand the surface that astronauts would eventually walk on.'
            ]
        },

        {
            heading: 'What Did We Leave Behind?',
            paragraphs: [
                'Did you know that the Surveyor Landers are still on the Moon today? These robots completed their missions many years ago, but their spacecraft remain on the lunar surface.',
                'Five Surveyors successfully landed on the Moon: Surveyor 1, 3, 5, 6, and 7. After finishing their scientific work, they stayed where they had landed because they were not designed to return to Earth.',
                'However, something incredible happened in November 1969! During the Apollo 12 mission, astronauts Pete Conrad and Alan Bean landed close to Surveyor 3, which had been sitting on the Moon for more than two years.',
                'The astronauts walked over to the old robot, examined it, and removed its camera and several other parts. They brought these pieces back to Earth so scientists could study how the equipment had survived on the Moon.',
                'Most of Surveyor 3 and the other successful landers remain on the Moon. They are like historical treasures, reminding us of the robots that helped humans take their first steps on another world.'
            ]
        },

        {
            heading: 'Fun Facts!',
            paragraphs: [
                'Surveyor 1 became the first American spacecraft to make a successful soft landing on the Moon on June 2, 1966. It proved that a robotic spacecraft could land safely without crashing!',
                'Surveyor 1 took more than 11,000 pictures of the lunar surface. These photographs gave scientists an amazing close-up view of the Moon before astronauts ever walked there.',
                'Surveyor 3 had a robotic arm with a scoop that could dig into the Moon\'s soil. It was like a tiny construction machine working millions of miles away from Earth!',
                'Surveyor 6 did something especially surprising. After landing on the Moon, it fired its engines again and made a small hop to a new position! This allowed scientists to study the ground in two different places.',
                'Surveyor 7 landed near the giant Tycho crater in January 1968. Unlike earlier successful Surveyors, it explored a rougher, more mountainous area of the Moon.',
                'When Apollo 12 astronauts visited Surveyor 3 in 1969, they became the first humans to personally examine a spacecraft that had already been sitting on another world for years!'
            ]
        },

        {
            heading: 'Why Is It Important?',
            paragraphs: [
                'The Surveyor Landers helped NASA answer one of the biggest questions about the Moon: Could a spaceship land safely on its surface without sinking or crashing?',
                'By studying the Moon\'s soil, rocks, and landscape, these robotic explorers gave scientists important information that helped prepare for the Apollo missions.',
                'The Surveyor missions also showed engineers how to build spacecraft that could land gently on another world. These lessons helped improve the technology used in later space exploration missions.',
                'Most importantly, the Surveyor Landers showed how robots and humans can work together to explore space. The robots went first, gathered information, and helped prepare the way for astronauts to follow!'
            ]
        }
    ],

    didYouKnow: {
        title: 'Did You Know?',
        text: 'In 1969, Apollo 12 astronauts actually visited a robot that had been sitting on the Moon for over two years! They walked about 600 feet from their Lunar Module to Surveyor 3 and brought its camera back to Earth. Imagine finding an old robot on the Moon and bringing part of it home!'
    }
}),
      
      
    
//Moon Item # 2
  Apollo11: new SpaceItem({
    id: 'Apollo11',
    title: 'Apollo Lunar Module',
    subtitle: "Meet the amazing little spaceships that helped astronauts land on the Moon!",
    locationTag: 'The Moon',
    theme: 'moon',
    image: {
      url: 'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/lunar-science/2023/08/269792main_GPN-2000-001210_full.jpg',
      alt: 'The Apollo 11 Lunar Module Eagle flying above the Moon',
      caption: 'The Apollo 11 Lunar Module, nicknamed Eagle. (Photo: NASA)'
    },
    specs: [
      { label: 'Space Program', value: 'Apollo' },
      { label: 'First Moon Landing', value: '1969' },
      { label: 'Astronaut Capacity', value: '2 astronauts' },
      { label: 'Moon Landings', value: '6 successful missions' },
      { label: 'Nickname (Apollo 11)', value: 'Eagle' }
    ],
    sections: [
      {
        heading: 'What is a Lunar Module?',
        paragraphs: [
          'Imagine you are an astronaut traveling to the Moon. You cannot just jump out of your spaceship! You need a special vehicle to land safely. That is exactly what the Lunar Module was built to do.',
          'The Lunar Module was like a space taxi. It carried two astronauts from their spacecraft above the Moon down to the surface, where they could explore, collect rocks, and perform experiments.'
        ]
      },

      {
        heading: 'How Did It Work?',
        paragraphs: [
                'The Lunar Module had two main parts. The bottom half had four landing legs and an engine that helped the astronauts land gently on the Moon.',
                'The top half was where the astronauts sat and controlled the spaceship. When it was time to leave, the top half blasted off and flew back to meet their spacecraft orbiting the Moon.',
                'The bottom half stayed behind on the Moon because the astronauts did not need it anymore!'
        ]
      },

      {
        heading: 'What Did We Leave Behind?',
        paragraphs: [
                'Did you know that parts of the Apollo Lunar Modules are still on the Moon today?',
                'The bottom sections, including their landing legs, were left behind after the astronauts took off. They remain as reminders of the incredible journeys humans made to another world.',
                'These pieces of equipment are like historical treasures, showing future explorers where astronauts once landed.'
        ]
      },

      {
        heading: 'Fun Facts!',
        paragraphs: [
                'The Lunar Module may look strange, but there is a reason! It did not need wings or a smooth, airplane-like shape because it was designed to fly in space, where there is almost no air.',
                'The shiny gold material covering parts of the spaceship helped protect its equipment from extreme temperatures.',
                'Between 1969 and 1972, six Apollo missions successfully landed astronauts on the Moon. That means six Lunar Module landing stages were left on the lunar surface!'
        ]
      },

      {
        heading: 'Why Is It Important?',
        paragraphs: [
                'The Lunar Module helped humans achieve something once thought impossible: landing on another world and returning safely.',
                'By studying these incredible machines, we can learn how astronauts explored the Moon and how engineers solved difficult problems to make space travel possible.'
        ]
      }


    ],
    didYouKnow: {
      title: 'Did You Know?',
    text: 'The Apollo Lunar Module was like a two-story spaceship! When astronauts were ready to leave the Moon, the top half blasted off like a rocket, while the bottom half stayed behind. Those bottom halves are still sitting on the Moon today!'
    }
  }),

  LunarRovingVehicles: new SpaceItem({
    id: 'lunar-roving-vehicles',

    title: 'Lunar Roving Vehicles',

    subtitle: 'Meet the amazing electric cars that helped astronauts explore the Moon!',

    locationTag: 'The Moon',
    theme: 'moon',

    image: {
        url: 'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/lunar-science/2023/09/eugene_cernan-full-a.jpg',
        alt: 'Astronaut Eugene Cernan driving the Lunar Roving Vehicle during Apollo 17',
        caption: 'Astronaut Eugene Cernan driving the Moon rover during Apollo 17 in 1972. (Photo: NASA)'
    },

    specs: [
        { label: 'Space Program', value: 'Apollo' },
        { label: 'First Used', value: '1971' },
        { label: 'Astronaut Capacity', value: '2 astronauts' },
        { label: 'Number of Wheels', value: '4' },
        { label: 'Power Source', value: 'Electric batteries' },
        { label: 'Missions', value: 'Apollo 15, 16, and 17' },
        { label: 'Rovers Left on the Moon', value: '3' }
    ],

    sections: [
        {
            heading: 'What Is a Lunar Roving Vehicle?',
            paragraphs: [
                'Imagine landing on the Moon and wanting to explore its mountains, rocks, and giant craters. Walking everywhere in a heavy spacesuit would be very tiring! That is why NASA created the Lunar Roving Vehicle, also called the Moon Buggy.',
                'The Lunar Roving Vehicle was a special electric car that carried two astronauts across the Moon. It helped them travel farther, collect more Moon rocks, and explore places they could not easily reach on foot.',
                'Unlike cars on Earth, the Moon Buggy had no roof, windows, or doors. It looked more like a small golf cart, with four wheels, two seats, and special equipment for exploring!'
            ]
        },

        {
            heading: 'How Did It Work?',
            paragraphs: [
                'The Moon Buggy ran on batteries instead of gasoline. Each of its four wheels had its own electric motor, helping the vehicle move across the rocky and dusty surface of the Moon.',
                'Astronauts controlled the rover using a special hand controller instead of a normal steering wheel. They could make it move forward, backward, and turn in different directions.',
                'The wheels were made with a special metal mesh instead of ordinary rubber tires. This helped them handle the rough Moon surface without needing air inside the tires.',
                'The rover also carried cameras, communication equipment, tools, and storage space for Moon rocks. This made it like a moving science laboratory!'
            ]
        },

        {
            heading: 'What Did We Leave Behind?',
            paragraphs: [
                'Did you know that three Moon Buggies are still sitting on the Moon today?',
                'Astronauts used these vehicles during the Apollo 15, Apollo 16, and Apollo 17 missions. When their missions ended, they parked the rovers on the Moon and returned to Earth without them.',
                'The vehicles were too large and heavy to bring back, so NASA left them behind. They remain on the Moon as reminders of the incredible adventures astronauts had while exploring another world.',
                'These rovers are important pieces of space history. Just like archaeologists study ancient objects on Earth, future Moon explorers may study these vehicles to learn about the first age of lunar exploration.'
            ]
        },

        {
            heading: 'Fun Facts!',
            paragraphs: [
                'The Moon Buggy could fold up! NASA designed it to fit inside a small storage compartment on the Lunar Module. Once astronauts landed, they unfolded it and prepared it for driving.',
                'The Moon has much weaker gravity than Earth, so astronauts and their rover weighed much less there. This sometimes made the rover bounce as it traveled over bumps and rocks!',
                'During Apollo 17 in 1972, astronauts drove their Lunar Roving Vehicle more than 22 miles in total. That was the longest distance traveled by any of the Apollo Moon Buggies!',
                'The Moon Buggy even had a television camera. This allowed people back on Earth to watch parts of the astronauts\' adventures on the lunar surface.'
            ]
        },

        {
            heading: 'Why Is It Important?',
            paragraphs: [
                'The Lunar Roving Vehicles changed the way astronauts explored the Moon. Instead of walking only short distances, they could drive across the surface and investigate exciting new places.',
                'These vehicles helped astronauts discover more about the Moon by collecting rocks, studying the landscape, and carrying scientific equipment.',
                'The Moon Buggies also showed engineers that electric vehicles could work in space. What NASA learned from them continues to help scientists design new vehicles for exploring the Moon and other worlds.'
            ]
        }
    ],

    didYouKnow: {
        title: 'Did You Know?',
        text: 'The Moon Buggy was the first car humans ever drove on another world! Astronauts first drove one during Apollo 15 in 1971. Even more amazing, all three Moon Buggies are still parked on the Moon today, waiting for future explorers to find them!'
    }
}),

Ingenuity: new SpaceItem({
    id: 'ingenuity',

    title: 'Ingenuity Mars Helicopter',

    subtitle: 'Meet the tiny flying robot that made history by becoming the first helicopter to fly on another planet!',

    locationTag: 'Mars',
    theme: 'mars',

    image: {
        url: 'https://assets.science.nasa.gov/content/dam/science/psd/photojournal/pia/pia24/pia24547/PIA24547.jpg/jcr%3Acontent/renditions/cq5dam.web.1280.1280.jpeg',
        alt: 'NASA Ingenuity Mars Helicopter sitting on the rocky surface of Mars',
        caption: 'The Ingenuity Mars Helicopter photographed by the Perseverance rover in April 2021. (Photo: NASA/JPL-Caltech/ASU)'
    },

    specs: [
        { label: 'Space Program', value: 'Mars 2020' },
        { label: 'First Flight', value: 'April 19, 2021' },
        { label: 'Last Flight', value: 'January 18, 2024' },
        { label: 'Total Flights', value: '72' },
        { label: 'Weight on Earth', value: '4 pounds (1.8 kg)' },
        { label: 'Power Source', value: 'Solar-powered batteries' },
        { label: 'Number of Rotor Blades', value: '4' },
        { label: 'Landing Location', value: 'Jezero Crater, Mars' }
    ],

    sections: [
        {
            heading: 'What Is the Ingenuity Mars Helicopter?',
            paragraphs: [
                'Imagine being able to fly a tiny helicopter over the surface of Mars! That is exactly what NASA created when it built Ingenuity, a small robotic helicopter designed to explore the Red Planet.',
                'Ingenuity was not like an ordinary helicopter. It was a tiny flying robot that weighed only about 4 pounds on Earth, which is about as much as a small house cat! It had four long, thin rotor blades, four landing legs, and a solar panel on top.',
                'The helicopter traveled to Mars attached underneath a much larger robot called the Perseverance rover. Once they arrived, Perseverance carefully placed Ingenuity on the ground so it could begin its flying adventures.',
                'Ingenuity became the first aircraft to make a powered, controlled flight on another planet, proving that flying robots could help humans explore worlds beyond Earth!'
            ]
        },

        {
            heading: 'How Did It Work?',
            paragraphs: [
                'Ingenuity flew using two sets of spinning rotor blades, just like a helicopter on Earth. However, flying on Mars was much harder because the Martian atmosphere is extremely thin. There is much less air for the blades to push against!',
                'To solve this problem, NASA engineers designed special lightweight blades that could spin incredibly fast, around 2,400 times every minute. This helped Ingenuity lift itself off the ground and fly through the thin Martian air.',
                'Instead of using gasoline, Ingenuity used rechargeable batteries. A small solar panel on top collected sunlight to recharge the batteries, helping the helicopter get ready for its next adventure.',
                'Ingenuity also had cameras and a tiny computer that acted like its brain. Because Mars is so far away, people on Earth could not steer it like a remote-control toy. Instead, engineers sent instructions, and the helicopter used its computer to fly on its own!'
            ]
        },

        {
            heading: 'What Did We Leave Behind?',
            paragraphs: [
                'Did you know that the Ingenuity Mars Helicopter is still sitting on Mars today? After completing 72 amazing flights, its flying adventures finally came to an end.',
                'On January 18, 2024, Ingenuity completed its final flight. Unfortunately, some of its rotor blades were damaged during landing, making it impossible for the helicopter to fly again.',
                'NASA officially ended its flying mission on January 25, 2024. Ingenuity remained on the rocky Martian surface, where it had made history as the first helicopter to fly on another planet.',
                'Although it can no longer fly, Ingenuity is an important piece of space history. Future explorers might one day discover this little helicopter and see a machine that helped change the way humans explore space.'
            ]
        },

        {
            heading: 'Fun Facts!',
            paragraphs: [
                'Ingenuity was originally designed to complete only five flights on Mars. However, the little helicopter surprised everyone by completing 72 flights! That is more than fourteen times its original goal.',
                'During its very first flight on April 19, 2021, Ingenuity rose about 10 feet above the Martian ground. It hovered in the air before safely landing, making history in less than a minute!',
                'Mars has an atmosphere that is only about 1% as dense as the air near Earth\'s surface. This made flying very difficult, so Ingenuity needed special blades and a very lightweight design.',
                'Ingenuity traveled more than 10 miles during its 72 flights. That might not sound very far for an airplane, but it was an incredible achievement for a tiny helicopter flying millions of miles away from Earth!',
                'Ingenuity also helped the Perseverance rover by taking pictures of the landscape from above. These photographs helped scientists and engineers study the terrain and plan where the rover could explore next.'
            ]
        },

        {
            heading: 'Why Is It Important?',
            paragraphs: [
                'Ingenuity showed the world that flying on another planet was possible. Before its first flight, no powered aircraft had ever successfully flown through the atmosphere of another planet.',
                'The helicopter helped NASA learn how flying robots could explore places that wheeled rovers might have trouble reaching, such as steep hills, rocky areas, and dangerous terrain.',
                'Ingenuity also demonstrated how small computers, cameras, solar panels, and electric motors could work together to explore an alien world.',
                'Its success could help engineers design future flying robots that explore Mars and other destinations in space. Ingenuity may have been tiny, but it opened the door to a whole new way of exploring the Solar System!'
            ]
        }
    ],

    didYouKnow: {
        title: 'Did You Know?',
        text: 'Ingenuity carried a tiny piece of fabric from the Wright brothers\' airplane, which made the first powered flight on Earth in 1903! NASA brought this little piece of history all the way to Mars to celebrate another amazing achievement: the first powered flight on another planet!'
    }
}),

Pioneer10and11: new SpaceItem({
    id: 'pioneer-10-11',

    title: 'Pioneer 10 & 11',

    subtitle: 'Meet the two brave robotic explorers that traveled past giant planets and continued their incredible journeys into deep space!',

    locationTag: 'Mars',
    theme: 'mars',

    image: {
        url: 'https://science.nasa.gov/wp-content/uploads/2023/04/jupiter_pioneer_10_art-jpg.webp',
        alt: 'Artist illustration of the Pioneer 10 spacecraft flying past Jupiter',
        caption: 'An artist illustration of Pioneer 10 exploring Jupiter. (Image: NASA)'
    },

    specs: [
        { label: 'Space Program', value: 'Pioneer' },
        { label: 'Pioneer 10 Launch', value: 'March 2, 1972' },
        { label: 'Pioneer 11 Launch', value: 'April 6, 1973' },
        { label: 'Pioneer 10 Destination', value: 'Jupiter' },
        { label: 'Pioneer 11 Destinations', value: 'Jupiter and Saturn' },
        { label: 'Power Source', value: 'Nuclear batteries (RTGs)' },
        { label: 'Astronauts on Board', value: 'None - robotic explorers!' },
        { label: 'Last Contact - Pioneer 10', value: '2003' },
        { label: 'Last Contact - Pioneer 11', value: '1995' },
        { label: 'Current Status', value: 'Traveling silently through deep space' }
    ],

    sections: [
        {
            heading: 'What Are Pioneer 10 and 11?',
            paragraphs: [
                'Imagine building two robotic spaceships and sending them on an adventure farther away than almost anything humans had ever explored! That is exactly what NASA did with Pioneer 10 and Pioneer 11.',
                'Pioneer 10 and Pioneer 11 were special spacecraft called space probes. Unlike spaceships that carry astronauts, these probes traveled through space without any people on board. They were designed to explore giant planets, take pictures, and collect information about places scientists knew very little about.',
                'Pioneer 10 launched in 1972 and became the first spacecraft to fly past Jupiter, the largest planet in our Solar System. Its younger partner, Pioneer 11, launched in 1973 and traveled past both Jupiter and Saturn, becoming the first spacecraft to visit Saturn up close.',
                'These two robotic explorers helped humans discover what the outer planets were really like. Even after completing their missions, they continued traveling away from the Sun on journeys that will last for millions of years!'
            ]
        },

        {
            heading: 'How Did They Work?',
            paragraphs: [
                'Pioneer 10 and 11 were like flying science laboratories! They carried special instruments that measured radiation, magnetic fields, tiny dust particles, and other mysterious things found in space.',
                'Each spacecraft had a large dish-shaped antenna that worked a little like a giant satellite dish. It helped the spacecraft send information back to scientists on Earth using radio signals.',
                'Because the spacecraft traveled so far from the Sun, ordinary solar panels were not a good choice for supplying electricity. Instead, they used special nuclear power generators called radioisotope thermoelectric generators, or RTGs. These devices turned heat from radioactive material into electricity.',
                'The spacecraft also slowly spun as they traveled. This spinning helped keep them steady, a little like how a spinning top stays balanced.',
                'As the probes passed giant planets, they collected scientific information and sent it back to Earth. Scientists used this information to learn about the planets, their surroundings, and the dangers future spacecraft might encounter.'
            ]
        },

        {
            heading: 'What Did We Leave Behind?',
            paragraphs: [
                'Unlike the Moon Buggies and the Ingenuity helicopter, Pioneer 10 and 11 were not left sitting on the surface of a planet. Instead, they were sent on journeys that would carry them far beyond the giant planets.',
                'Eventually, both spacecraft became too difficult to communicate with. NASA received the last signal from Pioneer 11 in 1995 and the last signal from Pioneer 10 in 2003.',
                'Although they can no longer communicate with Earth, both spacecraft continue traveling through space. They are like silent explorers carrying pieces of human history far away from home.',
                'Each spacecraft also carries a special metal plaque with drawings and symbols that tell a little story about Earth and the people who built them.',
                'If another intelligent civilization ever discovers one of these spacecraft, the plaque might help them learn that humans on a small planet called Earth once sent robots out to explore the universe!'
            ]
        },

        {
            heading: 'Fun Facts!',
            paragraphs: [
                'Pioneer 10 was the first spacecraft to successfully travel through the main asteroid belt, a huge region between Mars and Jupiter filled with rocky objects. Scientists were not sure whether a spacecraft could safely cross this region, but Pioneer 10 proved that it could!',
                'Pioneer 11 used Jupiter\'s powerful gravity to help change its path and travel toward Saturn. This special trick is called a gravity assist. It is a little like using a planet to give a spacecraft an extra push in the right direction!',
                'When Pioneer 11 reached Saturn in 1979, it gave scientists their first close-up look at the planet and helped them learn more about its beautiful rings and moons.',
                'Pioneer 10 was only supposed to operate for about 21 months, but it kept communicating with Earth for more than 30 years! That is much longer than NASA originally expected.',
                'Both Pioneer spacecraft carry metal plaques showing two humans, a diagram of our Solar System, and clues to where Earth is located in the galaxy.',
                'Pioneer 10 is traveling in the general direction of a star called Aldebaran. It would take more than two million years to reach that star\'s neighborhood!'
            ]
        },

        {
            heading: 'Why Is It Important?',
            paragraphs: [
                'Pioneer 10 and 11 were some of humanity\'s very first robotic explorers of the outer Solar System. They showed scientists that spacecraft could safely travel beyond Mars and study giant planets up close.',
                'Their discoveries taught NASA important lessons about space radiation, magnetic fields, planetary atmospheres, and the challenges of traveling far from Earth.',
                'These missions also helped prepare the way for other famous spacecraft, including Voyager 1 and Voyager 2, which later explored the outer planets in even greater detail.',
                'Most importantly, Pioneer 10 and 11 showed that humans could send machines on extraordinary journeys into the unknown. Even though their missions have ended, these spacecraft remain powerful reminders of our curiosity and our desire to explore the universe.'
            ]
        }
    ],

    didYouKnow: {
        title: 'Did You Know?',
        text: 'Pioneer 10 and 11 are carrying special messages for aliens! Each spacecraft has a metal plaque showing pictures of humans and clues about where Earth is located. Imagine an alien explorer discovering one of these spacecraft millions of years from now and realizing that someone from Earth sent it into space!'
    }
}),

KeplerSpaceTelescope: new SpaceItem({
    id: 'kepler-space-telescope',

    title: 'Kepler Space Telescope',

    subtitle: 'Meet the amazing space telescope that helped scientists discover thousands of planets beyond our Solar System!',

    locationTag: 'Deep Space',
    theme: 'space',

    image: {
        url: 'https://d2pn8kiwq2w21t.cloudfront.net/images/74-mission-past-Kepler_0.width-640.png',
        alt: 'NASA illustration of the Kepler Space Telescope with its golden body and solar panels',
        caption: 'An artist illustration of NASA\'s Kepler Space Telescope, the amazing planet hunter. (Image: NASA/JPL-Caltech)'
    },

    specs: [
        { label: 'Space Program', value: 'Kepler / K2' },
        { label: 'Launch Date', value: 'March 6, 2009' },
        { label: 'Mission Ended', value: 'October 30, 2018' },
        { label: 'Mission Duration', value: 'Over 9 years' },
        { label: 'Planets Discovered', value: 'More than 2,600' },
        { label: 'Main Job', value: 'Finding planets around other stars' },
        { label: 'Power Source', value: 'Solar panels' },
        { label: 'Location', value: 'Orbiting the Sun' },
        { label: 'Current Status', value: 'Retired in space' }
    ],

    sections: [
        {
            heading: 'What Is the Kepler Space Telescope?',
            paragraphs: [
                'Imagine looking up at the night sky and wondering whether any of those tiny stars have planets like Earth. That is exactly what NASA wanted to discover when it launched the Kepler Space Telescope in 2009!',
                'Kepler was a special robotic telescope sent into space to search for planets outside our Solar System. Scientists call these distant worlds exoplanets. Some are giant gas planets like Jupiter, while others are smaller, rocky worlds that might be similar to Earth.',
                'Unlike a Mars rover, Kepler did not land on another planet or drive across its surface. Instead, it traveled around the Sun while carefully watching thousands of distant stars.',
                'Kepler became one of the most successful planet hunters in history. During its mission, it helped scientists discover more than 2,600 planets beyond our Solar System!'
            ]
        },

        {
            heading: 'How Did It Work?',
            paragraphs: [
                'Kepler worked a little like a space detective! Instead of looking for footprints or fingerprints, it searched for tiny changes in the light coming from distant stars.',
                'Imagine holding a flashlight while a tiny bug flies in front of it. For just a moment, the light becomes a little dimmer. Kepler used a similar trick to find planets. When a planet passed in front of its star, it blocked a tiny amount of the starlight reaching the telescope.',
                'Kepler had a powerful camera and special instruments that measured these tiny changes in brightness. By watching the same stars again and again, scientists could look for patterns that suggested planets were orbiting them.',
                'The telescope also used solar panels to collect sunlight and turn it into electricity. This energy powered its computers, cameras, and other equipment while it worked in space.',
                'Kepler did not usually take pictures that showed planets directly. Instead, it collected information about starlight, which scientists studied to work out whether a planet might be there!'
            ]
        },

        {
            heading: 'What Did We Leave Behind?',
            paragraphs: [
                'Did you know that the Kepler Space Telescope is still traveling through space, even though its mission ended years ago?',
                'After spending more than nine years searching for distant planets, Kepler began running out of the fuel it needed to point itself accurately. Without enough fuel, it could no longer continue its scientific observations.',
                'On October 30, 2018, NASA announced that Kepler was retiring. Engineers later sent the spacecraft its final instructions and switched off its communication systems.',
                'Unlike the equipment left behind on the Moon and Mars, Kepler was not abandoned on a planet. It remains in an orbit around the Sun, following a path similar to Earth\'s orbit.',
                'Although Kepler can no longer search the stars, it remains an important piece of space history. Its observations are still being studied by scientists, helping them discover more about the incredible worlds beyond our Solar System.'
            ]
        },

        {
            heading: 'Fun Facts!',
            paragraphs: [
                'Kepler watched more than half a million stars during its mission! That is an enormous number of stars, especially when you remember that scientists were looking for tiny changes in their brightness.',
                'One of Kepler\'s most exciting discoveries was a planet called Kepler-16b, which orbits two stars instead of one! Imagine living in a world where two suns could appear in the sky.',
                'In 2013, two of Kepler\'s special steering wheels stopped working. These were not normal wheels like those on a car. They were devices called reaction wheels, which helped the telescope point in the right direction.',
                'NASA engineers came up with a clever solution! They used pressure from sunlight to help balance the spacecraft, allowing it to continue making discoveries during a second mission called K2.',
                'Kepler was originally planned to search for planets for about three and a half years. Instead, it continued operating for more than nine years, helping scientists discover thousands of amazing new worlds!', 
                'Some planets found using Kepler\'s observations are much larger than Earth, while others are rocky and closer to Earth\'s size. Scientists even found planets orbiting at distances from their stars where temperatures might allow liquid water to exist.'
            ]
        },

        {
            heading: 'Why Is It Important?',
            paragraphs: [
                'Before Kepler, scientists knew about some planets orbiting other stars, but they did not know how common these worlds really were. Kepler helped change that by showing that planets are incredibly common throughout our galaxy.',
                'The telescope helped scientists understand that many stars have planets orbiting them. Some of these worlds may have conditions that could allow liquid water to exist, an important ingredient for life as we know it.',
                'Kepler also taught astronomers how to find planets by studying tiny changes in starlight. Its discoveries helped prepare the way for newer planet-hunting missions, including NASA\'s TESS space telescope.',
                'Most importantly, Kepler showed us that Earth is only one planet in a galaxy filled with billions of other worlds. Its discoveries encourage scientists to keep asking one of humanity\'s biggest questions: Could life exist somewhere else in the universe?'
            ]
        }
    ],

    didYouKnow: {
        title: 'Did You Know?',
        text: 'Kepler helped discover a real planet with TWO suns! The planet, called Kepler-16b, orbits two stars instead of just one. Imagine looking up and seeing two suns in the sky! This amazing discovery showed scientists that planets can exist in places very different from our own Solar System.'
    }
})
};
  