import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "@i18n/navigation";
import AppData from "@data/app.json";
import classNames from "classnames";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const locale = useLocale();
  const asPath = usePathname();

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
                <Link href={item.link}>{item.label}</Link>
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
              >
                <Link href={item.link}>{item.label}</Link>
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
                <Link
                  className={classNames(
                    isPathActive(item.link) && styles.mobileActiveLink
                  )}
                  href={item.link}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        )}
      </nav>
    </header>
  );
};
