import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "@i18n/navigation";
import AppData from "@data/app.json";
import classNames from "classnames";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const locale = useLocale();
  const asPath = usePathname();
  const [isSubOpen, setIsSubOpen] = useState(null);
  const t = useTranslations("header");
  useEffect(() => {
    setMenuOpen(false);
  }, [asPath]);

  const isPathActive = (path) => {
    const currentPath = asPath.replace(`/${locale}`, "/");
    return (
      (currentPath.endsWith(path) == 1 && path !== "/") || currentPath === path
    );
  };

  return (
    <header className={classNames(styles.header)}>
      <nav className={styles.nav}>
        {/* Left Links (Desktop) */}
        <div className={styles.navLinks}>
          {AppData.header.menu.left.map((item) => {
            return (
              <div
                key={item.label}
                className={classNames(
                  styles.link,
                  isPathActive(item.link) && styles.activeLink
                )}
              >
                <Link href={item.link}>{t(item.label)}</Link>
              </div>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <img
              src={AppData.header.logo.image}
              className="tst-logo"
              height={60}
              alt={AppData.header.logo.alt}
            />
          </Link>
        </div>

        {/* Right Links (Desktop) */}
        <div className={styles.navLinks}>
          {AppData.header.menu.right.map((item) => {
            return (
              <div
                key={item.label}
                className={classNames(
                  styles.link,
                  isPathActive(item.link) && styles.activeLink
                )}
                onMouseEnter={() => setIsSubOpen(item.label)}
                onMouseLeave={() => setIsSubOpen(null)}
              >
                <Link href={!!item.children?.length ? "#" : item.link}>
                  {t(item.label)}
                </Link>
                {!!item.children?.length && (
                  <div
                    className={classNames(styles.subLinks, {
                      [styles.hidden]: !(item.label === isSubOpen),
                    })}
                    key={item.label}
                  >
                    {item.children?.map((child) => (
                      <div
                        key={`sub-header-${child.label}`}
                        className={classNames(
                          styles.link,
                          isPathActive(child.link) && styles.activeLink
                        )}
                      >
                        <Link href={child.link}>{t(child.label)}</Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className={styles.languageWrap}>
          <LanguageSwitcher />
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className={styles.mobileMenu}>
            {[...AppData.header.menu.left, ...AppData.header.menu.right].map(
              (item) => (
                <div className={classNames("d-flex flex-column")}>
                  {item.children.length ? (
                    <div
                      className={classNames("d-flex", {
                        [styles.subLink]: item.children.length,
                      })}
                      onClick={() => {
                        setIsSubOpen((prev) => (prev ? null : item.label));
                      }}
                    >
                      {t(item.label)}
                    </div>
                  ) : (
                    <Link
                      className={classNames(
                        isPathActive(item.link) && styles.mobileActiveLink
                      )}
                      href={item.link}
                    >
                      {t(item.label)}
                    </Link>
                  )}
                  {!!item.children?.length && isSubOpen === item.label && (
                    <div
                      className={classNames(styles.subLinks, {
                        [styles.hidden]: !(item.label === isSubOpen),
                      })}
                      key={item.label}
                    >
                      {item.children?.map((child) => (
                        <div
                          key={`sub-header-${child.label}`}
                          className={classNames(styles.link)}
                        >
                          <Link
                            className={classNames(
                              "d-flex",
                              isPathActive(child.link) &&
                                styles.mobileActiveLink
                            )}
                            href={child.link}
                          >
                            {t(child.label)}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        )}
      </nav>
    </header>
  );
};
