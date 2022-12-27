import type { NextPage } from "next";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Section from "../components/section";
import Row from "../components/row";
import { StartPageHero } from "../components/heros/startPageHero";
import { Button } from "../components/button";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";
import varTourTrophyImg from "../images/vartourtrophy.png";
import { getAllYears } from "../data/years";
import { getAllPlayers } from "../data/players";
import { GalleryType, Player, Winners, Year } from "../types";
import { varTourRef } from "./_app";
import groupImage from "../images/groupphoto.png";
import { getStartPageGallery } from "../data/gallery";
import { useEffect, useState } from "react";
import Gallery from "../components/gallery";

export const client = createClient({
  projectId: "p2jab1yc",
  dataset: "production",
  apiVersion: "2022-10-21",
  useCdn: false,
});

export const imgBuilder = imageUrlBuilder({
  projectId: "p2jab1yc",
  dataset: "production",
});

export function urlFor(source: any) {
  return imgBuilder.image(source);
}

interface Props {
  latestYear: Year;
  winner: Player;
  gallery: GalleryType;
}

const Home: NextPage<Props> = ({ latestYear, winner, gallery }) => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const images = gallery.images.map((img) => urlFor(img).url());
    setImages(images);
  }, [gallery]);

  return (
    <>
      <StartPageHero year={latestYear.slug.current} winner={winner.name} />
      <Section>
        <Row maxWidth="630px">
          <div className={styles.aboutTourRow}>
            <div className={styles.aboutTourImageRow}>
              <Image
                src={varTourTrophyImg}
                alt="Vår tour trofé"
                height={424}
                width={116}
              />
            </div>
            <div className={styles.aboutTourText}>
              <label className="above-title">Om touren</label>
              <h2>Vår tour</h2>
              <p>
                Vår Tour är en golftävling som har spelats varje år sedan 1996.
                Huvudtävlingen utgörs av tre deltävlingar över tre dagar. De tre
                bästa spelarna totalt över dessa tre dagar samt alla enskilda
                segrare från deltävlingarna (+ en inlottad spelare) gör sedan
                upp i en shootout. Vinnaren av shootouten tar hem Vår Tour.
              </p>
              <Link href="/">
                <div>
                  <Button label="Läs mer" />
                </div>
              </Link>
            </div>
          </div>
        </Row>
      </Section>
      <Section padding="none">
        <Row>
          <Image src={groupImage} width="1120px" height="666px" />
        </Row>
      </Section>
      <Section>
        <Row>
          <div className="center-text">
            <label className="above-title">Vår tour</label>
            <h2>Deltävlingar</h2>
          </div>
        </Row>
      </Section>
      <Section background="white">
        <Row>
          <div>
            <label className="above-title">Bilder</label>
            <h2>Galleri</h2>
          </div>
          <div>
            <Gallery images={images} columns={3} />
          </div>
        </Row>
      </Section>
      <Section padding="small">
        <Row>
          <div className="center-text">
            <label className="above-title">Aktuellt</label>
            <h2>Var lirar vi nästa år?</h2>
            <Link href="/">
              <div>
                <Button label="Läs mer" />
              </div>
            </Link>
          </div>
        </Row>
      </Section>
      <Section background="white">
        <Row>
          <div>
            <label className="above-title">Historia</label>
            <h2>Hur kom touren till?</h2>
          </div>
          <div className={styles.historyText}>
            <div>
              <p>
                Som jag minns det var det hösten 1991. Jag hade fått i
                födelsedagspresent att ta grönt kort, så hette det på den tiden.
                Magnus Lindfors var en av mina insperatörer, han hade tagit sitt
                gröna kort för en pro i Sälen fjällen året innan. Det lät
                perfekt. Vi åkte dit.
              </p>
              <p>
                Jag minns hur jävla ont i händerna och ryggen jag hade efter
                första dagen – en måndag, för att inte tala om andra dagen…………..
                så onsdagen. På torsdagen fick jag ut och spela på banan. Det
                var kanonkul. Då kände jag inte av något ont, eller….
              </p>
              <p>
                Det kanske var på onsdagen eller torsdgen som Magnus och jag
                fick klart för oss att den där killen som slog sådan fantastiska
                slag och hans, goa, glada tjej kom från…TÄBY… från Gribbylund…
                VI VAR JU NÄSTAN GRANNAR. Och träffas här i Sälen. Det blev
                mycket skratt och snack.
              </p>
              <p>Sedan hem och spela. Kul var det…</p>
              <p>
                I september kom det en inbjudan från Micke Fagerström.
                ”Välkommen på tävling – HÖSTLÖVET”. Åhhh, jävlar tänkte jag. Va
                spännande, va läskigt. Pirrrr, pirrr…..
              </p>
              <p>
                Vi spelade tävlingen sent i september eller i början av oktober.
                Jag minns inte. Jag minns inte hur det gick för mig eller vem
                som vann. Det jag minns var att det var himla kul och att vi
                spelade så sent på dagen att det var nästan mörkt när vi kom in
                på Lisinge GK.
              </p>
              <p>
                Nästa år kom en ny inbjudan att spela Höstlövet, då på
                Johannesbergs GK. En rolig bana där flera duster i Vår Tour har
                spelats.
              </p>
              <p>
                Jag tror att det var året därpå som vi arrangerade en tour. Att
                vi hade flera tävlingar. Om jag minns rätt då så hade vi Nitty
                Gritty, OR Open och Höstlövet. Plus en tävling till, den
                tävlingen skulle fjolårets segrare arrangera. Fyra tävlingar
                alltså. Det var ett hårt tryck på banorna kring Stockholm så vi
                fick ofta åka några mil för att få komma ut. Jag minns att vi
                spelade på Grönlunds GK, Johannesbergs GK och Lindö GK. Någon
                gång även Örbyhus GK, norr om Uppsala.
              </p>
              <p>
                På några tävlingar blev det lite färre deltagare för att vi var
                tvungan att åka så långt. Då försökte vi få tider närmare
                Stockholm. Jag minns en gång när vi skulle spela OR Open på
                Lindö GK och Ola och Robert hade lagt i bollar i bollrännan. Vi
                deltagre var nog på plats vid halv sju. Och jag tror att vi nog
                bara var sju som ställde upp. Då sa vi – antingen så lägger vi
                ned Touren, för att det är så svårt att komma ut, eller så tar
                vi en helg och reser iväg. Det kändes lite tråkigt om vi skulle
                lägga ned Vår Tour men, ….. ja, du vet ju har det gick. Jag
                behöver inte orda om det.
              </p>
            </div>
            <div>
              <p>
                Första året 1997, åkte vi till Säters GK (och spelade ”Tomas
                Quick CUP”. För att komma till golfklubben var man tvungen att
                åka genom Säters Mental Sjukhus). Priset för tre greenfee och
                två övernattningar var 800:-. Det var Micke F som förhandlat
                till sig det priset.
              </p>
              <p>
                Nu är det svårt att tänka sig en golfsäsong utan en resa första
                helgen i september (den är helig). Det är nästan så att
                golfsäsongen börjar i februari när vi som arrangerar resan
                träffas. Sedan blir det en väntan fram till man kan plocka fram
                klubborna i april maj.
              </p>
              <p>
                Att som arrangör vara med om snacket bakom kulisserna, att
                kontakta banorna, få ja eller nej, eller ett för högt pris. Det
                är kul. När det sedan utkristaliseras vilken klubb som vi
                bestämmer oss för känns det kanonKUL.
              </p>
              <p>
                När så helgen i september närmar sig. Alla förväntaningar,
                förhoppningar. Nya bollar, den nya klubban som ska slå oändligt
                långa och rak slag. Några har varit och provspelat årets bana.
                När vi sätter oss i bilen. Snacket under resan, putsandet av
                klubborna. När man kommer till banan. Det är så mycket
                spännande, sådan uppladdning. På fredagen brukar jag tänka att
                vad lyxigt, vad fantastiskt, vilket privilegium att få ängna sig
                åt en sak, BARA en sak en hel helg. Om jag får bli lite
                allvarlig ett tag, så tror jag att det är väldigt, väldigt bra
                för oss stressade männsikor, mitt i karriären, med småbarn,
                tonårsbarn. Vi ska räcka till överallt. Att få ha detta andrum.
                Det är guld värt för själen.
              </p>
              <p>
                Sedan är det söndageftermiddag och jag ska åka hem. Vad fort
                helgen gick. Jag har slagit tre gånger 90-95 slag plus de på
                rangen förstås. Ätit gott, sovit gott. För att inte tala om alla
                glada skratt. Men det är någonstans sista dagen, på hål 10 som
                ett litet vemod inställer sig. Nu är det snart slut. Det är på
                samma sätt för mig på sommaren. När juli blir augusti känner jag
                alltid ett visst vemod. Sommaren håller på att avklinga, det är
                – nej jag orkar inte räkna hur många månader det är till nästa
                sommar.
              </p>
              <p>
                Men efter golfen i september åker jag hem trött och glad med en
                massa härliga upplevelser och goa skratt.
              </p>
              <p>
                Så, Vår Tourvänner. Jag hoppas att du som deltar i Vår Tour
                verkligen känner att det är VÅR Tour, av OSS – men framför allt
                FÖR oss.
              </p>
              <br />
              <p>- Johan</p>
            </div>
          </div>
        </Row>
      </Section>
      <Section>
        <Row>
          <div className="center-text">
            <label className="above-title">Kontakt</label>
            <h2>Har du frågor eller funderingar?</h2>
            <Link href="">
              <div>
                <Button label="Kontakta oss" />
              </div>
            </Link>
          </div>
        </Row>
      </Section>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const years = await getAllYears();
  const latestYear = years.reduce((prev: Year, current: Year) => {
    return prev.slug.current > current.slug.current ? prev : current;
  });
  const winnerRef = latestYear.winners.find(
    (winners: Winners) => winners.competition._ref == varTourRef
  )?.winner._ref;

  const players = await getAllPlayers();
  const winner = players.find((player: Player) => player._id == winnerRef);
  const gallery = await getStartPageGallery();

  return {
    props: {
      latestYear,
      winner,
      gallery,
    },
  };
}
