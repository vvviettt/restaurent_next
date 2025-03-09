"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@i18n/navigation";
import styles from "./LanguageSwitcher.module.scss";
import AppData from "@data/app.json";

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();

  const languages = AppData.header.languages;

  const currentLang = languages.find((lang) => lang.code === locale);

  return (
    <div className={styles.languageSwitcher}>
      {/* Nút mở dropdown */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.toggleButton}
      >
        <span>{currentLang?.flag}</span>
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M7 10L12 15L17 10"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </button>

      {/* Danh sách ngôn ngữ */}
      {isOpen && (
        <ul className={styles.dropdown}>
          {languages.map(({ code, label, flag }) => (
            <li key={code} onClick={() => setIsOpen(false)}>
              <Link
                key={code}
                href={pathname}
                locale={code}
                className={styles.link}
              >
                {flag}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
