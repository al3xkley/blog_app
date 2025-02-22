"use client";

import React, { useState } from "react";
import styles from "./writePage.module.css";
import Image from "next/image";
import ReactQuill from "react-quill-new";
import "react-quill/dist/quill.bubble.css";

export default function Writepage() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>("");
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" />
      <div className={styles.editor}>
        <button className={styles.button}>
          <Image src="/plus.png" alt="plus img" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.addPanel}>
            <button className={styles.button}>
              <Image src="/image.png" alt="add img" width={16} height={16} />
            </button>
            <button className={styles.button}>
              <Image
                src="/external.png"
                alt="add link img"
                width={16}
                height={16}
              />
            </button>
            <button className={styles.button}>
              <Image
                src="/video.png"
                alt="add video img"
                width={16}
                height={16}
              />
            </button>
          </div>
        )}
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="tell your story"
        />
      </div>
    </div>
  );
}
