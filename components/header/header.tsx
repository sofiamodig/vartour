import Image from "next/image";
import Link from "next/link";
import React, { FunctionComponent, useEffect, useState } from "react";
import { getAllCompetitions } from "../../data/competitions";
import { Competition } from "../../types";
import logo from "../../images/logo.svg";
import styles from "./Header.module.scss";
import { ArrowDown } from "../../images/icons/arrow_down";

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
    <header className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.logo}>
          <Image src={logo} />
        </div>
        <div className={styles.nav}>
          <Link href="/aktuellt">
            <a>Aktuellt</a>
          </Link>
          <div className={styles.subNavWrapper}>
            <button onClick={() => setShowCompetitions(!showCompetitions)}>
              Deltävlingar
              <ArrowDown />
            </button>
            {showCompetitions && (
              <ul className={styles.subNav}>
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
          <Link href="/statistik">
            <a>Statistik</a>
          </Link>
          <Link href="/galleri">
            <a>Galleri</a>
          </Link>
          <Link href="/om-touren">
            <a>Om Touren</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
