import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "@i18n/navigation";
import AppData from "@data/app.json";
import classNames from "classnames";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export const Header = ({ data }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const locale = useLocale();
  const asPath = usePathname();
  const [isSubOpen, setIsSubOpen] = useState(null);
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
          {data?.left_menu.map((item) => {
            return (
              <div
                key={`left_menu-${item.id}`}
                className={classNames(
                  styles.link,
                  isPathActive(item.link) && styles.activeLink
                )}
              >
                <Link href={item.link ?? ""}>{item.label}</Link>
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
              src={`${process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL}${data?.logo?.data?.attributes?.url}`}
              className="tst-logo"
              height={60}
              alt={AppData.header.logo.alt}
            />
          </Link>
        </div>

        {/* Right Links (Desktop) */}
        <div className={styles.navLinks}>
          {data?.right_menu?.map((item) => {
            return (
              <div
                key={`right_menu-${item.id}`}
                className={classNames(
                  styles.link,
                  isPathActive(item.link) && styles.activeLink
                )}
                onMouseEnter={() => setIsSubOpen(item.label)}
                onMouseLeave={() => setIsSubOpen(null)}
              >
                <Link href={!!item.sub_menu?.length ? "#" : item.link ?? ""}>
                  {item.label}
                </Link>
                {!!item.sub_menu?.length && (
                  <div
                    className={classNames(styles.subLinks, {
                      [styles.hidden]: !(item.label === isSubOpen),
                    })}
                    key={item.id}
                  >
                    {item.sub_menu?.map((child) => (
                      <div
                        key={`sub-header-${child.id}`}
                        className={classNames(
                          styles.link,
                          isPathActive(child.link) && styles.activeLink
                        )}
                      >
                        <Link href={child.link}>{child.label}</Link>
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
            {[...data?.left_menu, ...data?.right_menu].map((item) => (
              <div key={item.id} className={classNames("d-flex flex-column")}>
                {item.sub_menu?.length ? (
                  <div
                    className={classNames("d-flex", {
                      [styles.subLink]: item.sub_menu?.length,
                    })}
                    onClick={() => {
                      setIsSubOpen((prev) => (prev ? null : item.label));
                    }}
                  >
                    {item.label}
                  </div>
                ) : (
                  <Link
                    className={classNames(
                      isPathActive(item.link) && styles.mobileActiveLink
                    )}
                    href={item.link ?? ""}
                  >
                    {item.label}
                  </Link>
                )}
                {!!item.sub_menu?.length && isSubOpen === item.label && (
                  <div
                    className={classNames(styles.subLinks, {
                      [styles.hidden]: !(item.label === isSubOpen),
                    })}
                    key={`sub-menu=${item.id}`}
                  >
                    {item.sub_menu?.map((child) => (
                      <div
                        key={`sub-header-${child.label}`}
                        className={classNames(styles.link)}
                      >
                        <Link
                          className={classNames(
                            "d-flex",
                            isPathActive(child.link) && styles.mobileActiveLink
                          )}
                          href={child.link ?? ""}
                        >
                          {child.label}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};
