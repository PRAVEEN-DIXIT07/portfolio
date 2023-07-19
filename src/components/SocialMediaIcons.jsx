const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/praveen-dixit-17a45026b/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://codeforces.com/profile/i_am_dixit"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="codeforces-link" src="../assets/code-forces.png" className="filter invert" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.codechef.com/users/albatross7302"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="codechef-link" src="../assets/codechef.png" className="filter invert" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/PRAVEEN-DIXIT07"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="../assets/github.png" className="filter invert" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="../assets/MYRESUME.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="../assets/resumeicon.png" className="filter invert" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
