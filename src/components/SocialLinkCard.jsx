import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaShieldAlt } from 'react-icons/fa'
import ConfirmModal from './ConfirmModal'
import styles from './SocialLinkCard.module.scss'

export default function SocialLinkCard({ icon: Icon, label, url }) {
  const [isModalOpen, setModalOpen] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()        // блокируем переход
    setModalOpen(true)        // показываем модалку
  }

  const onConfirm = () => {
    setModalOpen(false)
    window.open(url, '_blank')
  }

  const onCancel = () => setModalOpen(false)

  return (
    <>
      <motion.a
        className={styles.card}
        href={url}
        onClick={handleClick}
        whileHover={{ scale: 1.03, backdropFilter: 'blur(20px)' }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Icon className={styles.icon} />
        <span className={styles.label}>{label}</span>
      </motion.a>

      <ConfirmModal
        isOpen={isModalOpen}
        message={`Вы уверены, что хотите перейти на:\n${label}?`}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  )
}
