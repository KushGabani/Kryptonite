const SocialLink = ({ text, link }) => {
  return (
    <a href={link} target={"_blank"} rel="noreferrer">
      <div className={"hover:text-white cursor-pointer text-sm"}>{text}</div>
    </a>
  );
};

export default SocialLink;
