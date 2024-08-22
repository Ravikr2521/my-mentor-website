"use client";
export const scrollToMentorSection = () => {
  const mentorSection = document.getElementById("start-mentor");
  if (mentorSection) {
    mentorSection.scrollIntoView({ behavior: "smooth" });
  }
};
