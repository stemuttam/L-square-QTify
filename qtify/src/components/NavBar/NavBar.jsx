import React, { useState } from "react";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import SearchBar from "../SearchBar/SearchBar";
import FeedBackModal from "../Modals/FeedBackModal/FeedBackModal";
import { showToast } from "../../config/helper-methods";
import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = ({ data, logo = false, search = false, feedback = false }) => {
  const [isFeedBackModalOpen, setIsFeedBackModalOpen] = useState(false);
  const navigate = useNavigate();

  const _toggleFeedBackModal = (value = false) => {
    setIsFeedBackModalOpen(value);
  };

  const _onSuccess = () => {
    showToast("Feedback Submitted", "success");
  };

  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}>
        <div className={styles.logoWrapper} onClick={() => navigate(`/`)}>
          {logo ? <Logo id={styles.logo} /> : null}
        </div>
        {search ? (
          <div className={styles.searchWrapper}>
            <SearchBar placeholder="Search an album of your choice" data={data} />
          </div>
        ) : null}
        {feedback ? (
          <div className={styles.nav_link}>
            <Button
              text="Give Feedback"
              onClick={() => _toggleFeedBackModal(true)}
            />
          </div>
        ) : null}
      </nav>
      <FeedBackModal
        isOpen={isFeedBackModalOpen}
        onSuccess={_onSuccess}
        onDismiss={_toggleFeedBackModal}
      />
    </div>
  );
};

export default NavBar;
