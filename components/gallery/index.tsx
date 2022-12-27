import React, { FunctionComponent, useState } from "react";
import Image from "next/image";
import styles from "./gallery.module.scss";
import Row from "../row";

interface Props {
  images: string[];
  columns?: 3 | 4;
}

const Gallery: FunctionComponent<Props> = ({ images, columns = 4 }) => {
  const [selected, setSelected] = useState<number>();

  return (
    <div>
      <div className={styles.wrapper}>
        {images.map((image, i) => (
          <div
            key={image}
            className={styles.imageWrapper + " " + styles["column-" + columns]}
            onClick={() => setSelected(i)}
          >
            <Image src={image} layout="fill" objectFit="cover" priority />
          </div>
        ))}
      </div>
      {selected !== undefined && (
        <div className={styles.slideshowWrapper}>
          <div
            className={styles.backdrop}
            onClick={() => setSelected(undefined)}
          />
          <button
            className={styles.beforeArrow}
            onClick={() =>
              setSelected(selected === 0 ? images.length - 1 : selected - 1)
            }
          />
          <div
            className={styles.slideshowImageWrapper}
            onClick={() => setSelected(undefined)}
          >
            <Image
              src={images[selected]}
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <button
            className={styles.afterArrow}
            onClick={() =>
              setSelected(selected === images.length - 1 ? 0 : selected + 1)
            }
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
