"use client";

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Home, Calendar, Info, MapPin, Star } from 'lucide-react';
import Link from 'next/link';

type IconComponentType = React.ElementType<{ className?: string }>;
export interface InteractiveMenuItem {
  label: string;
  icon: IconComponentType;
  href: string;
}

export interface InteractiveMenuProps {
  items?: InteractiveMenuItem[];
  accentColor?: string;
}

const defaultItems: InteractiveMenuItem[] = [
  { label: 'Home', icon: Home, href: '/' },
  { label: 'Events', icon: Calendar, href: '/timeline' },
  { label: 'Days', icon: Info, href: '/details' },
];

const defaultAccentColor = '#3b82f6';

const InteractiveMenu: React.FC<InteractiveMenuProps> = ({ items, accentColor }) => {

  const finalItems = useMemo(() => {
    const isValid = items && Array.isArray(items) && items.length === 3;
    if (!isValid) {
      return defaultItems;
    }
    return items;
  }, [items]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (activeIndex >= finalItems.length) {
      setActiveIndex(0);
    }
  }, [finalItems, activeIndex]);

  const textRefs = useRef<(HTMLElement | null)[]>([]);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const setLineWidth = () => {
      const activeItemElement = itemRefs.current[activeIndex];
      const activeTextElement = textRefs.current[activeIndex];

      if (activeItemElement && activeTextElement) {
        const textWidth = activeTextElement.offsetWidth;
        activeItemElement.style.setProperty('--lineWidth', `${textWidth}px`);
      }
    };

    setLineWidth();

    window.addEventListener('resize', setLineWidth);
    return () => {
      window.removeEventListener('resize', setLineWidth);
    };
  }, [activeIndex, finalItems]);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  const navStyle = useMemo(() => {
    const activeColor = accentColor || defaultAccentColor;
    return {
      '--component-active-color': activeColor,
      'position': 'fixed',
      'bottom': '20px',
      'left': '50%',
      'transform': 'translateX(-50%)',
      'zIndex': 100
    } as React.CSSProperties;
  }, [accentColor]);

  return (
    <>
      <style jsx global>{`
      .menu {
        display: flex;
        background: rgba(15, 15, 15, 0.8);
        backdrop-filter: blur(12px);
        padding: 8px 16px;
        border-radius: 24px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        gap: 8px;
      }
      .menu__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 8px 12px;
        border-radius: 16px;
        color: rgba(255, 255, 255, 0.5);
        transition: all 0.3s ease;
        position: relative;
        text-decoration: none;
      }
      .menu__item.active {
        color: var(--component-active-color);
        background: rgba(255, 255, 255, 0.05);
      }
      .menu__icon {
        width: 20px;
        height: 20px;
        margin-bottom: 4px;
      }
      .menu__text {
        font-size: 10px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        max-width: 0;
        overflow: hidden;
        transition: max-width 0.3s ease, opacity 0.3s ease;
        opacity: 0;
      }
      .menu__item.active .menu__text {
        max-width: 100px;
        opacity: 1;
      }
    `}</style>
      <nav
        className="menu sm:hidden"
        role="navigation"
        style={navStyle}
      >
        {finalItems.map((item, index) => {
          const isActive = index === activeIndex;
          const IconComponent = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`menu__item ${isActive ? 'active' : ''}`}
              onClick={() => handleItemClick(index)}
              ref={(el) => { itemRefs.current[index] = el; }}
            >
              <div className="menu__icon">
                <IconComponent className="icon" />
              </div>
              <strong
                className={`menu__text ${isActive ? 'active' : ''}`}
                ref={(el) => { textRefs.current[index] = el; }}
              >
                {item.label}
              </strong>
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export { InteractiveMenu };