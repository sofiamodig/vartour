import Image from "next/image";
import React from "react";
import Section from "../components/section";
import trophy from "../images/var_tour.png";
import groupPhoto from "../images/group.png";
import Row from "../components/row";
import { PageHero } from "../components/heros/pageHero";

const OmTouren = () => {
  return (
    <div>
      <PageHero
        image={groupPhoto.src}
        title="Om touren"
        subTitle="Någon text?"
      />
      <Section>
        <Row maxWidth="800px">
          <label className="above-title">Text</label>
          <h2>Någon titel här</h2>
          <p>
            Huvud tävlingen som spelas över tre dagar där de tre bästa spelarna
            efter 3 rundor och alla segrare i de separata tävlingarna samt en
            inlottad gör upp i en shootout. För varje dag räknas vanlig slaggolf
            (+5) med normalt HCP som justeras upp eller ner efter avslutad runda
            för tävlingen (sen är det upp till var och en om de vill registrera
            sin höjning/sänkning på golf.se). Skulle det vara lika netto
            resultat är den med lägst HCP före i resultatlistan. Varje dag
            spelas också som en separat tävling med egna priser.
          </p>
          <Image src={trophy} width={150} height={460} />
        </Row>
        <Row maxWidth="800px">
          <h3>Shootout.</h3>
          <p>
            Spelas direkt efter avslutad prisutdelning för del-tävlingen dag 3
            och de som inte tagit sig till shootout följer med som publik.
            Shootouten spelas med matchspels regler som förklaras nedan. Efter
            hål 1 skall endast 3 spelare gå vidare till hål 2, där skall
            ytterligare en spelar slås ut. När det bara är två spelare kvar,
            spelar de vidare till en står som segrare.
          </p>
          <h3>Ranking inför Shootout</h3>
          <p>1. Sammalagt 1:a efter 3 dagar</p>
          <p>2. Sammalagt 2:a efter 3 dagar</p>
          <p>3. Sammalagt 3:a efter 3 dagar</p>
          <p>4. Sammalagt bäste del-segrare efter 3 dagar</p>
          <p>5. Sammalagt näst bäste del-segrare efter 3 dagar</p>
          <p>6. Sammalagt tredje bäste del-segrare efter 3 dagar</p>
          <p>7. Inlottad</p>
          <h3>Hål 1.</h3>
          <p>
            Man utgår ifrån den med lägst HCP övriga får mellanskillnaden av
            sitt spel -HCP mot den med lägst spel-HCP. Spelaren med lägst
            spel-HCP spelar ”scratch” övriga får spel-HCP enligt
            mellanskillnaden. Slagen fördelas som vanligt efter banan index. De
            tre med längst netto resultat på hålet går vidare till hål 2. Vid
            lika resultat avgör rankingen, dvs. den med lägst ranking blir
            utslagen.
          </p>
          <h3>Hål 2.</h3>
          <p>
            Skulle den med lägst HCP på hål 1 bli utslagen på hål 1 så måste
            spel-HCP räknas om enligt samma sätt som inför första hålet. Den med
            högsta netto resultat på hålet blir utslagen. Vid lika resultat
            avgör rankingen, dvs. den med lägst ranking blir utslagen.
          </p>
          <h3>Hål 3</h3>
          <p>
            Skulle den med lägst HCP på hål 2 bli utslagen på hål 2 så måste
            spel-HCP räknas om enligt samma sätt som inför första hålet. Nu
            fortsätter det som en vanlig match dvs. vid lika resultat spelas
            nästa hål och fortsätter till en spelare har ett lägre netto
            resultat än den andra.
          </p>
        </Row>
      </Section>
      <Section padding="none">
        <Row>
          <Image src={groupPhoto} />
        </Row>
      </Section>
    </div>
  );
};

export default OmTouren;
