import React, { useState } from "react";
import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import FeedBackModal from "../Modals/FeedBackModal/FeedBackModal";
import { showToast } from "../../config/helper-methods";
import { useNavigate } from "react-router-dom";

const NavBar = ({ data, logo = true, search = true, feedback = true }) => {
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
        {logo && (
          <div
            className={styles.logoWrapper}
            data-testid="logo-wrapper" /* For testing vertical centering and spacing */
            onClick={() => navigate(`/`)}
          >
            <Logo id={styles.logo} />
          </div>
        )}
        {search && (
          <div className={styles.searchWrapper}>
            <SearchBar
              placeholder="search"
              data={data}
              data-testid="search-bar" /* For testing placeholder */
            />
          </div>
        )}
        {feedback && (
          <button
            className={styles.navButton}
            data-testid="feedback-button" /* For testing button styles */
            onClick={() => _toggleFeedBackModal(true)}
          >
            Feedback
          </button>
        )}
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
