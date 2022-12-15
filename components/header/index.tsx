import Link from "next/link";
import React, { FunctionComponent, useEffect, useState } from "react";
import { getAllCompetitions } from "../../data/competitions";
import { Competition } from "../../types";
import styles from "./header.module.scss";

const Header: FunctionComponent = () => {
  const [showCompetitions, setShowCompetitions] = useState(false);

  const [competitions, setCompetitions] =
    useState<{ name: string | undefined; slug: string | undefined }[]>();

  useEffect(() => {
    getAllCompetitions().then((data: Competition[]) => {
      setCompetitions(
        data.map((comp) => ({ name: comp.name, slug: comp.slug.current }))
      );
    });
  }, []);

  return (
    <header className={styles.navbar}>
      <Link href="/aktuellt">
        <a>Aktuellt</a>
      </Link>
      <div>
        <button onClick={() => setShowCompetitions(!showCompetitions)}>
          Deltävlingar
        </button>
        {showCompetitions && (
          <ul>
            {competitions?.map((comp) => (
              <li key={comp.slug}>
                <Link href={"/deltavling/" + comp.slug}>
                  <a>{comp.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Link href="/arslista">
        <a>Årslista</a>
      </Link>
      <Link href="/deltagare">
        <a>Deltagare</a>
      </Link>
      <Link href="/">
        <a>Hem (LOGO)</a>
      </Link>
      <Link href="/statistik">
        <a>Statistik</a>
      </Link>
      <Link href="/galleri">
        <a>Galleri</a>
      </Link>
      <Link href="/om-touren">
        <a>Om Touren</a>
      </Link>
    </header>
  );
};

export default Header;
