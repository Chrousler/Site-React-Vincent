import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PostloaderWarning from '../components/PostloaderWarning';
import SocialLinkCard from '../components/SocialLinkCard';

import {
  FaTelegramPlane,
  FaVk,
  FaSteam,
  FaYoutube,
  FaTwitch,
  FaEnvelope,
} from 'react-icons/fa';

import styles from './HomePage.module.scss';

const links = [
  {
    icon: FaTelegramPlane,
    label: 'Telegram — t.me/vincentvelasco',
    url: 'https://t.me/vincentvelasco',
  },
  {
    icon: FaVk,
    label: 'VK — vk.com/iflourished',
    url: 'https://vk.com/iflourished',
  },
  {
    icon: FaSteam,
    label: 'Steam — velascoO_oVincent',
    url: 'https://steamcommunity.com/id/velascoO_oVincent',
  },
  {
    icon: FaSteam,
    label: 'Steam — devrioz',
    url: 'https://steamcommunity.com/id/devrioz',
  },
  {
    icon: FaYoutube,
    label: 'YouTube — @vincent',
    url: 'https://www.youtube.com/@vincent',
  },
  {
    icon: FaTwitch,
    label: 'Twitch — vincentvelasco',
    url: 'https://www.twitch.tv/vincentvelasco',
  },
  {
    icon: FaEnvelope,
    label: 'Email — vinvelasco.adv@gmail.com',
    url: 'mailto:vinvelasco.adv@gmail.com',
  },
];

export default function HomePage() {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    setShowWarning(true);
    const timer = setTimeout(() => setShowWarning(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Vincent Velasco — Главная</title>
        <meta
          name="description"
          content="Официальный сайт Vincent Velasco — соцсети и проекты."
        />
        <meta property="og:url" content="http://localhost:5173/" />
      </Helmet>

      {showWarning && (
        <PostloaderWarning message="Этот сайт не собирает ваши данные. Всё создано для людей, которые хотят узнать больше о Vincent Velasco." />
      )}

      <div className={styles.container}>
        <h1 className={styles.title}>Explore my socials and projects</h1>
        <div className={styles.grid}>
          {links.map((link, i) => (
            <SocialLinkCard key={i} {...link} />
          ))}
        </div>
      </div>
    </>
  );
}
